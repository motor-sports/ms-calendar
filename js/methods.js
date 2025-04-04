import { refresh_button } from './elements.js'
import { ms_event } from './classes.js'
import { clear_tiles , add_tiles } from './elements.js'

let wrc_events = []

let erc_events = []

let wrx_events = []

let total_calendar = []

export { wrc_events , erc_events , wrx_events, total_calendar }

export async function get_wrc_events() {
    let events = []

    await fetch('https://api.wrc.com/content/filters/calendar?championship=wrc&origin=vcms&year=2025', { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
    .then(response => response.json())
    .then(data => {
        for (var event in data.content) {
            event = data.content[event]
            events.push(new ms_event(event.title, new Date(event.startDate), new Date(event.endDate), event.championshipLogo[0].url))
        }
    })

    return await Promise.resolve(events)
}

export async function get_erc_events() {
    let events = []

    await fetch('https://api.wrc.com/content/filters/calendar?championship=erc&origin=vcms&year=2025', { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
    .then(response => response.json())
    .then(data => {
        for (var event in data.content) {
            event = data.content[event]
            events.push(new ms_event(event.title, new Date(event.startDate), new Date(event.endDate), event.championshipLogo[0].url))
        }
    })

    return await Promise.resolve(events)
}

export async function get_wrx_events() {
    let events = []

    await fetch('https://api.wrc.com/content/filters/calendar?championship=wrx&origin=vcms&year=2025', { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
    .then(response => response.json())
    .then(data => {
        for (var event in data.content) {
            event = data.content[event]
            events.push(new ms_event(event.title, new Date(event.startDate), new Date(event.endDate), event.championshipLogo[0].url))
        }
    })

    return await Promise.resolve(events)
}

export async function refresh() {
    total_calendar = []
    wrc_events = []
    erc_events = []
    wrx_events = []

    clear_tiles()
    wrc_events = await get_wrc_events()
    erc_events = await get_erc_events()
    wrx_events = await get_wrx_events()

    total_sort()

    console.log("Events refreshed")
    
    refresh_button.classList = "rubik-text available"
}

function wrc_date_sort() {
    wrc_events = wrc_events.sort((a, b) => a.startDate - b.startDate);
}

function erc_date_sort() {
    erc_events = erc_events.sort((a, b) => a.startDate - b.startDate);
}

function wrx_date_sort() {
    wrx_events = wrx_events.sort((a, b) => a.startDate - b.startDate);
}

function get_future_wrc_events() {
    let date = new Date();
    let future = []

    for (const event in wrc_events) {
        if (date < wrc_events[event].endDate) {
            future.push(wrc_events[event])
        }
    }

    return future
}

function get_future_erc_events() {
    let date = new Date();
    let future = []

    for (const event in erc_events) {
        if (date < erc_events[event].endDate) {
            future.push(erc_events[event])
        }
    }

    return future
}

function get_future_wrx_events() {
    let date = new Date();
    let future = []

    for (const event in wrx_events) {
        if (date < wrx_events[event].endDate) {
            future.push(wrx_events[event])
        }
    }

    return future
}

export async function total_sort() {
    wrc_date_sort()
    erc_date_sort()
    wrx_date_sort()
    total_calendar = total_calendar.concat(get_future_wrc_events(), get_future_erc_events(), get_future_wrx_events())

    total_calendar = await total_calendar.sort((a, b) => a.startDate - b.startDate);
    add_tiles()
}