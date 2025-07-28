const mongoose = require('mongoose');

const overviewSingleCourseSchema = new mongoose.Schema({
    price: String,
    oldPrice: String,
    discount: String,
    daysLeft: String,
    courseDuration: String,
    courseLevel: String,
    studentEnrolled: String,
    language: String,
    subtitleLanguage: String,
    note: String,
    includeOne: String,
    includeTwo: String,
    includeThree: String,
    includeFour: String,
    includeFive: String,
    includeSix: String,
    includeSeven: String,

});

module.exports = mongoose.model('overviewSingleCourse', overviewSingleCourseSchema);