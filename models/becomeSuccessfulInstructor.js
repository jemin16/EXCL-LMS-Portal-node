const mongoose = require("mongoose");

const becomeSuccessfulInstructorSchema = new mongoose.Schema({
    icon: String,
    title: String,
    description: String,
    bgColor: String,
})

module.exports = mongoose.model("BecomeSuccessfulInstructor", becomeSuccessfulInstructorSchema);