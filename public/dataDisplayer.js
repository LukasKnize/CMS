let address = document.URL
address = address.split("/")
address = address[address.length - 1]

let data

let items = document.body.getElementsByTagName("*")

function displayData(){
    for (let i = 0, len = items.length; i < len; i++) {
        if (items[i].tagName == "P" || items[i].tagName == "H1" || items[i].tagName == "H2" || items[i].tagName == "H3" || items[i].tagName == "H4" || items[i].tagName == "H5" || items[i].tagName == "H6") {
            items[i].innerHTML = data[i].text
        } else if (items[i].tagName == "A") {
            items[i].innerHTML = data[i].text
            items[i].href = data[i].url
        } else if (items[i].tagName == "BUTTON") {
            items[i].innerHTML = data[i].text
        }
    }
}

fetch("http://localhost:5500/pages/" + address, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
}).then((resp) => {
    resp.json().then((resp) => {
        console.log(resp.content)
        data = resp.content
        displayData()
    })
})

