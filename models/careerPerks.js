const mongoose = require("mongoose");

const careerPerkSchema = new mongoose.Schema({
    bgColor: String,
    perk: String
})

module.exports = mongoose.model("CareerPerk", careerPerkSchema);