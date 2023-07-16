const express = require('express');

const data = require("../models/diet.js");
const favdata = require("../models/favdiet.js")
const app = express();











app.get("/addfav",function(req,res){
  favdata.deleteOne({tag:req.user.username,name:req.query.name})
  .then(()=>{
    console.log("deleted succccfully");
  })
  .catch(err=>{
    console.log(err);
  })
    data.findOne({_id :req.query.id})
    .then(doc =>{
     
    
   
      favdata.create({
        tag:doc.tag,
        name:doc.name,
        calorie:doc.calorie,
        protein:doc.protein,
        fat:doc.fat,
        imag:doc.imag,
        carbo:doc.carbo
      })
      .catch(err =>{
        console.log(err);
      })
     
    })
    .catch(err =>{
        console.log(err)
    })
  res.redirect("/submit");
 });



 module.exports = app;