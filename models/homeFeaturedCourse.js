const mongoose = require("mongoose");

const featuredCourseSchema = new mongoose.Schema({
    category: String,
    title: String,
    price: String,
    originalPrice: String,
    author: String,
    rating: String,
    reviews: String,
    students: String,
    level: String,
    duration: String,
    image: String,
    bgColor: String,
}, { timestamps: true });

module.exports = mongoose.model("featuredCourse", featuredCourseSchema);
