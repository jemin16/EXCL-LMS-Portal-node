const OverviewSingleCourse = require('../models/overviewSingleCourse');

exports.createOverview = async (req, res) => {
    try {
        const newCourse = new OverviewSingleCourse(req.body);
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllOverviewCourses = async (req, res) => {
    try {
        const courses = await OverviewSingleCourse.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

