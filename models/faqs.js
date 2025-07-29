const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    answer: String,
})

const faqsSchema = new mongoose.Schema({
    question: String,
    title: String,
    content: [contentSchema]
})

module.exports = mongoose.model("Faqs", faqsSchema);