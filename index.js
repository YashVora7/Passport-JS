const express = require("express")
const connect = require("./config/db")
const route = require("./routes/user.routes")
const app = express()
const session = require("express-session")
const passport = require("passport")
app.use(session({secret: "private-key"}))
app.use(passport.initialize())
app.use(passport.session())
const auth = require("./helper/local")
auth(passport)
const cookie = require("cookie-parser")
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(route)
require("dotenv").config()
app.use(cookie())

let port = process.env.port

app.set('view engine', 'ejs')
app.set('views',__dirname+'/view')

app.use(express.static(__dirname+"/public"))

app.listen(port,()=>{
    connect()
    console.log("Server on 8090");
})