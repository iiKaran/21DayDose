const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, trim: true },
    points: {
        type: Number,
        default:0,
    }
})


module.exports = mongoose.model('User', userSchema)