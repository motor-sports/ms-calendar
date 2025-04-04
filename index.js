import { refresh , wrc_events , erc_events , wrx_events, total_sort , total_calendar } from './js/methods.js'

await refresh()

await total_sort()

console.log(total_calendar[0])