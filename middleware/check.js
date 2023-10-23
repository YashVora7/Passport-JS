const user = require("../models/user.schema")

const check = (req,res,next)=>{
    // let {email, password} = req.body

    let {id} = req.cookies

    // if(email&&password){
    //     next()
    // }
    // else{
    //     res.status(404).send("All fields are required")
    // }

    if(id){
        let data = user.findById(id)
        if(data.email == ""){
            next()
        }
        else{
            res.send("Not accessable")
        }
    }
    else{
        res.redirect("/login")
    }
}

module.exports = check