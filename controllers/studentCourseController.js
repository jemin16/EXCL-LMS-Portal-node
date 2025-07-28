const studentCourse = require("../models/studentCourse");

exports.getCourses = async (req, res) => {
    try {
        const courses = await studentCourse.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createCourse = async (req, res) => {
    const { title, subtitle, showButton, completed } = req.body;
    try {
        const newCourse = new studentCourse({
            image: req.file ? req.file.path : null,
            title,
            subtitle,
            showButton,
            completed,
        })
        await newCourse.save();
        res.status(201).json({ success: true, data: newCourse });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = req.file.path;
        }
        const updatedCourse = await studentCourse.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }
        res.status(200).json({ success: true, data: updatedCourse });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
