const watchCourse = require("../models/watchCourseTopbar");

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
            courseName: req.body.courseName,
            sections: req.body.sections,
            lectures: req.body.lectures,
            duration: req.body.duration,
            btnOne: req.body.btnOne,
            btnTwo: req.body.btnTwo,
        });
        await newCourse.save();
        res.status(201).json({ success: true, data: newCourse });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};