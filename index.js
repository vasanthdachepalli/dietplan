
//did not do any changes in this file ,it is a server file//


const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");

const app = express();
app.use(express.static(__dirname+"/assets"));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

List = [{
    name:"backetball",
},
{
    name:"football"
},{
    name:"circit"
}]
Err = [{
 
    name:"backball",
    calorie:110,
    duration:20
 }

]
app.get("/",(req,res)=>{

res.render("excresis",{Burned_calorie:0,Exe:List,List:Err})
})
app.listen(3000, function() {
    console.log("Server started on port 3000.");
  });
