const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const ui = express();
const api = express()
const uiPort = process.env.UIPORT || 8080;
const apiPort = process.env.APIPORT || 5500;
ui.use(history());

api.get("/", (req, res) => {
    res.send("ok")
})

api.use(express.json())

ui.use(express.static(path.join(__dirname, "public")))
// sendFile will go here

const authRouter = require('./routes/auth')

api.use('/auth', authRouter)

ui.listen(uiPort);
console.log('UI Server started at http://localhost:' + uiPort);

api.listen(apiPort)
console.log('API Server started at http://localhost:' + apiPort);