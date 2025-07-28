const mongoose = require("mongoose");

const instructorDashboardCountSchema = new mongoose.Schema({
    value: String,
    label: String,
});

module.exports = mongoose.model("InstructorDashboardCount", instructorDashboardCountSchema);