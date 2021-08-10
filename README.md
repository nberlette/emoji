# @nberlette/emoji

Terribly simple emoji-finder command line script.

## Installation

#### Yarn (recommended)

```bash
yarn global add @nberlette/emoji
```

#### ... or with npm
  
```bash
npm install -g @nberlette/emoji
```

## Usage (resource)

#### ES6 (import)

```js
import emoji from '@nberlette/emoji'
```

#### CommonJS (require)

```js
const emoji = require('@nberlette/emoji')
```


## Usage (command line)

```bash
$ emoji [keyword]
```

* **Exact hit**: returns just the emoji for `keyword`
* **Single result**: returns the emoji and it's trigger word
* **Multiple results**: returns emoji and it's trigger word for each similar match
* If `keyword` is omitted, returns the whole emoji list

![Example screenshot of emoji usage](https://github.com/nberlette/emoji/raw/master/screenshot.png)
