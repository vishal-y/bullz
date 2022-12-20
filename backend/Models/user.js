const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    cpassword: {
        type: String,
        require: true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,12)
        this.cpassword= await bcrypt.hash(this.cpassword,12)
    }
    next();
})

// 1) generate JWT token and Stored in the database
// 2) How to stored the token in cookies
// 3) get token from cookie and very the user

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token
    }catch(err){
        console.log(err);
    }
}


const userModel = mongoose.model('UserDetails',userSchema)
module.exports = userModel