#!/usr/bin/env node
/* @nberlette/emoji */

const { log } = console
const { argv } = process

// gross, I know
argv[0].endsWith('node') && argv.shift()
const q = argv[1] ?? ''

let emoji = require('../')
emoji = new Map([...Object.entries(emoji)])

function filter (a, q) {
  return a.filter(el => el.toLowerCase().indexOf(q.toLowerCase()) !== -1)
}

function getEmoji (q) {
  // direct match? return just the emoji
  if (emoji.has(q)) return log(emoji.get(q))

  // otherwise find closest matches (no limit implemented yet)
  const results = filter([...emoji.keys()], q).map(k => [`${(emoji.has(k) ? emoji.get(k) : null)} `, k])

  if (results.length > 0) results.forEach(r => (r !== undefined) && log(r.join(': ')))
  else log('no results')
}

getEmoji(q)
