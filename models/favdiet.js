const express = require('express');
const mongoose = require('mongoose');

const data1schema = new mongoose.Schema({
    tag:{
      type:String
    },
    name:{
      type:String,
     
      require:true
    },
    calorie:{
      type:String,
      require:true
    },
    protein:{
      type:String,
      require:true
    },
    fat:{
      type:String,
      require:true
    },
    imag:{
      type:String,
      require:true
    },
    carbo:{
      type:String
    }
  });
  const favdiet = new mongoose.model("favdiet",data1schema);
  module.exports = favdiet;