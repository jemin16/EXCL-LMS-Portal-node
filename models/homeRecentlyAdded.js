const mongoose = require("mongoose");

const recentlyAddedCourseSchema = new mongoose.Schema({
    image: String,
    category: String,
    categoryColor: String,
    title: String,
    price: String,
    rating: String,
    subscribe: String,
    students: String,
    instructor: String,
    duration: String,
    level: String,
    discountPrice: String,
    originalPrice: String,
    learn: [String],
});

module.exports = mongoose.model("RecentlyAddedCourse", recentlyAddedCourseSchema);
