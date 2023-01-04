const { subtle } = require('crypto').webcrypto;
const fs = require('fs')
const mongoose = require('mongoose')
const User = require('../dbSchemas/userShema')

let signup = async (data) => {
    let pasRegEx = new RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{12,})\S$/);
    let emRegEx = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (pasRegEx.test(data.password) && emRegEx.test(data.email)) {
        let hashedPass = await hashPassword(data.password)
        let saveData = {
            username: data.username,
            email: data.email,
            type: data.type,
            password: hashedPass.pass,
            salt: hashedPass.salt,
            id: require('crypto').randomBytes(16).toString('hex')
        }

        while (await User.exists({ id: saveData.id }) != null) {
            saveData.id = require('crypto').randomBytes(16).toString('hex')
        }


        const user = new User({
            username: saveData.username,
            email: saveData.email,
            type: saveData.type,
            password: saveData.password,
            salt: saveData.salt,
            id: saveData.id,
            isActive: true
        })

        await user.save()

        return ["ok", saveData.id]
    } else {
        return "bad request"
    }
}


async function hashPassword(pass) {
    let salt = require('crypto').randomBytes(32).toString('hex')

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
    let peper = peperArray[Math.floor(Math.random() * peperArray.length)];
    const encoder = new TextEncoder();
    let fullPass = pass + salt + peper;
    const data = encoder.encode(fullPass);
    const hash = await subtle.digest("SHA-256", data);
    let hpass = Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
    return { pass: hpass, salt: salt };
}


module.exports = signup
