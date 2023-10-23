const {Router} = require("express")
const {get, post, ui, login, loginUI} = require("../controllers/user.controller")
const check = require("../middleware/check")

const passport = require("passport")

const route = Router()


route.get("/",get)
route.post("/signup",check,post)
route.get("/ui",ui)
route.get("/login",loginUI)
route.post("/login", passport.authenticate("local"),login)

route.get("/user",(req,res)=>{
    console.log('====================================');
    console.log(req.user);
    res.send("User Finding...")
    console.log('====================================');
})

module.exports = route