const mongoose = require("mongoose");

const careerAllPositionSchema = new mongoose.Schema({
    courseName: String,
    location: String,
    time: String,
    vacancy: String,
    deadline: String,
})

module.exports = mongoose.model("CareerAllPosition", careerAllPositionSchema);