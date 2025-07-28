const mongoose = require("mongoose");

const studentTeacherSchema = new mongoose.Schema({
    image: String,
    name: String,
    course: String,
    rating: String,
    students: String, 
})

module.exports = mongoose.model("studentTeacher", studentTeacherSchema);