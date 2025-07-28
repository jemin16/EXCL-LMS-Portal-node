const mongoose = require("mongoose");

const giftCourseSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    method: String,
    image: String,
    cardNumber: String,
    expiry: String,
    cardName: String,
});

module.exports = mongoose.model("GiftCourse", giftCourseSchema);
