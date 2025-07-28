const mongoose = require("mongoose");

const careerTopDetailSchema = new mongoose.Schema({
    addressOne: String,
    addressTwo: String,
    contactOne: String,
    contactTwo: String
});

module.exports = mongoose.model("CareerTopDetail", careerTopDetailSchema);