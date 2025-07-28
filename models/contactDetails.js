const mongoose = require("mongoose");

const contactDetailsSchema = new mongoose.Schema({
    address: String,
    phoneNumber: String,
    email: String
})

module.exports = mongoose.model("contactDetail", contactDetailsSchema);