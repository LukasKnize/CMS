const express = require('express')
const router = express.Router()
require('dotenv').config()
const jwt = require("jsonwebtoken")
const userR = require("../internalProcess/userRegistration")
const userL = require("../internalProcess/userLogin")

router.use(express.json())

router.get("/", (req, res) => {
    res.send()
})

router.post("/signUp", (req, res) => {
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

    userR(user).then((result) => {
        if (result == "ok") {
            let token = jwt.sign(user, process.env.SECRET)
            res.json({ token: token })
        }else{
            res.sendStatus(400)
        }
    })

})

router.post("/logIn", (req, res) => {
    let loginInfo = {
        email: req.body.email,
        password: req.body.password
    }

    userL(loginInfo).then((result) => {
        if (result == "ok") {
            let token = jwt.sign(/* data poslaná z db */ dbData, process.env.SECRET)
            res.json({ token: token })
        }else{
            res.sendStatus(400)
        }
    })
})

module.exports = router