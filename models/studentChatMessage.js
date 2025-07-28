const mongoose = require("mongoose");

const studentChatMessageSchema = new mongoose.Schema({
    from: String,
    text: String,
});

module.exports = mongoose.model("studentChatMessage", studentChatMessageSchema);