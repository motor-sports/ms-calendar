import { refresh } from "./methods.js"
import { refresh_button } from "./elements.js"

refresh_button.addEventListener("click", refresh_clicked)

function refresh_clicked() {
    refresh_button.classList = "rubik-text unavailable"
    refresh()
}