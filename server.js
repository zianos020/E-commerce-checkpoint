// 1- require express
const express = require("express");

// 2-  create instance
const app = express();

// 5- require env
require('dotenv').config();

// 6- connectDB
const connectDB = require('./config/connectDB')
connectDB()

// 7- routing
// middlewear global


// middlewear route
app.use("/api/user", require("./routes/user"))


// 3- port
const port = process.env.port

// 4- create server
app.listen(port, (err) => {
    err ? console.error(err) :console.log(`listening on port ${port}`)
})

