const mongoose = require("mongoose"); 

const TaskSchema = new mongoose.Schema({
    title:{
        type:String , 
        trim:true
    }, 
    description:{
        type:String , 
        trim:true
    }, 
    reward:{
        type:Number, 
        default:0,
    }  
})
module.exports = mongoose.model("Task", TaskSchema);