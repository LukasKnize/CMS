const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const cors = require('cors')

const ui = express();
const api = express()
const uiPort = process.env.UIPORT || 8080;
const apiPort = process.env.APIPORT || 5500;
ui.use(history());

api.use(cors())

api.get("/", (req, res) => {
    res.send("ok")
})

api.use(express.json())

ui.use(express.static(path.join(__dirname, "public")))
api.use(express.static(path.join(__dirname, "uploads")))
// sendFile will go here

const authRouter = require('./routes/auth')
const pageRouter = require('./routes/pages')

api.use('/auth', authRouter)
api.use('/pages', pageRouter)

ui.listen(uiPort);
console.log('UI Server started at http://localhost:' + uiPort);

api.listen(apiPort)
console.log('API Server started at http://localhost:' + apiPort);