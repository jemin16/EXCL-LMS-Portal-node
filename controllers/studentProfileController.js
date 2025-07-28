const Student = require("../models/studentProfile");

// Create user
exports.createStudent = async (req, res) => {
    try {
        const { name, bio } = req.body;
        const profileImage = req.file ? req.file.filename : null;

        const student = await Student.create({
            name,
            bio,
            profileImage,
        });

        res.status(201).json({ success: true, student });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Get user
exports.getStudent = async (req, res) => {
    try {
        const student = await Student.find();
        res.json(student);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
