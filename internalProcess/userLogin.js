const { subtle } = require('crypto').webcrypto;
const fs = require('fs')
const mongoose = require('mongoose')
const User = require('../dbSchemas/userShema')

let login = async (data) => {
    let db = await User.findOne({ email: data.email })
    if (db != undefined) {
        db = db.toJSON()
        let index;

        if (db == null) {
            return "email doesn't exist"
        } else {
        }

        if (data.password != "" && data.password != null && data.password != undefined) {
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
    }else {
        return "bad email"
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