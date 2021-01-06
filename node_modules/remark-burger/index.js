function plugin({ 
  beginMarker,
  endMarker,
  pattyName = 'patty',
  onlyRunWithMarker = false, 
  insertBefore = 'text' } = {}) {

  if (onlyRunWithMarker && !(beginMarker || endMarker)) return

  beginMarker = beginMarker || '[['
  endMarker = endMarker || ']]'

  function tokenizePatty(eat, value, silent) {
    const offset = beginMarker.length
    const openIndex = value.indexOf(beginMarker)
    if (openIndex !== 0) return

    const remaining = value.substring(openIndex + offset)
    const closeIndex = remaining.indexOf(endMarker)
    if (closeIndex === -1) return

    if (silent) return true

    const content = remaining.substring(0, closeIndex)
    return eat(`${beginMarker}${content}${endMarker}`)({
      type: pattyName,
      value: '',
      data: { content }
    })
  }

  function locator (value, fromIndex) {
    return value.indexOf(beginMarker, fromIndex)
  }

  tokenizePatty.locator = locator
  tokenizePatty.notInBlock = true
  tokenizePatty.notInList = true
  tokenizePatty.notInLink = true

  const Parser = this.Parser
  const {
    inlineTokenizers: tokenizers,
    inlineMethods: methods
  } = Parser.prototype

  tokenizers[pattyName] = tokenizePatty
  methods.splice(methods.indexOf(insertBefore), 0, pattyName)

  try {
    const Compiler = this.Compiler
    const { visitors } = Compiler.prototype
    if (!visitors) return
    visitors.patty = (node) => beginMarker + node.data.content + endMarker
  } catch(e) {
    // do nothign
  }
  
}

module.exports = plugin