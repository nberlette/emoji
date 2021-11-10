#!/usr/bin/env node
/* @nberlette/emoji */

const { log } = console
const { argv } = process

// gross, I know
argv[0].endsWith('node') && argv.shift()
const q = argv[1] || ''

const emoji = new Map([...Object.entries(require('@nberlette/emoji'))])

function filter (a, q) {
  return a.filter(el => el.toLowerCase().indexOf(q.toLowerCase()) !== -1)
}

function getEmoji (q) {
  // direct match? return just the emoji
  if (emoji.has(q)) return log(emoji.get(q))

  const results = filter([...emoji.keys()], q)
    .map(k => [`${(emoji.has(k) ? emoji.get(k) : null)} `, k])
    .slice(0, 50)

  if (results.length > 0) results.forEach(r => (r !== undefined) && log(r.join('  ')))
  else log('no results')
}

getEmoji(q)
