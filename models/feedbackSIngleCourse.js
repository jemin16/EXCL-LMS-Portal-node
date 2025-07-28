const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    image: String,
    name: String,
    time: String,
    text:String
});

module.exports = mongoose.model("Feedback", feedbackSchema)