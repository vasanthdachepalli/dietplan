const express = require('express')
const mongoose = require('mongoose')
const favdata = require("../models/favdiet.js")
const app = express();
const path = require("path");
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs');

app.get("/fav/remove",(req,res)=>{

    favdata.deleteOne({ _id:req.query.id })
    .then(() => {
      console.log('Element deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting element:', error);
    });
    res.redirect("/fav");

})



module.exports = app