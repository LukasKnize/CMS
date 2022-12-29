let items = document.body.getElementsByTagName("*")

class data {
    constructor(id) {
        this.id = id;
        this.text = "";
        this.url = "";
    }

}

let editedData = []
for (let i = 0, len = items.length; i < len; i++) {
    if (items[i].tagName == "P" || items[i].tagName == "H1" || items[i].tagName == "H2" || items[i].tagName == "H3" || items[i].tagName == "H4" || items[i].tagName == "H5" || items[i].tagName == "H6") {
        let id = "elemID" + i
        editedData.push(new data(id))
        items[i].setAttribute("contenteditable", "true")
        items[i].setAttribute("data-elemID", id)
    } else if (items[i].tagName == "A") {
        items[i].setAttribute("contenteditable", "true")
        items[i].setAttribute("href", "")
        let id = "elemID" + i
        editedData.push(new data(id))
        items[i].setAttribute("onclick", "addLink('" + id + "')")
        items[i].setAttribute("data-elemID", id)
    } else if (items[i].tagName == "BUTTON") {
        let old_element = items[i]
        let new_element = old_element.cloneNode(true)
        old_element.parentNode.replaceChild(new_element, old_element)
        let id = "elemID" + i
        editedData.push(new data(id))
        items[i].setAttribute("contenteditable", "true")
        items[i].setAttribute("data-elemID", id)
    }
}

let saveButton = document.createElement("button")
saveButton.style.width = "75px"
saveButton.style.height = "75px"
saveButton.style.borderRadius = "75px"
saveButton.style.position = "fixed"
saveButton.style.right = "75px"
saveButton.style.bottom = "75px"
saveButton.style.backgroundColor = "#1976d2"
saveButton.style.color = "white"
saveButton.style.border = "none"
saveButton.innerText = "Save"
saveButton.setAttribute("onclick", "save()")
document.body.appendChild(saveButton)

function addLink(id) {
    let link = prompt("Anchor adress")
    for (let i = 0; i < editedData.length; i++) {
        if (editedData[i].id == id) {
            editedData[i].url = link
            break
        }
    }
}

async function save() {
    let saveItems = document.body.getElementsByTagName("*")
    for (let i = 0, len = saveItems.length; i < len; i++) {
        if (items[i].tagName == "P" || items[i].tagName == "H1" || items[i].tagName == "H2" || items[i].tagName == "H3" || items[i].tagName == "H4" || items[i].tagName == "H5" || items[i].tagName == "H6" || items[i].tagName == "BUTTON" || items[i].tagName == "A") {
            id = items[i].getAttribute("data-elemID")
            for (let j = 0; j < editedData.length; j++) {
                if (editedData[j].id == id) {
                    editedData[j].text = items[i].innerText
                    break
                }
            }
        }
    }

    const resp = fetch("http://localhost:5500/pages/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5la28iLCJlbWFpbCI6Im5la29AdGhlNG5la28uaW8iLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE2NzE2MzYyODd9.9760M_vr79SLJUg74lwTQ43_Kc0VApesnV-2GGjXXXA"
        },
        body: JSON.stringify({
            "url": "superCoolPage",
            "text": editedData,
            "headline": "Awesome headline"
        }),
    });

    console.log(await resp);
    //console.log(editedData)
}