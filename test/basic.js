const emoji = require('@nberlette/emoji')

let i = 0
for (const k in emoji) {
  if (i < 20) console.log(emoji[k], k)
  i++
}

console.log(emoji.pile_of_poo)
console.log('If everything is working, you will see a pile of poop above this!')
