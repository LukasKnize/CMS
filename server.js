const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./dbSchemas/userShema')

mongoose.connect("mongodb://localhost:27017/CMS")

const ui = express();
const api = express();
const page = express();
const uiPort = process.env.UIPORT || 8080;
const apiPort = process.env.APIPORT || 5500;
const pagePort = process.env.PAGEPORT || 3000;
ui.use(history());

api.use(cors())

api.get("/", (req, res) => {
    res.send("ok")
})

api.use(express.json())

ui.use(express.static(path.join(__dirname, "public")))
api.use(express.static(path.join(__dirname, "uploads")))
api.use(express.static(path.join(__dirname, "templates")))
page.use(express.static(path.join(__dirname, "pages")))

const authRouter = require('./routes/auth')
const pagesRouter = require('./routes/pages')
const templateRouter = require("./routes/template")
const userRouter = require("./routes/users")
const pageRouter = require("./routes/page")
const uploadRouter = require("./routes/upload")

api.use('/auth', authRouter)
api.use('/pages', pagesRouter)
api.use('/template', templateRouter)
api.use('/users', userRouter)
api.use('/upload', uploadRouter)
page.use('/', pageRouter)

ui.listen(uiPort);
console.log('UI Server started at http://localhost:' + uiPort);

api.listen(apiPort)
console.log('API Server started at http://localhost:' + apiPort);

page.listen(pagePort)
console.log('pages are served at http://localhost:' + pagePort);