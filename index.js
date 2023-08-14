require('dotenv').config();
const express = require("express");
const multer = require('multer')
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();
app.use(express.static(__dirname+"/assets"));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
const data = require('./models/diet');
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/userDB", {useNewUrlParser: true});
//mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema ({
  email: String,
  password: String,
 
});




//data schema for the user to create data 



const profile =  require("./models/profile") ;          
//-----------------------------------------------------------------picture uploader----------------------------------------------------------------------------
let storage = multer.diskStorage({
  destination:'./assets/uploads', //directory (folder) setting
  filename:(req, file, cb)=>{
      cb(null, Date.now()+file.originalname) // file name setting
  }
})

//Upload Setting
let upload = multer({
 storage: storage,
 fileFilter:(req, file, cb)=>{
  if(
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/gif'

  ){
      cb(null, true)
  }
  else{
      cb(null, false);
      cb(new Error('Only jpeg,  jpg , png, and gif Image allow'))
  }
 }
})
//-------------------------------image upload set up complete-------------------------

userSchema.plugin(passportLocalMongoose);


const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());




//loa home page
app.get("/", function(req, res){

  res.render("login");
});


app.all("/display",require("./controller/display"));
//loads login page when called
app.get("/login", function(req, res){
  res.render("login");
});



//loads signin page when called
app.get("/register", function(req, res){
  res.render("register");
});
app.get("/submit/diet/delete/",function(req,res){
  data.findOne({_id:req.query.id})
  .then((doc)=>{
    let data1 = require("./models/favdiet");
    data1.deleteOne({name:doc.name,tag:req.user.username})
    .then(() => {
      console.log('Element deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting element:', error);
    });
  })
  .catch((error) => {
    console.error('Error deleting element:', error);
  });
  data.deleteOne({ _id:req.query.id })
  .then(() => {
    console.log('Element deleted successfully');
  })
  .catch((error) => {
    console.error('Error deleting element:', error);
  });
  res.redirect("/submit");
});

app.get("/submit/add",function(req,res){
    
  res.render('add');
 });
app.post("/submit/add",upload.single('image'),function(req,res){
  console.log(req.file);
  data.create({
     tag:req.user.username,
     calorie:req.body.calorie,
     protein:req.body.protein,
     fat:req.body.fat,
     imag:req.file.filename,
     carbo :req.body.carbo,
     name: req.body.name
   } );
   res.redirect("/submit");
})
//------------------------------control swifter the statements used to give control to another files ,didnot touch---------------------------------------------
app.all("/exe_add",require("./controller/control_excerise"));
app.all("/exercise",require("./controller/excersie"));
app.all("/calorie",require("./controller/calorie_tracker"));
app.all("/caloriediet",require("./controller/diet_add"));
app.all("/fav/remove",require('./controller/fav2'));
app.all("/addfav",require('./controller/fav1'));
app.all('/fav',require('./controller/fav'));
app.all('/submit',require('./controller/index'));
app.all("/caloriefav",require("./controller/fav_add"))
//---------------------------------------------------------------------------------------------------------------
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});
app.get("/home",function(req,res){
  res.render("home_static")
})
app.get("/profile",(res,req)=>{
  req.render('profile');
})
//------------------------------------------------------------------------------diet data that is given by use that can be deleted too if you want-------------------------------
const redata = require("./intialdata");


const data1 = require('./models/diet');






//------------------------------------------------------------------------------------------------------------------------------------------------------------

//add new user deatails  to server
app.post("/register", function(req, res){
let name = req.body.username;
  User.register({username: req.body.username}, req.body.password, function(err, user){
    if (err) {
      console.log(err);

      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, function(){
        //create a profile data for them that can be edited by him in next page
        profile.create({
          email:name,
          image:"profile.jpg",
          age:0,
          weight:0,
          height:0,
          name:"notSet",
          gender:"notset",
          bmi:0
        });
        redata.forEach( (i)=>{
          console.log(i);
          data1.create({
            tag:req.body.username,
            name:i.name,
            calorie: i.calories,
            carbo:i.carbo,
            fat :i.fat,
            protein: i.protein,
            imag:i.url
          })
        })
      
        res.redirect("/profile");
      });
      
    }
  });

});


//check user existed or not
app.post("/login", function(req, res){

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  req.login(user, function(err){
    if (err) {
      console.log(err);
      res.redirect("/register");//if the password is wrong it will redirect to sign up page
    } else {
      console.log("check 1");
      passport.authenticate("local")(req, res, function(){
        let b = require("./delete")
        b();
        console.log("check 2");
        res.redirect("/home");
    
      });
     
      
    }
  });

});

//------------------------------------------------------------------------------login page code ends here-----------------------------------------------------------------------
//-----------------------------------------------------------------------------profile page data intaking---------------------------------------------------------------------

function calculateBMI(weight, height) {
  var heightInMeters = height/100;
  var bmi = weight / (heightInMeters * heightInMeters);
  bmi = Math.round(bmi * 100) / 100;
  return bmi;
}

app.post("/profileedit",upload.single('image'),function(req,res){
  console.log(req.body);
 
  bmi = calculateBMI(req.body.weight,req.body.height);
  
  console.log(req.user.username);
const filter ={email:req.user.username}
const update={image:req.file.filename,
  age:req.body.age,
  weight:req.body.weight,
 height:req.body.height,
 name:req.body.name,
  gender:req.body.gender,
  bmi:bmi}
  profile.deleteOne({email:req.user.username})
  .then(() => {
    console.log('Object deleted successfully');
  })
  .catch((error) => {
    console.error('Error deleting object:', error);
  });
profile.create({
  email:req.user.username,
  image:update.image,
  age:update.age,
  weight:update.weight,
  height:update.height,
  name:update.name,
  gender:update.gender,
  bmi:update.bmi
})



  res.redirect("/submit");

});

//server is running on local host 3000
app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
module.exports = User;