const mongoose = require("mongoose");
const calorieschema = new mongoose.Schema({
tag:String,
date:String,
calorie:Number



})
const calorie = new mongoose.model("calorie",calorieschema);
module.exports = calorie;