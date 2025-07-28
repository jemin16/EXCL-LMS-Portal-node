const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
    image: String,
    title: String,
    rating: String,
    reviews: String,
    instructor: String,
    price: String,
});

const detailsSchema = new mongoose.Schema({
    date: String,
    user: String,
    card: String,
    total: String,
    courses: [coursesSchema],
});

const studentPurchaseHistorySchema = new mongoose.Schema({
    date: String,
    courses: String,
    total: String,
    method: String,
    detailsData: [detailsSchema],
});

module.exports = mongoose.model("studentPurchaseHistory", studentPurchaseHistorySchema)