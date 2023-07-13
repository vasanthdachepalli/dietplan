const express = require('express')
const mongoose = require('mongoose')
const profile = require("../models/profile")
const app = express();
const path = require("path");
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs');
app.get("/display",(req,res)=>{

profile.findOne({email:req.user.username})
.then(doc =>{
    res.render('Profile_Dispaly',{
        j:doc
    })
})
.catch(err=>{
    console.log(err);
})




})
module.exports = app;