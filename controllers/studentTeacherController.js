const studentTeacher = require("../models/studentTeacher");

exports.getTeachers = async (req, res) => {
    try {
        const teachers = await studentTeacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createTeacher = async (req, res) => {
    const { image, name, course, rating, students } = req.body;
    try {
        const newTeacher = new studentTeacher({
            image: req.file ? req.file.path : null,
            name,
            course,
            rating,
            students,
        })
        await newTeacher.save();
        res.status(201).json({ success: true, data: newTeacher });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateTeacher = async (req, res) => {
    const { id } = req.params;
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = req.file.path;
        }
        const updatedTeacher = await studentTeacher.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTeacher) {
            return res.status(404).json({ success: false, message: "Teacher not found" });
        }
        res.status(200).json({ success: true, data: updatedTeacher });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
