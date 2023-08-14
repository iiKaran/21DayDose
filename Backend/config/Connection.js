const mongoose = require("mongoose"); 
const dbConnect = async()=>{
 try{
  const DB_URL = process.env.DB_URL;
  await mongoose.connect(DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
  console.log("connected to db")
 }
 catch(err){
  console.log(err);
  console.log("error while connecting to db")
  return ; 
 }
}
module.exports = dbConnect ;