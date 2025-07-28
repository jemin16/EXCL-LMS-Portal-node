const mongoose = require("mongoose");

const studentCourseSchema = new mongoose.Schema({
    image: String,
    title: String,
    subtitle: String,
    showButton: Boolean,
    completed: String,
})

module.exports = mongoose.model("studentCourse", studentCourseSchema);