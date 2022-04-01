const express = require('express');
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000;

//console.log(__dirname);
console.log(path.join(__dirname,"./public"))
const staticpath = path.join(__dirname,"./public");

app.use(express.static(staticpath));

app.listen(PORT,()=>{
    console.log("server running on 3000")
})

app.get("/",(req,res)=>{
    res.send("hello welcome nodejs ")
})