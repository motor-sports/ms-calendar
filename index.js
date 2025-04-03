fetch('https://api.wrc.com/content/filters/calendar?championship=wrc&origin=vcms&year=2025')
.then(response => response.json())
.then(data => {
    data.forEach((data) => {
        console.log(data)
    })
})