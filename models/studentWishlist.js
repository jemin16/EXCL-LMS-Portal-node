const mongoose = require("mongoose");

const studentWishlistSchema = new mongoose.Schema({
    image: String,
    rating: String,
    reviews: String,
    title: String,
    authors: [String],
    price: String,
    oldPrice: String,
});

module.exports = mongoose.model("studentWishlist", studentWishlistSchema);