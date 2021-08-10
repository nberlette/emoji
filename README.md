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
* **Single result**:same as above, even if `keyword` isn't a direct match
* **Multiple results**: returns array of emojis and keywords that contain `keyword`
* If `keyword` is omitted, returns the whole emoji list

![Example screenshot of emoji usage](https://github.com/nberlette/emoji/raw/master/screenshot.png)
