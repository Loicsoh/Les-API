
const headerBlague = document.getElementById("header")
const textBlague = document.getElementById("content")

fetch("https://api.blablagues.net/?rub=blagues")
.then((resp) => resp.json())
.then((info) => {
    console.log(blague.data);

    headerBlague.textContent = info.data.data.content.text_head
    textBlague.textContent = info.data.content.text
})

Blague()

