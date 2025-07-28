const mongoose = require("mongoose");

const studentMessageSchema = new mongoose.Schema({
    image: String,
    name: String,
    message: String,
    time: String,
    online: Boolean,
});

module.exports = mongoose.model("studentMessage", studentMessageSchema);