const { subtle } = require('crypto').webcrypto;

let login = async (data) => {
    if (data.password != "" && data.password != null && data.password != undefined) {
       //some code that takes salt from db 
       let salt = "sdgisrughaursghaeriughierhgouhrg"
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
       for (let index = 0; index < peperArray.length; index++) {
           let result = testPass(data.password, salt, peperArray[i])
           if (result == "ok") {
               return "ok"
               break
           }
       }
       return "bad pass"
    }
}

async function testPass(pass, salt, pep) {
    let peper = peperArray[Math.floor(Math.random() * peperArray.length)];
    const encoder = new TextEncoder();
    let fullPass = pass + salt + peper;
    const data = encoder.encode(fullPass);
    const hash = await subtle.digest("SHA-256", data);
    let hpass = Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
    //check db if pass == stored pass
    if (ok) {
        return "ok";
    }else{
        return "not ok"
    }
    
}

module.exports = login