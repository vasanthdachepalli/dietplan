const mongoose = require('mongoose');
const profileshema = new mongoose.Schema({
    email:String,
    image:String,
    age:Number,
    weight:Number,
    height:Number,
    name:String,
    gender:String,
    bmi:Number
  });
  
  const profile = new mongoose.model("profile",profileshema);
  module.exports = profile;