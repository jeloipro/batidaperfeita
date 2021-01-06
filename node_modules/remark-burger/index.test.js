const remark = require('remark')
const visit = require('unist-util-visit')
const plugin = require('.')

const extractPatty = (tree, name = 'patty') => {
  let targets = []
  visit(tree, name, (node) => {
    targets.push(node)
  })
  return targets
}

const parse = (text, options) => remark()
  .use(plugin, options)
  .parse(text)

const getPattyNodes = (text, options = {}) => extractPatty(parse(text, options), options.pattyName || 'patty')

describe('custom markers', () => {
  test('it uses default setting', () => {
    const pattyNodes = getPattyNodes('hello [[world]]')
    const { data } = pattyNodes[0]
    expect(data).toEqual({ content: 'world' })
  })
  
  test('it works with block', () => {
    const pattyNodes = getPattyNodes('hello \n[[\nworld\n]]')
    const { data } = pattyNodes[0]
    expect(data).toEqual({ content: '\nworld\n' })
  })
  
  test('it accepts custom markers', () => {
    const pattyNodes = getPattyNodes('hello <<world>>', {
      beginMarker: '<<',
      endMarker: '>>'
    })
    const { data } = pattyNodes[0]
    expect(data).toEqual({ content: 'world' })
  })
  
  test('it accepts custom markers', () => {
    const pattyNodes = getPattyNodes('hello --world--', {
      beginMarker: '--',
      endMarker: '--'
    })
    const { data } = pattyNodes[0]
    expect(data).toEqual({ content: 'world' })
  })
})

describe('multiple entries', () => {
  test('multiple entries', () => {
    const pattyNodes = getPattyNodes('hello [[world]], hallo [[Welt]], hola [[')
    expect(pattyNodes.length).toBe(2)
  })
})

describe('custom patty name', () => {
  test('custom patty name', () => {
    const pattyNodes = getPattyNodes('hello [[world]]', {
      pattyName: 'dvorak',
    })
    const { type } = pattyNodes[0]
    expect(type).toBe('dvorak')
  })
})

describe('onlyRunWithMarker', () => {
  test('it does nothing when `onlyRunWithMarker` is true without any markers', () => {
    const pattyNodes = getPattyNodes('hello [[world]]', {
      onlyRunWithMarker: true
    })
    expect(pattyNodes).toEqual([])
  })
  
  test('it uses `onlyRunWithMarker` with specified markers', () => {
    const pattyNodes = getPattyNodes('hello +world]]', {
      onlyRunWithMarker: true,
      beginMarker: '+',
    })
    const { data } = pattyNodes[0]
    expect(data).toEqual({ content: 'world' })
  })
})

describe('insertBefore', () => {
  test('it won\'t work with square bracket by default', () => {
    const pattyNodes = getPattyNodes('hello [world]', {
      beginMarker: '[',
      endMarker: ']'
    })
    expect(pattyNodes).toEqual([])
  })

  test('it works with square bracket after changing priority', () => {
    const pattyNodes = getPattyNodes('hello [world]', {
      beginMarker: '[',
      endMarker: ']',
      insertBefore: 'url'
    })
    const { data } = pattyNodes[0]
    expect(data).toEqual({ content: 'world' })
  })

  test('it won\'t work with backtick bracket by default', () => {
    const pattyNodes = getPattyNodes('hello `world`', {
      beginMarker: '`',
      endMarker: '`'
    })
    expect(pattyNodes).toEqual([])
  })

  test('it works with backtick after changing priority', () => {
    const pattyNodes = getPattyNodes('hello `world`', {
      beginMarker: '`',
      endMarker: '`',
      insertBefore: 'code'
    })
    const { data } = pattyNodes[0]
    expect(data).toEqual({ content: 'world' })
  })
})

describe('custom stringify', () => {

  function pattyStringify() {
    const Compiler = this.Compiler
    const { visitors } = Compiler.prototype
    visitors.patty = (node) => {
      return `\`${node.data.content}\``
    }
  }

  test('it works with custom stringify', () => {
    const result = remark()
    .use(plugin)
    .use(pattyStringify)
    .processSync('hello [[world]]')
    .toString()
    expect(result).toBe('hello `world`\n')
  })
})