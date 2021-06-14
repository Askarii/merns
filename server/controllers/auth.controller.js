const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
//Controlers for user authentications
//Login Route
exports.login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await findOne({email})
        if(!user) {
            res.status(404).json({
                err: "User not for with this email"
            })
        }
        //We need to compare the hash password and req body password
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isMatch) {
            return res.status(400).json({err: "Invalid credentials"})
        }

        const token = jwt.sign({id: user._id}, "TOKENSECRET")

        //Return the successfully login
        return res.status(200).json({
            message: "Welcome back",
            token
        })
    } catch (error) {
        return res.status(500).json({
            err: error.message || "Error while registration"
        })
    }
}

//Register Route
exports.register = async (req, res) => {
    const {username, email, password, confirmPassword} = req.body
    try {
        const user = await new User({username, email, password, confirmPassword})
        //Checking All the fields
        if(!email || !password || !confirmPassword){
            res.status(400).json({
                err: "Please fill the registration form properly"
            })
            return
        }
        //Checking Password and confirmPassword are same
        if(password !== confirmPassword){
            res.json(400).json({
                err: "Password much match"
            })
        }
        //Before saving the password we need to has it
        const saltPassword = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(req.password, saltPassword)
        await user.save()

        //Return a jwt token so that use can get access
        const token = jwt.sign({id: user._id}, "TOKENSECRET")
        return res.status(200).json({
            success: true,
            message: "Successfully Registered",
            token
        })
    } catch (error) {
        res.status(500).json({
            err: error.message || "Error while registration"
        })
        return
    }
}
