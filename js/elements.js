import { tile } from './classes.js'
import { total_calendar } from './methods.js'

export let refresh_button = document.getElementById("refresh")
export let tile_wrapper = document.getElementById("content-wrapper")

export let tiles = []

export function new_tile(event) {
    let t = new tile(event)
    
    tile_wrapper.appendChild(t.tile)

    tiles.push(t)

    return tile
}

export function clear_tiles() {
    for (const node in tiles) {
        tiles[node].tile.remove()
    }

    tiles = []
}

export function add_tiles() {
    for (let i = 0; i < total_calendar.length; i++) {
        new_tile(total_calendar[i])
    }
}