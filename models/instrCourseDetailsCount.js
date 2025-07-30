const mongoose = require("mongoose");

const instrCourseDetailsCountSchema = new mongoose.Schema({
    count: String,
    title: String,
})

module.exports = mongoose.model("InstrCourseDetailsCount", instrCourseDetailsCountSchema);