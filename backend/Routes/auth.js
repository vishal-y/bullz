const express = require('express')
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../Models/user")


router.get("/",(req,res)=>{
    res.send("Bullzz Server");
})

// type of events --> init, validate, save, remove

//     // 1) in this first we have finded that email is present in database or not by using findOne() -> it return true or false as if present or not
//     // 2) if the email is present in data base we send a json error
//     // 3) if the email is not present then we create a new user and inserting the name,email,pass,cpass to it
//     // 4) then we save using user.save() and it returns a promises if it succ then msg else err

router.post("/register", async(req,res)=>{

    const {name,email,password,cpassword} = req.body;
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error:"Please the fill the details"});
    }

    try{
        const userExist=  await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"This email is created"})
        }
        const user = new User({name,email,password,cpassword});
        await user.save();
        res.status(201).json({message:"Your data is saved successfully"})
        
    }catch(err){
        console.log(err);
    }

})

    // credential check for login :
    // 1) No Empty fields
    // 2) Email muust be registered 
    // 3) Pass word must be matched


    // login route
    router.post("/signin",async(req,res)=>{
        try{
            const {email,password} = req.body;
            if(!email || !password){
                return res.status(400).json({error:"Please enter email and password"})
            }
            const userLogin = await User.findOne({email:email});
            if(userLogin){
                const isMatch = await bcrypt.compare(password,userLogin.password)

                const token = await userLogin.generateAuthToken();
                console.log(token)

                res.cookie("jwtoken",token,{
                    expires: new Date(Date.now()+25892000000),
                    httpOnly:true
                })

                if(isMatch){
                    res.status(200).json({message:"login successfully"})
                }else{
                    res.status(400).json({error:"Invalid Credential"})
                }
            }else{
                res.status(400).json({error:"Login failed"})
            }
        }catch(err){
            console.log(err)
        }


    })



module.exports = router;