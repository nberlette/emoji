<h1 align="center">
  <span>📦  <a href="https://github.com/nberlette/emoji">@nberlette/emoji</a></span>
</h1>

<div align="center">
  <p>JSON (<code>emoji.json</code>) &nbsp;&middot;&nbsp; ES6 (<code>index.mjs</code>) &nbsp;&middot;&nbsp; CJS (<code>index.js</code>)</p>
</div>

- - -  

<br><br>
<h2 align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</h2>
<br><br>

- - -   

## Using with a Globally Distributed CDN

Thanks to wonderful services like <a href="https://unpkg.com">unpkg</a>, <a href="https://jsdelivr.com">jsdelivr</a>, and <a href="https://esm.run">esm.run</a>, you can use packages like this without adding **any** dependencies to your project! (preferably only in your development environment)

<h4><a href="https://unpkg.com/@nberlette/emoji/"><code> 🔗  unpkg.com/@nberlette/emoji</code></a></h4>
<h4><a href="https://cdn.jsdelivr.net/npm/@nberlette/emoji/index.mjs"><code> 🔗  cdn.jsdelivr.net/npm/@nberlette/emoji</code></a></h4>
<h4><a href="https://esm.run/@nberlette/emoji"><code>🆕  esm.run/@nberlette/emoji</code></a></h4>

- - -  

## Example using `esm.run` + VanillaJS

<iframe width="100%" height="450" src="//jsfiddle.net/berlenic/1a23g4ob/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


- - -  

<br><br><br><br>
<h2 align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</h2>
<br><br><br><br>

- - -   


## 💿  Install as a Dependency

Pick your flavor of package manager (I like pnpm, followed closely by yarn)
      
```bash
pnpm add @nberlette/emoji

yarn add @nberlette/emoji

npm i --save @nberlette/emoji
```

- - -  

## 🔘  Usage  


### 🅰️  `import`  ·  ES6: for Next.js, React, Svelte, ...

Works with **default** (any variable name!), **named** (must be `emoji`), and **aliased** (assign a new name) imports:

```js
// default import
import nicksEmojiLib from '@nberlette/emoji';

// named import
import { emoji } from '@nberlette/emoji';

// aliased named import
import { emoji as emojiAlias } from '@nberlette/emoji';
```

### 🅱️  `require`  ·  CommonJS: for Node.js, RunKit, ...

CommonJS-equivalents to **default**, **named**, and **aliased** imports:

```cjs
// default
const myEmojiLib = require('nberlette/emoji').default;

// named
const { emoji } = require('@nberlette/emoji');

// aliased
const { emoji: myEmojiAlias } = require('@nberlette/emoji');
```

- - -  

<br><br><br><br>
<h2 align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</h2>
<br><br><br><br>

- - -   


### 📺  Command Line Interface

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

##### ⚠️  **Warning**: if `keyword` is left blank, it currently prints **all emojis**.

* **Exact match**:   returns just the `emoji` for `keyword`
* **Single result**: returns the `emoji` + `keyword` (or _shortcode_)
* **Many results**:  returns `emoji`, `keyword` pair for each matching entry

<!-- ![emoji usage example](https://github.com/nberlette/emoji/raw/master/screenshot.png) -->
