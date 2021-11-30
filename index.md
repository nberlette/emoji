<!-- # @nberlette/emoji -->

***Jump To:***&nbsp; ·•· [Example Fiddle](#-example-using-esmrun) ·•· [Installation](#-install-as-a-dependency) ·•· [Integration](#integrate-with-your-project) ·•·  [Command Line Interface](#-command-line-interface) ·•·

- - -  

<p align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</p>

- - -   

## 🌍  Using with Content Delivery Networks (CDNs)

Thanks to wonderful services like <a href="https://unpkg.com">unpkg</a>, <a href="https://jsdelivr.com">jsdelivr</a>, and <a href="https://esm.run">esm.run</a>, you can use packages like this without adding **any** dependencies to your project! (preferably only in your development environment)

<h3 id="cdn-unpkg"><a href="https://unpkg.com/@nberlette/emoji/">🔗  <code>unpkg.com/@nberlette/emoji</code></a></h3>
<h3 id="cdn-jsdelivr"><a href="https://cdn.jsdelivr.net/npm/@nberlette/emoji/index.mjs">🔗  <code>cdn.jsdelivr.net/npm/@nberlette/emoji</code></a></h3>
<h3 id="cdn-esmrun"><a href="https://esm.run/@nberlette/emoji">🆕  <code>esm.run/@nberlette/emoji</code></a></h3>

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
```

```bash
yarn add @nberlette/emoji
```

```bash
npm i --save @nberlette/emoji
```

- - -  

<p align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</p>

- - -   

## 🔘  Integrate with your project

There's two distinctive styles of code to choose from, depending on your project's configuration.

### 🅰️  ES6 (`import`): used by Next.js, React, Svelte, Babel ...

Works with **default** (any name), **named** (must be `emoji`), and **aliased** (assign a new name):

```js
// default
import nicksEmojiLib from '@nberlette/emoji';
```

```js
// named 
import { emoji } from '@nberlette/emoji';
```

```js
// aliased
import { emoji as emojiAlias } from '@nberlette/emoji';
```

<p align="center">
  &middot;&nbsp;&middot;&nbsp;&middot;
</p>

### 🅱️  CommonJS (`require`): used by Node.js, RunKit, ...

CommonJS "equivalents" for **default**, **named**, and **aliased** imports:

```cjs
// default
const myEmojiLib = require('@nberlette/emoji').default;
```

```cjs
// named
const { emoji } = require('@nberlette/emoji');
```

```cjs
// aliased
const { emoji: myEmojiAlias } = require('@nberlette/emoji');
```

> Please note the quotes around "equivalents".  
> `require` is a far cry from `import`, both in terms of functionality, and level of community support. 
> CommonJS also forces us to include **entire modules**, even when we only need a couple lines of code.  
> 
> Furthermore, ES modules can allow [🔗 **`tree-shaking`**](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking "Tree-Shaking Definition - MDN Glossary") and [🔗 **`code splitting`**](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting "Code Splitting Definition - MDN Glossary").  
> Just some food for thought. I'll let you be the judge 😉 

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
```

```bash
pnpm add -g @nberlette/emoji
```

```bash
npm i -g @nberlette/emoji
```

#### 🔘  Usage & Syntax

```
$ emoji [keyword]
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

<h2 style="display:inline-block;position:fixed;bottom:5px;right:25px;width:4em;height:4em;"><a href="#top"> 🔝  </a></h2>


<!-- ![emoji usage example](https://github.com/nberlette/emoji/raw/master/screenshot.png) -->
