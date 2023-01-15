const { subtle } = require('crypto').webcrypto;

let hashPassword = async (pass) => {
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

module.exports = hashPassword