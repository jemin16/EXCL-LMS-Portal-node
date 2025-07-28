const mongoose = require('mongoose');

const popularToolSchema = new mongoose.Schema({
    name: String,
    courses: String
});

module.exports = mongoose.model('PopularTool', popularToolSchema);