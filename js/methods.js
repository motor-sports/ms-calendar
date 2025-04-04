import { refresh_button } from './elements.js'

let wrc_events = []
let wrc_dates = []

let erc_events = []
let erc_dates = []

let wrx_events = []
let wrx_dates = []

let total_calendar = []

export { wrc_events , erc_events , wrx_events, total_calendar }

export async function get_wrc_events() {
    let events = []

    await fetch('https://api.wrc.com/content/filters/calendar?championship=wrc&origin=vcms&year=2025', { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
    .then(response => response.json())
    .then(data => {
        for (var event in data.content) {
            events.push(data.content[event])
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
            events.push(data.content[event])
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
            events.push(data.content[event])
        }
    })

    return await Promise.resolve(events)
}

export async function refresh() {
    wrc_events = await get_wrc_events()
    erc_events = await get_erc_events()
    wrx_events = await get_wrx_events()
    console.log("Events refreshed")
    
    refresh_button.classList = "rubik-text available"
}

function wrc_date_sort() {
    wrc_events = wrc_events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

function erc_date_sort() {
    erc_events = erc_events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

function wrx_date_sort() {
    wrx_events = wrx_events.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

function get_future_wrc_events() {
    let date = new Date();
    let future = []

    for (const event in wrc_events) {
        if (date < new Date(wrc_events[event].endDate)) {
            future.push(wrc_events[event])
        }
    }

    return future
}

function get_future_erc_events() {
    let date = new Date();
    let future = []

    for (const event in erc_events) {
        if (date < new Date(erc_events[event].endDate)) {
            future.push(erc_events[event])
        }
    }

    return future
}

function get_future_wrx_events() {
    let date = new Date();
    let future = []

    for (const event in wrx_events) {
        if (date < new Date(wrx_events[event].endDate)) {
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

    total_calendar = await total_calendar.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}