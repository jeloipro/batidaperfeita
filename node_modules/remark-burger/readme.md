# remark-burger 🍔

A remark plugin that extracts text sandwiched between 2 customizable markers & turns it into a node. A transformer or stringify function can then do whatever with the new node type.

```bash
yarn add remark-burger
npm install remark-burger
```

---
```js
const burger = require('remark-burger')

remark()
  .use(burger)
  .parse('hello [[world]]')

//
//  { type: 'patty',
//    value: '',
//    data: { content: 'world' },
//    position: {
//      start: { line: 1, column: 7, offset: 6 },
//      end: { line: 1, column: 14, offset: 13 },
//      indent: [] } }

```

## Options

```ts
interface RemarkBurgerOptions {
  beginMarker?: string;
  endMarker?: string;
  pattyName?: string;
  onlyRunWithMarker?: boolean;
  insertBefore?: MarkdownMethods;
}
```

#### beginMarker & endMarker

The default pair is `[[` & `]]`.

```js
remark()
  .use(burger, {
    beginMarker: '<<',
    endMarker: '>>',
  })
  .parse('hello <<world>>')
```

If the marker pair conflicts with markdown default syntax, it won't work. For example, this won't work:

```js
remark()
  .use(burger, {
    beginMarker: '`',
    endMarker: '`',
  })
  .parse('hello `world`')
```

It is because by default, `remark-burger`'s tokenizer priority is very low so it won't be conflicted with markdown syntax. This can be configured with [`insertBefore`](#insertBefore) options.

#### pattyName

The default name is `patty`, but it can be configured to be whatever.

#### onlyRunWithMarker

This plugin won't run if no marker is declared. Default: `false`. The example below won't work:

```js
// doesn't work
remark()
  .use(burger, {
    onlyRunWithMarker: true
  })
  .parse('hello [[world]]')
```

#### insertBefore

Change the order in which the parser will call this plugin's tokenizer. Here's the order list:

```
escape
autoLink
url
html
link
reference
strong
emphasis
deletion
code
break
<- remark-burger ->
text
```

By default, `remark-burger`'s tokenizer is run before `text`. You can change this by passing in one of the method listed above. For example, this works:

```js
remark()
  .use(burger, {
    beginMarker: '`',
    endMarker: '`',
    insertBefore: 'code',
  })
  .parse('hello `world`')
```