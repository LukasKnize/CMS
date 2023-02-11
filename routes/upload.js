const express = require('express')
require('dotenv').config()
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const jwt = require("jsonwebtoken")
router.use(express.json())

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

let upload = multer({ storage: storage });

router.post("/", upload.array('files[]'), (req, res, next) => {
    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        let response = []
        for (let i = 0; i < req.files.length; i++) {
            response.push("http://localhost:5500/" + req.files[i].filename)
        }
        res.status(201).send({ urls: response })
    } catch (error) {
        res.status(403).send({message: "wrong authorization token"})
    }
})

module.exports = router