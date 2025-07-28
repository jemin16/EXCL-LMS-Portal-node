const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  courses: Number,
  icon: String,
  color: String,
});

module.exports = mongoose.model("Category", categorySchema);
