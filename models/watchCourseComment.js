const mongoose = require("mongoose");

const replySchema = new mongoose.Schema({
    replyImage: String,
    replyName: String,
    replyTime: String,
    replyComment: String,
});

const watchCourseCommentSchema = new mongoose.Schema({
    image: String,
    name: String,
    time: String,
    comment: String,
    reply: [replySchema],
});

module.exports = mongoose.model("WatchCourseComments", watchCourseCommentSchema);
