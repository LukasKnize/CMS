const express = require('express')
require('dotenv').config()
const router = express.Router()
const path = require('path');
const fs = require('fs')
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')
const Page = require('../dbSchemas/pageShema')

router.use(express.json())

router.get('/all', async (req, res) => {
    let pages = await Page.find({})
    let resPages = pages
    for (let i = 0; i < pages.length; i++) {
        resPages[i].toJSON().authorName = await Page.find({ id: resPages[i].author })
    }
    res.send(JSON.stringify(resPages))
})

router.post("/", async (req, res) => {
    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        let page = req.body
        if (await Page.exists({ url: req.body.url }) != null) {
            res.sendStatus(409)
        } else {
            let id = require('crypto').randomBytes(16).toString('hex')
            while (await Page.exists({ id: id }) != null) {
                id = require('crypto').randomBytes(16).toString('hex')
            }
            let newPage = new Page({
                headline: page.headline,
                id: id,
                url: page.url,
                desc: page.desc,
                template: page.template,
                visited: 0,
                author: parsedToken.id
            })

            await newPage.save()

            res.status(201).send({ message: "crated", id: id })
        }
    } catch (error) {
        res.sendStatus(403)
    }
})

router.post('/data/:urlParameter', async (req, res) => {
    let page = await Page.findOne({ id: req.params.urlParameter })
    if (page != null) {
        page.content = req.body.content
        page.save()
        res.sendStatus(201)
    }
})

router.get('/:urlParameter', async (req, res) => {
    let page = await Page.findOne({ url: req.params.urlParameter })
    if (page == undefined) {
        res.sendStatus(404)
    } else {
        if (req.get("origin") != "http://localhost:8080" || req.get("origin") != "http://localhost:5500") {
            Page.findOneAndUpdate({ url: req.params.urlParameter }, { $inc: { visited: 1 } }).exec()
        }
        res.send(page.toJSON())
    }
})

router.delete("/:urlParameter", async (req, res) => {
    let page = await Page.findOne({ url: req.params.urlParameter })
    if (page != undefined) {
        try {
            const token = req.headers['authorization']
            let parsedToken = jwt.verify(token, process.env.SECRET)
            if (parsedToken.type == "admin" || parsedToken.id == page.author) {
                await Page.deleteOne({ url: req.params.urlParameter })
                res.sendStatus(200)
            } else {
                res.sendStatus(403)
            }
        } catch (error) {
            res.sendStatus(500)
        }
    }

})

router.post('/save', async (req, res) => {
    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        if (fs.existsSync(path.join(__dirname, "/../pages/", req.body.url + ".html"))) {
            res.sendStatus(409)
        } else {
            res.status(200).send({message: "ok"})
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(403)
    }
})

router.post("/save/data/:name", (req, res) => {
    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        let file = fs.createWriteStream(path.join(__dirname, "/../pages/", req.params.name + ".html"))
        file.write(req.body.data)
        file.end()
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(403)
    }
})

router.get("/id/:pageId", async (req, res) => {
    let page = await Page.findOne({ id: req.params.pageId })
    if (page == undefined) {
        res.sendStatus(404)
    } else {
        if (req.get("origin") != "http://localhost:8080" || req.get("origin") != "http://localhost:5500") {
            Page.findOneAndUpdate({ url: req.params.urlParameter }, { $inc: { visited: 1 } }).exec()
        }
        res.send(page.toJSON())
    }
})

module.exports = router