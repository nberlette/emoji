import emoji, { emoji as emojis } from '@nberlette/emoji'

let i = 0
for (const k in emoji) {
  if (i < 20) console.log(emoji[k], k)
  i++
}

console.log('es default import (pile_of_poo):', emoji.pile_of_poo)
console.log('es named import (pile_of_poo):', emojis.pile_of_poo)
console.log('If everything is working, you will see two piles of poop above this!')
