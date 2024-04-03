const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send('Hello Iqbal')
})

app.get("/login",(req,res)=>{
    res.send("You are Successfully Login")
})

app.listen(process.env.PORT,()=>{
    console.log(`you are listening at port ${port}`);
})