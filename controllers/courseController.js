const Course = require("../models/homeCourse");

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createCourse = async (req, res) => {
    try {
        const { category, price, title, rating, students } = req.body;
        const image = req.file.filename;

        const newCourse = new Course({
            category,
            price,
            title,
            rating,
            students,
            image,
            isBestSelling,
        });

        await newCourse.save();
        res.status(201).json({ success: true, data: newCourse });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
