export class ms_event {
    constructor(name, startDate, endDate, icon) {
        this.name = name
        this.startDate = startDate
        this.endDate = endDate
        this.icon = icon
    }
}

export class tile {
    constructor(event) {
        this.tile = document.createElement("div")

        this.img = document.createElement("img")
        this.img.src = event.icon

        this.text = document.createElement("h2")
        this.text.innerHTML = event.name
        this.text.classList = "rubik-text tile_title"
        this.tile.appendChild(this.img)
        this.tile.appendChild(this.text)
    }
}