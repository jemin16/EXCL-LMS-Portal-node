const mongoose = require("mongoose");

const becomeInstructorCountSchema = new mongoose.Schema({
    image: String,
    count: String,
    title: String,
})

module.exports = mongoose.model("BecomeInstructorCount", becomeInstructorCountSchema);