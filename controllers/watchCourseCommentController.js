const watchCourse = require("../models/watchCourseComment");

exports.getWatchCourse = async (req, res) => {
    try {
        const course = await watchCourse.find();
        res.json(course);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.createWatchCourse = async (req, res) => {
    try {
        const { name, time, comment } = req.body;

        const imagePath = req.files?.image?.[0]?.path || "";

        const replies = [];


        const totalReplies = req.body.replyName instanceof Array
            ? req.body.replyName.length
            : req.body.replyName ? 1 : 0;

        for (let i = 0; i < totalReplies; i++) {
            replies.push({
                replyImage: req.files.replyImage?.[i]?.path?.replace(/\\/g, "/") || "",
                replyName: Array.isArray(req.body.replyName) ? req.body.replyName[i] : req.body.replyName,
                replyTime: Array.isArray(req.body.replyTime) ? req.body.replyTime[i] : req.body.replyTime,
                replyComment: Array.isArray(req.body.replyComment) ? req.body.replyComment[i] : req.body.replyComment
            });
        }

        const newComment = new watchCourse({
            image: imagePath.replace(/\\/g, "/"),
            name,
            time,
            comment,
            reply: replies
        });

        const saved = await newComment.save();
        res.status(201).json({ success: true, data: saved });

    } catch (error) {
        console.error("Error creating watch course comment:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};
