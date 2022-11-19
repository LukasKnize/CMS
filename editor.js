let items = document.body.getElementsByTagName("*")

class data{
    constructor(id){
        this.id = id;
        this.text = "";
        this.url = "";
    }

}

let editedData = []
for (let i = 0, len = items.length; i < len; i++) {
    if (items[i].tagName == "P" || items[i].tagName == "H1"|| items[i].tagName == "H2"|| items[i].tagName == "H3"|| items[i].tagName == "H4"|| items[i].tagName == "H5"|| items[i].tagName == "H6"|| items[i].tagName == "BUTTON") {
        let id = "elemID" + i
        editedData.push(new data(id))
        items[i].setAttribute("contenteditable", "true")
        items[i].setAttribute("data-elemID", id)
    }else if (items[i].tagName == "A") {
        items[i].setAttribute("contenteditable", "true")
        let id = "elemID" + i
        editedData.push(new data(id))
        items[i].setAttribute("onclick", "addLink('" + id + "')")
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

function addLink(id){
    let link = prompt("Anchor adress")
    for (let i = 0; i < editedData.length; i++) {
        if (editedData[i].id == id) {
            editedData[i].url = link
            break
        }
    }
}

function save() {
    let saveItems = document.body.getElementsByTagName("*")
    for (let i = 0, len = saveItems.length; i < len; i++) {
        if (items[i].tagName == "P" || items[i].tagName == "H1"|| items[i].tagName == "H2"|| items[i].tagName == "H3"|| items[i].tagName == "H4"|| items[i].tagName == "H5"|| items[i].tagName == "H6"|| items[i].tagName == "BUTTON" || items[i].tagName == "A") {
            id = items[i].getAttribute("data-elemID")
            for (let j = 0; j < editedData.length; j++) {
                if (editedData[j].id == id) {
                    editedData[j].text = items[i].innerText
                    break
                }
            }
        }
    }
    console.log(editedData)
}