const exceriseintake = require("../models/excerise_done");
const caloriedata = require("../models/calorie_intake");
const data = require("../models/excerise");
const profile = require("../models/profile");
const mongoose = require("mongoose");
const express= require("express");
const app = express();
const path = require("path");
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs');
app.get("/exercise",function(req,res){
    let tag1 = req.user.username;
    data.findOne({id : req.body.item})
    .then((doc)=>{
        exceriseintake.find({tag:tag1})
        .then((doc1)=>{
            caloriedata.findone({tag:tag1})
            .then((doc2)=>{
               res.render("excresis",{Burned_calorie:doc2.calorie1,Exe:doc,List:doc1})
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
