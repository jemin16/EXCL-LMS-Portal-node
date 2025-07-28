const mongoose = require("mongoose");

const instructorDashboardBioSchema = new mongoose.Schema({
    avtar: String,
    name: String,
    email: String,
    steps: String,
    complete: String,
});

module.exports = mongoose.model("instructorDashboardBio", instructorDashboardBioSchema);