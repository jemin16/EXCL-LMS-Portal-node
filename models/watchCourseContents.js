const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    name: String,
    time: String,
})

const watchCourseContentSchema = new mongoose.Schema({
    name: String,
    lectures: String,
    duration: String,
    complete: String,
    content: [contentSchema],
})

module.exports = mongoose.model("WatchCourseContents", watchCourseContentSchema);