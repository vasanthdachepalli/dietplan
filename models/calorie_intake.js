const mongoose = require("mongoose");
const calorieschema = new mongoose.Schema({
tag:String,
date:String,
calorie:Number,
calorie1:Number


})
const calorie = new mongoose.model("calorie",calorieschema);
module.exports = calorie;