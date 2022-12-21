const { subtle } = require('crypto').webcrypto;
const fs = require('fs')

let login = async (data) => {
    db = fs.readFileSync('./db.json')
    db = JSON.parse(db)
    let index;
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].email == data.email) {
            index = i
            break
        }else if (i == db.users.length - 1) {
            console.log("email doesn't exist")
            return "email doesn't exist"
        }
    }
    if (data.password != "" && data.password != null && data.password != undefined) {
       //some code that takes salt from db 
       let salt = db.users[index].salt
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
           if (result == db.users[index].password) {
               return index
           }
       }
       console.log("bad pass")
       return "bad pass"
    }
}

async function testPass(pass, salt, pep) {
    const encoder = new TextEncoder();
    let fullPass = pass + salt + pep;
    const data = encoder.encode(fullPass);
    const hash = await subtle.digest("SHA-256", data);
    let hpass = Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
    //check db if pass == stored pass
    return hpass
    
}

module.exports = login