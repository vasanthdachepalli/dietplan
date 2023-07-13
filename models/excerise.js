const mongoose=require("mongoose")
  const excrieseschema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    weight1:Number,
    weight2:Number,
    weight3:Number
  }

  )
  const excerise = new mongoose.model("excerise",excrieseschema);
module.exports = excerise;