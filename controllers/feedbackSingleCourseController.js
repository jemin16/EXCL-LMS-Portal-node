const feedbackSingleCourse = require("../models/feedbackSIngleCourse");

exports.getFeedbackSingleCourse = async (req, res) =>{
    try {
        const feedback = await feedbackSingleCourse.find();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ error: err.message});
    }
}

exports.createFeedbackSingleCourse = async (req, res) => {
    try {
        const newFeedback = new feedbackSingleCourse({
            image: req.file ? req.file.filename : null,
            name: req.body.name,
            time: req.body.time,
            text: req.body.text,
        });
        await newFeedback.save();
        res.status(201).json({ message: "feedback created", data: newFeedback });
    } catch (error) {
        res.status(500).json({ error: err.message});
    }
}