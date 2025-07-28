const Content = require("../models/watchCourseContents");

exports.addContent = async (req, res) => {
    try {
        const newContent = new Content(req.body);
        await newContent.save();
        res.status(201).json({ message: "Content added", data: newContent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getContents = async (req, res) => {
    try {
        const contents = await Content.find();
        res.status(200).json(contents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
