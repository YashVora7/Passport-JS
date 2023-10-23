const { name } = require("ejs")
const user = require("../models/user.schema")

const get =  async(req,res)=>{
    let data = await user.find()
    res.send(data)
}

const post = async (req,res)=>{
    let {email} = req.body
    let data =  await user.findOne({email:email})

    if(!email == data){
        let print = await user.create(req.body)
        res.send(print)
    }
    else{
        res.send("User Already Exist")
    }
}

const login = async (req,res)=>{
    // let {email , password }= req.body;
    // let users = await user.find({email:email})
    // let pass = await user.find({password:password})

    // if(!email == users){
    //     res.send("User not found")
    // }
    // else if(!password == pass){
    //     res.send("Password is incorrect")
    // }
    // res.cookie("id",users.id).send("checking")
    return res.send("Logged in successfully")
}

const ui = (req,res)=>{
    res.render("index")
}

const loginUI = (req,res)=>{
    res.render("login")
}

module.exports = {get, post, ui, login, loginUI}