const { subtle } = require('crypto').webcrypto;
const fs = require('fs')
const mongoose = require('mongoose')
const User = require('../dbSchemas/userShema')

let login = async (data) => {
    let db = await User.find({ email: data.email })
    db = db[0].toJSON()
    let index;

    if (db == null) {
        console.log("email doesn't exist")
        return "email doesn't exist"
    } else {
    }

    if (data.password != "" && data.password != null && data.password != undefined) {
        //some code that takes salt from db 
        let salt = db.salt
        let peperArray = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
        ];
        for (let i = 0; i < peperArray.length; i++) {
            let result = await testPass(data.password, salt, peperArray[i])
            if (result == db.password) {
                return db.id
            }
        }
        return "bad pass"
    }
}

async function testPass(pass, salt, pep) {
    const encoder = new TextEncoder();
    let fullPass = pass + salt + pep;
    const data = encoder.encode(fullPass);
    const hash = await subtle.digest("SHA-256", data);
    let hpass = Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
    return hpass
}

module.exports = login