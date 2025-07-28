const mongoose = require("mongoose");

const studentProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    profileImage: { type: String },
    tabs: { type: [String], default: ["Dashboard", "Courses", "Teachers", "Message", "Wishlist", "Purchase History", "Settings"] },
});

module.exports = mongoose.model("StudentProfile", studentProfileSchema);
