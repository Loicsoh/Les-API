
const headerBlague = document.getElementById("header")
const textBlague = document.getElementById("content")
function Blague() {
    fetch("https://api.blablagues.net/?rub=blagues")
.then((resp) => resp.json())
.then((info) => {
    headerBlague.textContent = info.data.content.text_head
    textBlague.textContent = info.data.content.text
})
}

Blague()

btn.addEventListener('click', Blague)

const myHeaders = new Header();
const init = {
    method "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
}

fetch("http:facebook.com", init) 
.then((res) => console.log(res));

//https://api.blablagues.net/?rub=blagues
//https://randomuser.me/api/?results=24
//https://www.themealdb.com/api/json/v1/1/search.php?s=

