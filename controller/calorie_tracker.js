const foodintake = require("../models/intake_List");
const caloriedata = require("../models/calorie_intake");
const diet = require("../models/diet");
const fav = require("../models/favdiet");
const profile = require("../models/profile");
const mongoose = require("mongoose");
const express= require("express");
const app = express();
const path = require("path");
function man(weight,height,age){
    return 88.362 + 13.397*weight + 4.799*height - 5.677*age;
}
function woman(weight,height,age){
    return 447.593 + 9.247*weight + 3.098*height - 4.330*age;
}
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
        let b;
       profile.findOne({email:req.user.username})
       .then((pro)=>{
        if(pro.gender === "male")
        b = man(pro.weight,pro.height,pro.age);
        else
        b = woman(pro.weight,pro.height,pro.age);

        if(pro.bmi < 18.5)
        b = b * 1.25
        else if(pro.bmi < 25)
        b = b;
        else if(pro.bmi < 30)
        b = b*0.8;
        else 
        b = b*0.6

        res.render("calorie",{calorie:doc4.calorie,target:parseInt(b),diet:doc1,fav:doc3,List:doc});

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
.catch((err)=>{
    console.log(err);
})




})
module.exports = app;