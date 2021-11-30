<h1 align="center">
  <span>📦  <a href="https://github.com/nberlette/emoji">@nberlette/emoji</a></span>
</h1>

<div align="center">
  <p><strong>Straightforward emoji resources for your next project</strong></p>  
  <p>JSON (<code>emoji.json</code>), ES6 (<code>index.mjs</code>), and CJS (<code>index.js</code>)</p>
</div>


<hr>

## 💿  Install as a Dependency

Pick your flavor of package managers (I like pnpm, followed closely by yarn):
      
```bash
pnpm add @nberlette/emoji

yarn add @nberlette/emoji

npm i --save @nberlette/emoji
```

<hr>

<h2> 📦  CDN: <em>all the emojis, without the dependency!</em></h2>

Content Delivery Networks (or <mark>CDN</mark>) are <strong>freakin' awesome</strong>.

Thanks to wonderful services like <a href="https://unpkg.com">unpkg</a>, <a href="https://jsdelivr.com">jsdelivr</a>, and <a href="https://esm.run">esm.run</a>, you can use packages like this without adding **any** dependencies to your project! (preferably only in your development environment)

### 🔘  Globally distributed on multiple networks

<h4><a href="https://unpkg.com/@nberlette/emoji/"><code> 🔗  unpkg.com</code></a></h4>
<h4><a href="https://cdn.jsdelivr.net/npm/@nberlette/emoji/index.mjs"><code> 🔗  cdn.jsdelivr.net</code></a></h4>
<h4><a href="https://esm.run/@nberlette/emoji"><code>🆕  esm.run</code></a></h4>

### 🔘  Import directly from a URL!

```js
import { emoji } from 'https://unpkg.com/@nberlette/emoji';

import { emoji } from 'https://cdn.jsdelivr.net/npm/@nberlette/emoji/index.mjs';

import { emoji } from 'https://esm.run/@nberlette/emoji';
```

<br><hr><br>

## VanillaJS Demo Using `esm.run` CDN

<iframe width="100%" height="400" src="//jsfiddle.net/berlenic/1a23g4ob/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<br><hr><br>

## 🔘  Usage

### 🅰️  `import`  ·  ES6 (`.mjs`) for Next.js, React, Svelte, ...

Works with **default** (any variable name!), **named** (must be `emoji`), and **aliased** (assign a new name) imports:

```js
// default import
import nicksEmojiLib from '@nberlette/emoji';

// named import
import { emoji } from '@nberlette/emoji';

// aliased named import
import { emoji as emojiAlias } from '@nberlette/emoji';
```

### 🅱️  `require`  ·  CommonJS (`.cjs`) for Node.js, RunKit, ...

CommonJS-equivalents to **default**, **named**, and **aliased** imports:

```cjs
// default
const myEmojiLib = require('nberlette/emoji').default;

// named
const { emoji } = require('@nberlette/emoji');

// aliased
const { emoji: myEmojiAlias } = require('@nberlette/emoji');
```


### `📺  Command Line Interface`

Before using the `emoji` command in your terminal, you'll first need to globally install it:

#### 💿  Install

```bash
yarn global add @nberlette/emoji
# or
pnpm add -g @nberlette/emoji
# or
npm i -g @nberlette/emoji
```

#### 🔘  Usage

```bash
emoji [keyword]
```

##### ⚠️ **Warning**: if `keyword` is left blank, it currently prints **all emojis**.

* **Exact match**:   returns just the `emoji` for `keyword`
* **Single result**: returns the `emoji` + `keyword` (or _shortcode_)
* **Many results**:  returns `emoji`, `keyword` pair for each matching entry

<!-- ![emoji usage example](https://github.com/nberlette/emoji/raw/master/screenshot.png) -->
