const mongoose = require("mongoose");

const instructorSettingsSchema = new mongoose.Schema({
    notification: String
})

module.exports = mongoose.model("InstructorSettings", instructorSettingsSchema);