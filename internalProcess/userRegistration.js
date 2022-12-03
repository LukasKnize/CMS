const { subtle } = require('crypto').webcrypto;
const fs = require('fs')

let signup = async(data) => {
    let pasRegEx = new RegExp(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{12,})\S$/);
    let emRegEx = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pasRegEx.test(data.password) && emRegEx.test(data.email)) {
        console.log(data.password)
        let hashedPass = await hashPassword(data.password)
        let saveData = {
            username: data.username,
            email: data.email,
            type: data.type,
            password: hashedPass.pass,
            salt: hashedPass.salt
        }

        console.log(saveData)
        fs.appendFile("./db.json", JSON.stringify(saveData), function(err, result) {
            if(err) console.log('error', err);
          })
        return "ok"
    } else {
        return "bad request"
    }
}


async function hashPassword(pass) {
    let saltCharSet =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let salt = "";
    for (let i = 0; i < 32; i++) {
        salt += saltCharSet.charAt(
            Math.floor(Math.random() * saltCharSet.length)
        );
    }

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