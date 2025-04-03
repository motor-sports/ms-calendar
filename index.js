console.log("running")

fetch('https://api.wrc.com/content/filters/calendar?championship=wrc&origin=vcms&year=2025', { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
.then(response => response.json())
.then(data => {
    data.forEach((data) => {
        console.log(data)
    })
})