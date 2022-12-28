const express = require('express')
require('dotenv').config()
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const jwt = require("jsonwebtoken")

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg') //Appending .jpg
    }
})

let upload = multer({ storage: storage });

router.use(express.json())

router.get('/all', (req, res) => {
    let db = JSON.parse(fs.readFileSync('./db.json'))
    let resPages = db.pages
    for (let i = 0; i < db.pages.length; i++) {
        for (let j = 0; j < db.users.length; j++) {
            if (db.users[j].id == resPages[i].author) {
                resPages[i].authorName = db.users[j].username
            }
        }
    }
    res.send(JSON.stringify(resPages))
})

router.post("/", (req, res) => {
    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        let db = JSON.parse(fs.readFileSync('./db.json'))
        console.log(parsedToken.id)
        let page = req.body
        if (db.pages.length != 0) {
            for (let i = 0; i < db.pages.length; i++) {
                if (db.pages[i].url == req.body.url) {
                    res.sendStatus(409)
                    break
                } else if (i == db.pages.length - 1) {
                    page.author = parsedToken.id
                    db.pages.push(page)
                    fs.writeFileSync('./db.json', JSON.stringify(db))
                    res.sendStatus(201)
                    break
                }
            }
        } else {
            page.author = parsedToken.id
            db.pages.push(page)
            fs.writeFileSync('./db.json', JSON.stringify(db))
            res.sendStatus(201)
        }

    } catch (error) {
        res.sendStatus(403)
    }
})

router.get('/:urlParameter', (req, res) => {
    let db = JSON.parse(fs.readFileSync('./db.json'))
    for (let i = 0; i < db.pages.length; i++) {
        if (db.pages[i].url == req.params.urlParameter) {
            res.send(db.pages[i])
            break
        } else if (i == db.pages.length - 1) {
            res.sendStatus(404)
        }
    }
})

router.post("/fileTest", upload.single('avatar'), (req, res) => {
    let datta = req.file.filename
    console.log(datta)
    //fs.writeFileSync("test.png", datta)
})

module.exports = router