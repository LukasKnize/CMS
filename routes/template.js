const express = require('express')
require('dotenv').config()
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const jwt = require("jsonwebtoken")
const unzipper = require('unzipper')

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
    if (req.file){

        let filepath = path.join(req.file.destination, req.file.filename);
        console.log(path.join(__dirname, "/../templates"))
        fs.createReadStream(filepath).pipe(unzipper.Extract({path: path.join(__dirname, "/../templates")}));
    }
    res.sendStatus(200)
})

module.exports = router