const a = require("./models/calorie_intake");
const b = require("./models/intake_List")
const c = require("./index");

const data = require("./date")();
const deleter = function(){
    c.find({})
    .then((doc)=>{
         doc.forEach(element => {
            a.countDocuments({tag:element.username, date:data})
  .then(count => {
    if(count == 0){
        a.create({
         tag:element.username,
         date:c,
         calorie:0
        })
    }
  })
  .catch(err => {
    console.error('Error:',err);
         });
         });
        })
  .catch(err=>{
    console.log(err);
  })
    a.deleteMany({date :{$ne:data}})
    .then(()=>{
        console.log("deleteted suffully");
    })
    .catch((err)=>{
        console.log("err");
    })
    b.deleteMany({date:{$ne:data}})
    .then(()=>{
        console.log("deleted successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports = deleter;