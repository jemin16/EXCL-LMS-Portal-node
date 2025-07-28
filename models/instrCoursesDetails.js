const mongoose = require("mongoose");

const instrCoursesDetailsSchema = new mongoose.Schema({
    uploaded: String,
    lastUpdated: String,
    title: String,
    description: String,
    createdBy: String,
    ratingCount: String,
    coursePrice: String,
    usdDollarRevenue: String,
})

module.exports = mongoose.model("InstrCoursesDetails", instrCoursesDetailsSchema);