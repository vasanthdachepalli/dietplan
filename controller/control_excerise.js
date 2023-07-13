const exceriseintake = require("../models/excerise_done");
const caloriedata = require("../models/calorie_intake");
const data = require("../models/excerise");
const profile = require("../models/profile");
const mongoose = require("mongoose");
const express= require("express");
const app = express();
app.post("/exe_add",(req,res)=>{
let tag1 = req.user.username;
data.findOne({_id:req.body.item})
.then((doc)=>{
    
    caloriedata.findOne({tag:tag1})
    .then((doc1)=>{
        profile.findOne({email:tag1})
        .then((doc2)=>{
           let cal;
           if(doc2.weight <= 60)
           cal = doc.weight1;
           else if(doc2.weight <= 80)
           cal = doc.weight2;
           else
           cal = doc.weight3;
           let calorie = doc1.calorie1;
           calorie = calorie + parseInt(cal*req.body.amount/30);
           caloriedata.updateOne({tag:tag1},{calorie1:calorie})
           .then(()=>{
            console.log(require("../date"));
           })
           .catch((err)=>{
            console.log(err);
           })
           exceriseintake.create({
            tag:tag1,
            name:doc.name,
            duration:req.body.amount,
            date:require("../date"),
            calorie:parseInt(cal*req.body.amount/30)
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

res.redirect("/exercise")
})
module.exports = app;