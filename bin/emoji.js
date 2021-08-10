#!/usr/bin/env node
/* @nberlette/emoji */

const { log } = console
const { argv } = process

// gross, I know
argv[0].endsWith('node') && argv.shift();
const q = argv[1] ?? '';

// let { emoji } = require('..');
let emoji = require('../emoji.json')
emoji = new Map([...Object.entries(emoji)]);

function filter (a, q) {
  return a.filter(el => el.toLowerCase().indexOf(q.toLowerCase()) !== -1)
}

// direct match? return just the emoji
if (emoji.has(q)) return log(emoji.get(q));

// otherwise find closest matches (no limit implemented yet)
let results = filter([...emoji.keys()], q).map(k => [`${(emoji.has(k) ? emoji.get(k) : null)} `, k])	

// if theres only one close match, show the emoji's keyword (trigger) as well
if (results.length === 1) return log(results[0][0], results[0][1])

// and if there's more than one match, lazily print the array
if (results.length > 0) return log(results);
