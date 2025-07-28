const mongoose = require("mongoose");

const watchCourseTopbarSchema = new mongoose.Schema({
    courseName: String,
    sections: String,
    lectures: String,
    duration: String,
    btnOne: String,
    btnTwo: String,
});

module.exports = mongoose.model("WatchCourseTopbar", watchCourseTopbarSchema);
