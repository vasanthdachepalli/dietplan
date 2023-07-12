const foodintake = require("../models/intake_List");
const caloriedata = require("../models/calorie_intake");
const diet = require("../models/diet");
const fav = require("../models/favdiet");
const mongoose = require("mongoose");
const express= require("express");
const app = express();
const path = require("path");
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs');
app.get("/calorie",function(req,res){
let a;
foodintake.find({tag:req.user.username})
.then((doc) =>{
    

    diet.find({tag:req.user.username})
    .then((doc1) =>{
        fav.find({tag:req.user.username})
.then((doc3) =>{
    caloriedata.findOne({tag:req.user.username})
    .then((doc4) =>{
        res.render("calorie",{calorie:doc4.calorie,diet:doc1,fav:doc3,List:doc});


    })
    .catch((err)=>{
        console.log(err);
    })
      
})

.catch((err)=>{
    console.log(err);
})
       
    
    })
    .catch((err)=>{
        console.log(err);
    })


})
.catch((err)=>{
    console.log(err);
})




})
module.exports = app;