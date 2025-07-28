const mongoose = require("mongoose");

const studentSettings = new mongoose.Schema({
    title: String,
    image: String,
});

module.exports = mongoose.model("StudentSettings", studentSettings);