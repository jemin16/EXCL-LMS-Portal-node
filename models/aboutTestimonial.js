const mongoose = require("mongoose");

const aboutTestimonialSchema = new mongoose.Schema({
    paragraph: String,
    name: String,
    position: String,
    company: String,
})

module.exports = mongoose.model("AboutTestimonial", aboutTestimonialSchema);