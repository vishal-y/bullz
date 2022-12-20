const dotenv = require("dotenv")
const bodyParser = require("body-parser");
require("./DB/conn")
const cors = require('cors')
const express = require("express")
const app = express();
const PORT = 5000;
const User = require('./Models/user')

app.use(cors(
    { origin: "http://localhost:3000",
      credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200,
      methods: ["GET","POST","PUT","DELETE"],}
    ));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(require('./Routes/auth'))


app.listen(PORT,()=>{
    console.log(`connection is on http://localhost:${PORT}`)
})