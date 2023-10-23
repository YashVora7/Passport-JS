const user = require("../models/user.schema")

const strategy = require("passport-local").Strategy

const auth = (passport)=>{
    passport.use(new strategy ({usernameField: "email"},async(email,password, done)=>{
        let User = await user.findOne({email:email})

        if(!User){
            return done(null, false)
        }
        if(User.password != password){
            return done(null, false)
        }
        return done(null, User)

    }))

    passport.serializeUser((User , done) =>{
        return done(null , User.id)
    })

    passport.deserializeUser(async(id , done) =>{
        let data = await user.findById(id)
        return (null , data)
    })

}

module.exports = auth