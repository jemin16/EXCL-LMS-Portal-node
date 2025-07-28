const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    category: String,
    price: String,
    title: String,
    rating: String,
    students: String,
    image: String,
    isBestSelling: { type: Boolean, default: false }
});

module.exports = mongoose.model("Course", courseSchema);