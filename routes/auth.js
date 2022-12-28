const express = require('express')
const router = express.Router()
require('dotenv').config()
const jwt = require("jsonwebtoken")
const userR = require("../internalProcess/userRegistration")
const userL = require("../internalProcess/userLogin")
const fs = require('fs')

router.use(express.json())

router.get("/", (req, res) => {
    res.send("ok bro")
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
        if (result[0] == "ok") {
            let token = jwt.sign({username: user.username, email: user.email, type: user.type, id: result[1]}, process.env.SECRET)
            res.json({ token: token })
        }else{
            res.status(400).send({message: result})
        }
    })

})


router.post("/logIn", (req, res) => {
    let loginInfo = {
        email: req.body.email,
        password: req.body.password
    }

    userL(loginInfo).then((result) => {
        if (!isNaN(result)) {
            db = JSON.parse(fs.readFileSync('./db.json'))
            let token = jwt.sign({username: db.users[result].username, email: db.users[result].email, type: db.users[result].type}, process.env.SECRET)
            res.json({ token: token })
        }else{
            res.status(400).send({message: result})
        }
    })
})

router.post("/deleteAccount", (req, res) => {
    try {
        const token = req.headers['authorization']
        let parsedToken = jwt.verify(token, process.env.SECRET)
        console.log(parsedToken.type)
        if (parsedToken.type == "admin") {
            if (req.body.id != undefined && req.body.id != "") {
                //find user in db and delete
            }
        }else{
            res.status(403).send({message: "access denied, only admin can delete other accounts"})
        }
    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = router