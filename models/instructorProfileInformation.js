const mongoose = require("mongoose");

const instructorProfileInformationSchema = new mongoose.Schema({
    image: String,
    name: String,
    badge: String,
    description: String,
    rating: String,
    reviewCount: String,
    students: String,
    courses: String,
    personalLink: String,
});

module.exports = mongoose.model("instructorProfileInformation", instructorProfileInformationSchema);