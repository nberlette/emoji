<h1 align="center">
  <span>📦  <code>@nberlette/emoji</code></span>
</h1>
<h3 align="center">
  
  <strong>Straightforward emoji resources for your next project!</strong> (and a nasty little CLI tool 🤢 )
  
</h3><br />
<div align="center">
  Exports ~1800 unicode emojis + short-codes (`.json`), and modules for both ES6 (<code>.mjs</code>), and cjs/node (<code>.cjs</code>).
</div>

<hr />

<table align="center" width="100%" border="0" bordercollapse="collapse" cellpadding="1%" cellspacing="0" style="border-color: transparent !important">
<tr><td width="33%">
      
```bash
pnpm add @nberlette/emoji
```

</td>
<td width="33%">
  
```bash
yarn add @nberlette/emoji
```
  
</td>
<td width="33%">

```bash
npm i --save @nberlette/emoji
```

</td></tr>
</table>

<blockquote align="center">
  I <strong>encourage everyone</strong> drops npm for faster, better alternatives like <a href="https://twitter.com/pnpmjs" target="_blank" rel="noopener noreferrer">pnpm</a> or <a href="https://yarnpkg.com"  target="_blank" rel="noopener noreferrer">yarn</a>.
</blockquote>
  
</div>

<h2>Getting Started: <em>Usage as a Resource</em></h2>

<h3><strong><code>import</code></strong><small> · (es6 · next.js / svelte · <code>.mjs</code>)</small></h3>

You have 3 types of **imports**: **default** (any name you want), **named** (must be named `emoji`), and **aliased** (assign a new name).

```js
// default import
import nicksEmojiLib from '@nberlette/emoji';
// named import
import { emoji } from '@nberlette/emoji';
// aliased named import
import { emoji as emojiAlias } from '@nberlette/emoji';
```

<h3><strong><code>require</code></strong> · <small>(commonjs · node.js · <code>.cjs</code>)</small></h3>

- [x] **CommonJS-equivalents** to **default**, **named**, and **aliased** imports using <code>require</code>:

```cjs
// default
const myEmojiLib = require('nberlette/emoji').default;
// named
const { emoji } = require('@nberlette/emoji');
// aliased
const { emoji: myEmojiAlias } = require('@nberlette/emoji');
```

<br><hr /><br>

<h2>CDN: <em>get all the emojis, without any added dependencies!</em></h2>

Content Delivery Networks (or <mark>CDN</mark>) are <strong>freakin' awesome</strong>.

Thanks to wonderful services like <a href="https://unpkg.com">unpkg</a> and <a href="https://jsdelivr.com">jsdelivr</a>, you can use packages like this without adding **any** dependencies to your project! (preferably only in your development environment)

<h3><code>import</code> / <code>require</code></h3>

<h4> 🔗  <a href="https://unpkg.com/@nberlette/emoji/emoji.json"><code>unpkg.com/@nberlette/emoji</code></a></h4>

```js
import emoji from 'https://unpkg.com/@nberlette/emoji';
```

<br>
<h4> 🔗  <a href="https://cdn.jsdelivr.net/npm/@nberlette/emoji/emoji.json"><code>cdn.jsdelivr.net/npm/@nberlette/emoji</code></a></h4>

```js
import emoji from 'https://cdn.jsdelivr.net/npm/@nberlette/emoji/index.mjs';
```

<br>
<h4> 🔗  <a href="https://esm.run/@nberlette/emoji"><code>esm.run/@nberlette/emoji</code></a></h4>

```js
import { emoji } from 'https://esm.run/@nberlette/emoji';

const cats = Object.keys(emoji).filter(i => ~i.indexOf('cat')).map(e => [e, emoji[e]])
console.log(Object.fromEntries(cats))
```

<br><hr /><br>
<h3><code>emoji.json</code></h3>

<h4> 🔗  <a href="https://unpkg.com/@nberlette/emoji/emoji.json"><code>unpkg.com/@nberlette/emoji/emoji.json</code></a></h4>

```js
https://unpkg.com/@nberlette/emoji/emoji.json
```

<br>
<h4> 🔗  <a href="https://cdn.jsdelivr.net/npm/@nberlette/emoji/emoji.json"><code>cdn.jsdelivr.net/npm/@nberlette/emoji/emoji.json</code></a></h4>

```js
https://unpkg.com/@nberlette/emoji/emoji.json
```

<br><hr /><br>


<h2 align="center">📺  Command Line Interface</h2>

<h3>Getting Started: install package globally</h3>

```bash
yarn global add @nberlette/emoji
```

```bash
pnpm add -g @nberlette/emoji
```

```bash
npm i -g @nberlette/emoji
```

<h3>Usage: command syntax</h3>

```bash
emoji [keyword]
```

> **Note**: if no `keyword` is given, it currently prints the **full list of emojis** (no pagination... you've been warned)

* **Exact match**: returns just the emoji for `keyword`
* **Single result**: returns the emoji + keyword (or _trigger_)
* **Many results**: returns emoji + keyword for each match

![emoji usage example](https://github.com/nberlette/emoji/raw/master/screenshot.png)
