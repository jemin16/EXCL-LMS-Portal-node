const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
    image: String, // store image filename or URL
    name: String,
    course: String,
    rating: String,
    students: String,
    isTopInstructor: {
        type: Boolean,
        default: false
    },
    isPopularInstructor: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Instructor", instructorSchema);
