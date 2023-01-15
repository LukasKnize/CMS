const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path');

router.get("/", (req, res) => {
    res.sendFile("../pages/index.html")
})

router.get("/:name", (req, res) => {
    if (fs.existsSync(path.join(__dirname, "/../pages/", req.params.name + ".html"))) {
        res.sendFile(path.join(__dirname, "/../pages/", req.params.name + ".html"))
    } else {
        res.sendFile(path.join(__dirname, "/../pages/404.html"))
    }
})

module.exports = router