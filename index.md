<!-- # @nberlette/emoji -->

***Jump To:***&nbsp; ·•· [Example Fiddle](#-example-using-esmrun) ·•· [Installation](#-install-as-a-dependency) ·•· [Integration](#integrate-with-your-project) ·•·  [Command Line Interface](#-command-line-interface) ·•·

- - -  

<p align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</p>

- - -   

## Using with a Globally Distributed CDN

Thanks to wonderful services like <a href="https://unpkg.com">unpkg</a>, <a href="https://jsdelivr.com">jsdelivr</a>, and <a href="https://esm.run">esm.run</a>, you can use packages like this without adding **any** dependencies to your project! (preferably only in your development environment)

<h4 id="cdn-unpkg"><a href="https://unpkg.com/@nberlette/emoji/">🔗  unpkg.com/@nberlette/emoji</a></h4>
<h4 id="cdn-jsdelivr"><a href="https://cdn.jsdelivr.net/npm/@nberlette/emoji/index.mjs">🔗  cdn.jsdelivr.net/npm/@nberlette/emoji</a></h4>
<h4 id="cdn-esmrun"><a href="https://esm.run/@nberlette/emoji">🆕  esm.run/@nberlette/emoji</a></h4>

- - -  

<p align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</p>

- - -   

## 🧪  Example using `esm.run`

<iframe width="100%" height="450" src="//jsfiddle.net/berlenic/1a23g4ob/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<br>

- - -  

<p align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</p>

- - -   

## 💿  Install as a Dependency

Pick your flavor of package manager (I like pnpm, followed closely by yarn)
      
```bash
pnpm add @nberlette/emoji

yarn add @nberlette/emoji

npm i --save @nberlette/emoji
```

- - -  

<p align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</p>

- - -   

## 🔘  Integrate with your project


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

<p align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</p>

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

<p align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</p>

- - -   


### 📺  Command Line Interface

Before using the `emoji` command in your terminal, you'll first need to globally install it:

#### 💿  Global installation

```bash
yarn global add @nberlette/emoji
# or
pnpm add -g @nberlette/emoji
# or
npm i -g @nberlette/emoji
```

#### 🔘  Usage & Syntax

```bash
emoji [keyword]
```

##### ⚠️  **Warning**: if `keyword` is left blank, it currently prints **all emojis**.

* **Exact match**:   returns just the `emoji` for `keyword`
* **Single result**: returns the `emoji` + `keyword` (or _shortcode_)
* **Many results**:  returns `emoji`, `keyword` pair for each matching entry

- - -  

<br>
<h5 align="center">
  <a href="https://mit-license.org" target="_blank" rel="noreferrer noopener">MIT</a> &middot; &copy; 2021+ <a href="https://n.berlette.com">Nicholas Berlette</a>
</h5>
<br><br>

<h1 style="display:inline-block;position:fixed;bottom:0.33em;right:1em;width:4em;height:4em;"><a href="#top"> 🔝  </a></h1>


<!-- ![emoji usage example](https://github.com/nberlette/emoji/raw/master/screenshot.png) -->
