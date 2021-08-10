import { readFileSync as read } from 'fs'
const { parse } = JSON

export const emoji = parse(read('./emoji.json'))
export default emoji
