const mongoose = require("mongoose");

const pointsSchema = new mongoose.Schema({
    point: String
})

const careerInformationSchema = new mongoose.Schema({
    title: String,
    paragraph: String,
    pointsTitle: String,
    points: [pointsSchema],
});

module.exports = mongoose.model("CareerInformation", careerInformationSchema);