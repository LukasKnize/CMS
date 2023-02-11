const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
require('dotenv').config()
const User = require('../dbSchemas/userShema')
const newPassword = require("../internalProcess/newPassword")

router.use(express.json())

router.get('/', async (req, res) => {
    let user = await User.find({})
    if (user.length == 0) {
        res.status(200).send({ message: "no users", token: jwt.sign({ type: "firstTime" }, process.env.SECRET, { expiresIn: '1h' }) })
    } else {
        res.status(200).send({ message: "active users" })
    }
})

router.post("/deleteAccount", async (req, res) => {
    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        if (parsedToken.type == "admin") {
            if (req.body.id != undefined && req.body.id != "") {
                let user = await User.findOne({ id: req.body.id })
                if (user.type != "admin") {
                    user.email = ""
                    user.password = ""
                    user.salt = ""
                    user.type = ""
                    user.isActive = false
                    user.save()
                }
            }
        } else {
            res.status(403).send({ message: "access denied, only admin can delete other accounts" })
        }
    } catch (error) {
        res.status(403).send({message: "wrong authorization token"})
    }
})

router.patch("/:userId", async (req, res) => {
    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        let user = await User.findOne({ id: req.params.userId })
        let pasRegEx = new RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{12,})\S$/);
        if ((parsedToken.type == "admin" && (parsedToken.id == req.params.userId || user.type != "admin")) || req.params.userId == parsedToken.id) {
            if (req.body.username != "" || req.body.username != undefined) {
                user.username = req.body.username
            }

            if (req.body.email != "" || req.body.email != undefined) {
                user.email = req.body.email
            }

            if (pasRegEx.test(req.body.password)) {
                let passwordData = await newPassword(req.body.password)
                user.password = passwordData.pass
                user.salt = passwordData.salt
            }
            user.save()
        } else {
            res.sendStatus(403).send({message: "you can't edit this user"})
        }
    } catch (error) {
        res.status(403).send({message: "wrong authorization token"})
    }
})

module.exports = router