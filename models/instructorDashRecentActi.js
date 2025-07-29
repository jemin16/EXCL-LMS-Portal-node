const mongoose = require("mongoose");

const instructorDashRecentActiSchema = new mongoose.Schema({
    name: String,
    firstLine: String,
    secondLine: String,
    thirdLine: String,
    fourthLine: String,
    time: String
})

module.exports = mongoose.model("InstructorDashRecentActi", instructorDashRecentActiSchema);