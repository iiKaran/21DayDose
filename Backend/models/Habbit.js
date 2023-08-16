const mongoose = require("mongoose");

const HabbitSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
    },
    description:{
        type: String,
        trim: true,
    },  
    url:{
        type:String, 
        trim:true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task' // Reference to another model if needed
    }],
    default: [],
})
function arrayMaxLength(val) {
    return val.length <= 21;
}
module.exports = mongoose.model("Habbit", HabbitSchema);