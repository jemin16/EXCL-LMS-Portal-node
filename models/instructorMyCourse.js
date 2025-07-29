const mongoose = require("mongoose");

const instructorMyCourseSchema = new mongoose.Schema({
    image: String,
    category: String,
    price: String,
    oldprice: String,
    title: String,
    rating: String,
    students: String
});

module.exports = mongoose.model("InstructorMyCourse", instructorMyCourseSchema);