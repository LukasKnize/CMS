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
        cb(null, file.originalname)
    }
})

let upload = multer({ storage: storage });

router.post("/", upload.single('template'), (req, res) => {
    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        if (parsedToken.type == "admin") {
            if (req.file) {

                let filepath = path.join(req.file.destination, req.file.filename);
                fs.createReadStream(filepath).pipe(unzipper.Extract({ path: path.join(__dirname, "/../templates") })).on("close", () => {
                    fs.unlinkSync(filepath)
                    let isValid = true
                    fs.readdirSync(path.join(__dirname, "/../templates")).forEach(item => {

                        if (fs.statSync(path.join(__dirname, "/../templates", item)).isDirectory()) {
                            let files = fs.readdirSync(path.join(__dirname, "/../templates", item))
                            let hasScreenshot = false
                            let hasHTML = false
                            for (let i = 0; i < files.length; i++) {
                                if (files[i] == "screenshot.webp" || files[i] == "screenshot.jpg" || files[i] == "screenshot.png") {
                                    hasScreenshot = true
                                    if (hasHTML) {
                                        break
                                    }
                                } else if (files[i].split(".")[1] == "html") {
                                    hasHTML = true
                                    if (hasScreenshot) {
                                        break
                                    }
                                }
                            }
                            if (!hasHTML || !hasScreenshot) {
                                deleteFolderRecursive(path.join(__dirname, "/../templates", item))
                                isValid = false
                            }
                        } else {
                            fs.unlinkSync(path.join(__dirname, "/../templates", item))
                            isValid = false
                        }

                    })
                    if (isValid) {
                        res.status(200).send({ message: "template has been uploaded" })
                    }else{
                        res.status(400).send({ message: "invalid template" })
                    }
                })
            }
        } else {
            fs.unlinkSync(path.join(req.file.destination, req.file.filename))
            res.status(403).send({ message: "user has to be admin to upload template" })
        }
    } catch (error) {
        res.status(403).send({ message: "wrong authorization token" })
    }

})

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
    fs.readdir(path.join(__dirname, "/../templates"),
        { withFileTypes: true },
        (err, filesP) => {
            for (let i = 0; i < filesP.length; i++) {
                if (filesP[i].isDirectory && filesP[i].name == req.params.param) {
                    fs.readdir(path.join(__dirname, "/../templates", filesP[i].name),
                        { withFileTypes: true },
                        (err, files) => {
                            if (err) {
                            } else {
                                let file = []
                                files.forEach(elem => {
                                    file.push(elem)
                                })
                                for (let j = 0; j < file.length; j++) {
                                    if (file[j].name.includes('.html')) {
                                        let dom = new JSDOM(fs.readFileSync(path.join(__dirname, "/../templates", filesP[i].name, file[j].name)))
                                        let comment = dom.window.document.createComment("Code injected by CMS")
                                        dom.window.document.body.appendChild(comment)
                                        let script = dom.window.document.createElement("script")
                                        script.src = 'http://localhost:8080/editor.js'
                                        dom.window.document.body.appendChild(script)
                                        let link = dom.window.document.head.getElementsByTagName('link')
                                        link = [...link]
                                        link.forEach(l => {
                                            if (/^(\.\.)|^(\/)|^(\.)|^(?!.*www|http:\/\/|https:\/\/)/.test(l.href)) {
                                                l.href.replace(/^(\.\.)|^(\.)/, "")
                                                l.href = "http://localhost:5500/" + filesP[i].name + "/" + l.href
                                            }
                                        })

                                        let img = dom.window.document.body.getElementsByTagName('img')
                                        img = [...img]
                                        img.forEach(l => {
                                            if (/^(\.\.)|^(\/)|^(\.)|^(?!.*www|http:\/\/|https:\/\/)/.test(l.src)) {
                                                l.src.replace(/^(\.\.)|^(\.)/, "")
                                                l.src = "http://localhost:5500/" + filesP[i].name + "/" + l.src
                                            }
                                        })
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

let deleteFolderRecursive = function(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file) {
          var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
      }
  }