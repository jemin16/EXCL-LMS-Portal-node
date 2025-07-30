const mongoose = require("mongoose");

const becomeInstrEnduguardSchema = new mongoose.Schema({
    text: String,
    description: String,
    icon: String
})

module.exports = mongoose.model("BecomeInstrEnduguard", becomeInstrEnduguardSchema);

