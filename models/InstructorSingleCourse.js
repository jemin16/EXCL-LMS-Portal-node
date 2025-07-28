const mongoose = require("mongoose");

const InstructorSingleCourseSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    rating: String,
    students: String,
    courses: String,
    message: String,
});

module.exports = mongoose.model("CourseInstructorSingleCourse", InstructorSingleCourseSchema);
