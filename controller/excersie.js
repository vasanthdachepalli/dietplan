const exceriseintake = require("../models/excerise_done");
const caloriedata = require("../models/calorie_intake");
const data = require("../models/excerise");
const profile = require("../models/profile");
const mongoose = require("mongoose");
const express= require("express");
const app = express();
const path = require("path");
const male = function(mass,height,age){
    
return  88.362 + (13.397 * mass) + (4.799 * height ) - (5.677 * age);
};
const female = function(mass,height,age){
    return 447.593 + (9.247 * mass) + (3.098 * height ) - (4.330 * age);
    };
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs');
app.get("/exercise",function(req,res){
    let tag1 = req.user.username;
    data.find({})
    .then((doc)=>{
        exceriseintake.find({tag:tag1})
        .then((doc1)=>{
            caloriedata.findOne({tag:tag1})
            .then((doc2)=>{
                profile.findOne({email:tag1})
                .then((doc3)=>{
                   let tar = 0;
                   if(doc3.gender == "male")
                   tar = male(doc3.weight,doc3.height,doc3.age);
                   else
                   tar = female(doc3.weight,doc3.height,doc3.age);
                   tar = parseInt(tar)
                   res.render("excresis",{Burned_calorie:doc2.calorie1,target:tar,Exe:doc,List:doc1});
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
