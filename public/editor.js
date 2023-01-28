const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let token = params.token
let pageId = params.id
let saveParam = params.save

let items = document.body.getElementsByTagName("*")

let apidata

function displayData() {
    for (let i = 0; i < items.length; i++) {
        if (items[i].tagName == "P" || items[i].tagName == "H1" || items[i].tagName == "H2" || items[i].tagName == "H3" || items[i].tagName == "H4" || items[i].tagName == "H5" || items[i].tagName == "H6") {
            items[i].innerHTML = apidata[i].text
        } else if (items[i].tagName == "A") {
            items[i].innerHTML = apidata[i].text
            items[i].href = apidata[i].url
        } else if (items[i].tagName == "BUTTON" && items[i].classList != "CMSSaveBUTTON") {
            items[i].innerHTML = apidata[i].text
        }else if(items[i].tagName == "IMG"){
            items[i].src = apidata[i].src
        }
    }
}

fetch("http://localhost:5500/pages/id/" + pageId, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
}).then((resp) => {
    resp.json().then((resp) => {
        apidata = resp.content

        if (apidata.length > 0) {
            displayData()
        }
    })
})


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
        console.log(old_element)
        let id = "elemID" + i
        editedData.push(new data(id))
        items[i].setAttribute("contenteditable", "true")
        items[i].setAttribute("data-elemID", id)
    } else if (items[i].tagName == "IMG") {
        let id = "elemID" + i
        editedData.push(new data(id))
        items[i].setAttribute("data-elemID", id)
        items[i].addEventListener("click", () => {
            let inp = document.createElement("input")
            inp.accept = "image/jpeg, image/png, image/jpg, image/webp"
            inp.type = "file"
            inp.click()

            inp.addEventListener("change", () => {
                let file = inp.files
                items[i].src = URL.createObjectURL(file[0])
                for (let j = 0; j < editedData.length; j++) {
                    if (editedData[j].id == id) {
                        editedData[j].file = file[0]
                    }
                }
            })
        })
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
saveButton.classList = "CMSSaveBUTTON"
saveButton.setAttribute("onclick", "save()")
document.body.appendChild(saveButton)
let comment = document.createComment("Code injected by CMS")
document.body.appendChild(comment)

function addLink(id, item) {
    let backdrop = document.createElement("div")
    backdrop.style.backgroundColor = "#0000005a"
    backdrop.style.position = "fixed"
    backdrop.style.left = 0
    backdrop.style.top = 0
    backdrop.style.width = "100%"
    backdrop.style.height = "100vh"
    backdrop.style.display = "flex"
    backdrop.style.justifyContent = "center"
    backdrop.style.alignItems = "center"
    backdrop.style.fontFamily = "Arial, Helvetica, sans-serif"
    backdrop.style.zIndex = 9999

    let form = document.createElement("div")
    form.style.width = "500px"
    form.style.height = "250px"
    form.style.backgroundColor = "#1976d2"
    form.style.display = "flex"
    form.style.flexDirection = "column"
    form.style.color = "white"
    form.style.justifyContent = "center"
    form.style.alignItems = "center"
    form.style.borderRadius = "15px"

    let p1 = document.createElement("p")
    p1.style.fontSize = "1.1em"
    p1.style.padding = "10px 0"
    p1.innerHTML = "Text"

    let p2 = document.createElement("p")
    p2.style.fontSize = "1.1em"
    p2.style.padding = "10px 0"
    p2.innerHTML = "url or anchor"

    let input1 = document.createElement("input")
    input1.style.width = "300px"
    input1.id = "CMSINPUT1"

    let input2 = document.createElement("input")
    input2.style.width = "300px"
    input2.id = "CMSINPUT2"

    let button = document.createElement("button")
    button.style.width = "150px"
    button.style.backgroundColor = "white"
    button.style.color = "#1976d2"
    button.style.border = "none"
    button.style.padding = "10px 0"
    button.style.marginTop = "10px"
    button.innerHTML = "OK"

    button.addEventListener("click", () => {
        console.log("ok " + id)
        for (let i = 0; i < editedData.length; i++) {
            if (editedData[i].id == id) {
                editedData[i].url = document.getElementById("CMSINPUT2").value
                editedData[i].text = document.getElementById("CMSINPUT1").value
                document.querySelector('[data-elemid="' + id + '"]').innerHTML = document.getElementById("CMSINPUT1").value
                break
            }
        }
        backdrop.remove()
    })

    form.appendChild(p1)
    form.appendChild(input1)
    form.appendChild(p2)
    form.appendChild(input2)
    form.appendChild(button)
    backdrop.appendChild(form)
    document.body.appendChild(backdrop)
    input1.focus()


    return false
}

async function save() {
    if (saveParam == "true") {
        let doc = document.documentElement.innerHTML
        let regex = /(?<=<!--Code injected by CMS-->)(.*)(?=<!--Code injected by CMS-->)/
        doc = doc.replace(regex, "")
        doc = doc.replace("<!--Code injected by CMS--><!--Code injected by CMS-->", "")
        const resp = fetch("http://localhost:5500/pages/save/data/" + pageId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            },
            body: JSON.stringify({
                "data": "<!DOCTYPE html> <html>" + doc + "</html>",
            }),
        });

        resp.then(resp => {
            if (resp.status == 201) {
                //history.back(-1)
            }
        })
    } else {
        let saveItems = document.body.getElementsByTagName("*")
        let data = new FormData()
        let indexes = []
        for (let i = 0, len = saveItems.length; i < len; i++) {
            if (items[i].tagName == "P" || items[i].tagName == "H1" || items[i].tagName == "H2" || items[i].tagName == "H3" || items[i].tagName == "H4" || items[i].tagName == "H5" || items[i].tagName == "H6" || items[i].tagName == "BUTTON" || items[i].tagName == "A") {
                id = items[i].getAttribute("data-elemID")
                for (let j = 0; j < editedData.length; j++) {
                    if (editedData[j].id == id) {
                        editedData[j].text = items[i].innerText
                        break
                    }
                }
            } else if (items[i].tagName == "IMG") {
                id = items[i].getAttribute("data-elemID")
                for (let j = 0; j < editedData.length; j++) {
                    if (editedData[j].id == id) {
                        if (editedData[j].file != undefined) {
                            data.append('files[]', editedData[j].file, id + "-" + editedData[j].file.name)
                            console.log(editedData[j].file.name)
                            console.log(data)
                            indexes.push(j)
                            break
                        }

                    }
                }
            }
        }

        if (data.getAll('files[]').length > 0) {
            fetch("http://localhost:5500/upload", {
                method: "POST",
                headers: {
                    "authorization": token
                },
                body: data
            }).then(resp => {
                console.log(resp)
                resp.json().then(resp => {
                    if (resp.urls != undefined) {
                        for (let k = 0; k < resp.urls.length; k++) {
                            editedData[indexes[k]].src = resp.urls[k]
                            delete editedData[indexes[k]].file
                        }
                    }
                }).then(() => {
                    const resp = fetch("http://localhost:5500/pages/data/" + pageId, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "authorization": token
                        },
                        body: JSON.stringify({
                            "content": editedData,
                        }),
                    });
    
                    resp.then(resp => {
                        if (resp.status == 201) {
                            //history.back(-1)
                        }
                    })
                })
            })
        } else {
            console.log("not ok")
            setTimeout(() => { }, 1000)
            const resp = fetch("http://localhost:5500/pages/data/" + pageId, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                },
                body: JSON.stringify({
                    "content": editedData,
                }),
            });

            resp.then(resp => {
                if (resp.status == 201) {
                    //history.back(-1)
                }
            })
        }
    }

}