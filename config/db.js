const mongoose = require("mongoose")
require('dotenv').config()

let url = process.env.DB_URL

const connect = async ()=>{
    await mongoose.connect(url)
    console.log("Connected to MongoDB");
}

module.exports = connect