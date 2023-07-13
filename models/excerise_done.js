const mongoose = require("mongoose");
const exceriseschema = new mongoose.Schema({
    tag:String,
    name:String,
    date:require("../date"),
    duration:Number,
    calorie:Number
}

);
const model = new mongoose.model("excersice_done",exceriseschema);
module.exports = model;