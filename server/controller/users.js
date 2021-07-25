
const jwt = require('jsonwebtoken')

const User = require('../models/users')



exports.process_signup = async(req,res)=>{
    const body= req.body
    const newUser= new User({
        email   :body.email,
        password:body.password,
        rolo:'user',

    })
    const user =await User.findOne({email:body.email})

    try {
        if(user) return res.status(200).json("user exist")
        else{
            const returnUser= await newUser.save()
            return res.status(200).json(returnUser)
        }

        
    } catch (error) {
        
    }

}