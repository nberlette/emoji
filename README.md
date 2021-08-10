# 🔥 @nberlette/emoji

Straightforward emoji database for your next project. Includes support for CommonJS, ES, and CLI. 

```bash
yarn add @nberlette/emoji
```

> [Yarn](https://yarnpkg.com/) saves this dependency in your `package.json` when installing locally.


## 📦  Using as a resource

### `import` - ECMAScript/ES

```js
// both named and default imports work just fine 
import emojis, { emoji } from '@nberlette/emoji'
```

### `require` - CommonJS/Node

```js
const emojis = require('@nberlette/emoji')
```

### Direct access to `emoji.json` via CDN

* 🔗 [`unpkg.com/@nberlette/emoji@latest/emoji.json`](unpkg.com/@nberlette/emoji@latest/emoji.json)
* 🔗 [`cdn.jsdelivr.net/npm/@nberlette/emoji/emoji.json`](https://cdn.jsdelivr.net/npm/@nberlette/emoji/emoji.json)

## 📺  Command Line Interface

### Install globally

```bash
yarn global add @nberlette/emoji
```

### Usage

```
emoji [keyword]
```

> **Note**: if `keyword` is excluded, it prints the full list of emojis.

* **Exact match**: returns just the emoji for `keyword`
* **Single result**: returns the emoji + keyword (or _trigger_)
* **Many results**: returns emoji + keyword for each match

![emoji usage example](https://github.com/nberlette/emoji/raw/master/screenshot.png)
