const express = require('express')
const router = express.Router()
require('dotenv').config()
const jwt = require("jsonwebtoken")
const userR = require("../internalProcess/userRegistration")
const userL = require("../internalProcess/userLogin")
const fs = require('fs')
const mongoose = require('mongoose')
const User = require('../dbSchemas/userShema')

router.use(express.json())

router.get("/", (req, res) => {
    res.send("ok bro")
})

router.post("/signUp", async (req, res) => {
    let username = req.body.username
    let email = req.body.email
    let type = req.body.type
    let password = req.body.password

    let user = {
        username: username,
        email: email,
        type: type,
        password: password
    }

    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        if (parsedToken.type == "admin") {
            userR(user).then((result) => {
                if (result[0] == "ok") {
                    let token = jwt.sign({ username: user.username, email: user.email, type: user.type, id: result[1] }, process.env.SECRET)
                    res.json({ token: token })
                } else {
                    res.status(400).send({ message: result })
                }
            })
        } else if (parsedToken.type == "firstTime") {
            let users = await User.find({})
            if (users.length == 0) {
                userR(user).then((result) => {
                    if (result[0] == "ok") {
                        let token = jwt.sign({ username: user.username, email: user.email, type: user.type, id: result[1] }, process.env.SECRET)
                        res.json({ token: token })
                    } else {
                        res.status(400).send({ message: result })
                    }
                })
            } else {
                res.status(403).send({ message: "there are active users already" })
            }
        }
    } catch (error) {
        res.status(403).send({message: "wrong authorization token"})
    }

})


router.post("/logIn", async (req, res) => {
    let loginInfo = {
        email: req.body.email,
        password: req.body.password
    }

    userL(loginInfo).then(async (result) => {
        if (result != "bad pass") {
            let user = await User.findOne({ id: result })
            user = user.toJSON()
            if (user != undefined) {
                let token = jwt.sign({ username: user.username, email: user.email, type: user.type, id: result }, process.env.SECRET)
                res.status(200).json({ token: token })
            } else {
                res.status(404).send({message: "this user doesn't exists"})
            }
        } else {
            res.status(400).send({ message: result })
        }
    })
})

router.post("/signUpAdmin", async (req, res) => {
    let username = req.body.username
    let email = req.body.email
    let type = req.body.type
    let password = req.body.password
    let adminPassword = req.body.adminPassword
    let adminEmail = req.body.adminEmail

    userL({password: adminPassword, email: adminEmail}).then(async (result) => {
        if (result != "bad pass"  && result != "bad email") {
            let user = {
                username: username,
                email: email,
                type: type,
                password: password
            }
        
            try {
                const token = req.headers['authorization']
                let parsedToken = jwt.verify(token, process.env.SECRET)
                if (parsedToken.type == "admin") {
                    userR(user).then((result) => {
                        if (result[0] == "ok") {
                            let token = jwt.sign({ username: user.username, email: user.email, type: user.type, id: result[1] }, process.env.SECRET)
                            res.status(200).json({ token: token })
                        } else {
                            res.status(400).send({ message: result })
                        }
                    })
                }
            } catch (error) {
                res.status(403).send({message: "wrong authorization token"})
            }  
        } else {
            res.status(400).send({ message: result })
        }
    })
})


module.exports = router