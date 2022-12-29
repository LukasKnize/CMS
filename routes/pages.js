const express = require('express')
require('dotenv').config()
const router = express.Router()
const fs = require('fs')
const jwt = require("jsonwebtoken")

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
                    res.status(201).send({message: "crated"})
                    break
                }
            }
        } else {
            page.author = parsedToken.id
            db.pages.push(page)
            fs.writeFileSync('./db.json', JSON.stringify(db))
            res.status(201).send({message: "crated"})
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

module.exports = router