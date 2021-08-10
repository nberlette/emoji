import { readFileSync } from 'fs'

const emoji = JSON.parse(readFileSync('./emoji.json'))

export { emoji }
export default emoji
