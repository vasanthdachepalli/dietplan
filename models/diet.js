const express = require('express');
const mongoose = require('mongoose');

const dataschema = new mongoose.Schema({
    tag:{
      type:String
    },
    name:{
      type:String,
      
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
  const diet = new mongoose.model("diet",dataschema);
  module.exports = diet;