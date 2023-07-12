const foodintake = require("../models/intake_List");
const caloriedata = require("../models/calorie_intake");
const diet = require("../models/diet");
const fav = require("../models/favdiet");
const mongoose = require("mongoose");
const express= require("express");

const app = express();
app.get("/caloriediet",function(req,res){
   caloriedata.findOne({tag:req.user.username})
   .then((doc)=>{
      foodintake.findOne({_id:req.query.id})
      .then((doc1)=>{
carlor = doc.calorie - doc1.calorie;
caloriedata.findOneAndUpdate({tag:req.user.username},{calorie:carlor})
.then(()=>{
   console.log("done")
})
.catch((err)=>{
   console.log(err);
})


      })
      foodintake.deleteMany({_id:req.query.id})
      .then(()=>{
         console.log("removeed succussfully")
      })
      .catch((err)=>{
         console.log(err);
      })
   })
   res.redirect("/calorie");
})
app.post("/caloriediet",function(req,res){
   caloriedata.findOne({tag:req.user.username})
   .then((doc)=>{
     
     diet.findOne({tag:req.user.username,_id:req.body.items})
     .then((doc1)=>{
      
      let car = doc.calorie + parseInt(parseInt(doc1.calorie)*req.body.amount/200);
      caloriedata.findOneAndUpdate({tag:req.user.username},{calorie:car})
      .then(()=>{
      
      console.log("updated successfully")
     })
      .catch((err)=>{
         console.log(err);
      })
      foodintake.create({
      tag:req.user.username,
      name:doc1.name,
      ammount:req.body.amount,
      date:require("../date"),
      calorie:parseInt(doc1.calorie*req.body.amount/200)
     })
      
     })
     .catch((err)=>{
        console.log(err);
     })

res.redirect("/calorie");

   })
   .catch((err)=>{
  console.log(err);
   })



})
module.exports = app;