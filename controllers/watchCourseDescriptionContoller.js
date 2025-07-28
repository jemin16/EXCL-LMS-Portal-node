const watchCourse = require("../models/watchCourseDescription");

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
        const newCourse = new watchCourse({
            titleOne: req.body.titleOne,
            paragraphOne: req.body.paragraphOne,
            paragraphTwo: req.body.paragraphTwo,
            titleTwo: req.body.titleTwo,
            notesOne: req.body.notesOne,
            notesTwo: req.body.notesTwo,
            pointOne: req.body.pointOne,
            pointTwo: req.body.pointTwo,
            pointThree: req.body.pointThree,
            pointFour: req.body.pointFour,
            pointFive: req.body.pointFive,
            notesThree: req.body.notesThree,
        });
        await newCourse.save();
        res.status(201).json({ success: true, data: newCourse });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};