const mongoose = require("mongoose")
const dotenv = require("dotenv")
mongoose.set('strictQuery', false);
dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE

mongoose.connect(DB)
.then(console.log("mongodb is connected"))
.catch(err=>console.log(err))
