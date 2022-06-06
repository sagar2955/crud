const express = require("express")

require("dotenv").config()
require("./config/database").connect()

const app = express()

app.use(express.json)

module.exports = app