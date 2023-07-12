const mongoose = require("mongoose");
const ListSchema = new mongoose.Schema({
tag:String,
name:String,
ammount:Number,
date:String,
calorie:String
})
const intake_List = new mongoose.model("Intake_List",ListSchema);
module.exports = intake_List;
