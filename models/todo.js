const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
        minlength: 2, 
        maxlength: 30
    },
    date: {
        type: Date, 
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = new mongoose.model("Todo", todoSchema);