const express = require('express')
require('dotenv').config()
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const jwt = require("jsonwebtoken")
const unzipper = require('unzipper')
const jsdom = require('jsdom')
const { JSDOM } = jsdom;

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'templates/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.zip')
    }
})

let upload = multer({ storage: storage });

router.post("/", upload.single('template'), (req, res) => {
    let delFile
    if (req.file) {

        let filepath = path.join(req.file.destination, req.file.filename);
        fs.createReadStream(filepath).pipe(unzipper.Extract({ path: path.join(__dirname, "/../templates") })).on("close", () => {
            fs.unlinkSync(filepath)
        })
        let templateDir = fs.readdirSync(path.join(__dirname, "/../templates"))
        delFile = filepath
    }
    res.sendStatus(200)
    //removeFile(delFile)
})

function removeFile(path) {
    fs.unlinkSync(path)
}

router.get("/all", (req, res) => {
    let templates = []
    fs.readdirSync(path.join(__dirname, "/../templates")).forEach(item => {
        let templateItem = {}
        if (fs.statSync(path.join(__dirname, "/../templates", item)).isDirectory()) {
            templateItem.name = item
            let files = fs.readdirSync(path.join(__dirname, "/../templates", item))
            for (let i = 0; i < files.length; i++) {
                if (files[i] == "screenshot.webp" || files[i] == "screenshot.jpg" || files[i] == "screenshot.png") {
                    templateItem.img = templateItem.name + "/" + files[i]
                    templates.push(templateItem)
                    break
                }
            }
        }
    })
    res.status(200).send({ templates: templates })
})

router.get("/edit/:param", (req, res) => {
    console.log(req.query.token)
    fs.readdir(path.join(__dirname, "/../templates"),
        { withFileTypes: true },
        (err, filesP) => {
            for (let i = 0; i < filesP.length; i++) {
                if (filesP[i].isDirectory && filesP[i].name == req.params.param) {
                    fs.readdir(path.join(__dirname, "/../templates", filesP[i].name),
                        { withFileTypes: true },
                        (err, files) => {
                            if (err) {
                                console.log(err.message)
                            } else {
                                console.log(typeof files)
                                let file = []
                                files.forEach(elem => {
                                    file.push(elem)
                                })
                                for (let j = 0; j < file.length; j++) {
                                    if (file[j].name.includes('.html')) {
                                        let dom = new JSDOM(fs.readFileSync(path.join(__dirname, "/../templates", filesP[i].name, file[j].name)))
                                        let script = dom.window.document.createElement("script")
                                        script.src = 'http://localhost:8080/editor.js'
                                        dom.window.document.body.appendChild(script)
                                        res.send(dom.serialize())
                                        break
                                    }
                                }
                            }
                        })
                }
            }
        })
})
module.exports = router