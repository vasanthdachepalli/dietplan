const express = require('express');

const data = require("../models/diet.js");
const favdata = require("../models/favdiet.js")
//information of the food items we will give before hand
const multer = require('multer')
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const app = express();
app.use(express.static(__dirname+"../assets"));
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

//-----------------------------------------------------------------picture uploader----------------------------------------------------------------------------

//Upload Setting-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------

app.get("/submit", function(req, res){
  let a = require("../delete.js");
  a();
    if (req.isAuthenticated()){
  
    data.find({ tag: req.user.username })
  .then(documents => {
    res.render('diet', { List: documents });
  })
  .catch(error => {
    console.error('Error retrieving documents:', error);
  });

    } else {
      
      res.redirect("/login");
    }
  });
  app.post("/submit",function(req,res){
    
     data.findOne({_id :id})
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

      
     })
  });
 

 
  module.exports = app;