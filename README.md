# @nberlette/emoji

Straightforward emoji database for your next project. Includes support for CommonJS, ES, and CLI.

## Using as a resource/dependency

### Install with [Yarn](https://yarnpkg.com/) (recommended)

```bash
yarn add @nberlette/emoji

# or npm
npm install --save @nberlette/emoji
```

### `import` - ECMAScript/ES

```js
// default import, any name works
import emojis from '@nberlette/emoji'

// named import, exposed as 'emoji'
import { emoji } from '@nberlette/emoji'
```

### `require` - CommonJS/Node

```js
const emoji = require('@nberlette/emoji')
```

## Command Line Interface

### Global install

```bash
yarn global add @nberlette/emoji

# or npm
npm install -g @nberlette/emoji
```

### Search for emojis!

```bash
$ emoji [keyword]
```

> `keyword` argument is optional, if omitted it returns the entire list of emojis.

#### Returns

* **Exact match**: returns just the emoji for `keyword`
* **Single result**: returns the emoji + keyword (or _trigger_)
* **Many results**: returns emoji + keyword for each match

![Example screenshot of emoji usage](https://github.com/nberlette/emoji/raw/master/screenshot.png)
