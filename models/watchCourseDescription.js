const mongoose = require("mongoose");

const watchCourseDescriptionSchema = new mongoose.Schema({
    titleOne: String,
    paragraphOne: String,
    paragraphTwo: String,
    titleTwo: String,
    notesOne: String,
    notesTwo: String,
    pointOne: String,
    pointTwo: String,
    pointThree: String,
    pointFour: String,
    pointFive: String,
    notesThree: String,
});

module.exports = mongoose.model("WatchCourseDescription", watchCourseDescriptionSchema);
