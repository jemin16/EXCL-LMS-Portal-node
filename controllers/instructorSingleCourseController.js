const InstructorSingleCourse = require("../models/InstructorSingleCourse");

exports.createInstructorSingleCourse = async (req, res) => {
    try {
        const newCourse = new InstructorSingleCourse({
            image: req.file ? req.file.filename : null,
            name: req.body.name,
            description: req.body.description,
            rating: req.body.rating,
            students: req.body.students,
            courses: req.body.courses,
            message: req.body.message,
        });
        await newCourse.save();
        res.status(201).json({ message: "Course created", data: newCourse });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getInstructorSingleCourse = async (req, res) => {
    try {
        const course = await InstructorSingleCourse.find();
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
