const mongoose = require("mongoose");

const studentDashboardSchema = new mongoose.Schema({
    icon: String,
    count: String,
    label: String,
    bgColor: String,
    image: String,
    title: String,
    subtitle: String,
    isShowButton: Boolean,
    completed: String,
});

module.exports = mongoose.model("studentDashboard", studentDashboardSchema)