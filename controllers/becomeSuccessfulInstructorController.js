const becomeSuccessfulInstructorModel = require("../models/becomeSuccessfulInstructor");

exports.getBecomeSuccessfulInstructor = async (req, res) => {
    try {
        const becomeSuccessfulInstructor = await becomeSuccessfulInstructorModel.find();
        res.status(200).json(becomeSuccessfulInstructor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createBecomeSuccessfulInstructor = async (req, res) => {
    try {
        const newBecomeSuccessfulInstructor = new becomeSuccessfulInstructorModel({
            icon: req.file ? req.file.path : null,
            title: req.body.title,
            description: req.body.description,
            bgColor: req.body.bgColor,
        })
        await newBecomeSuccessfulInstructor.save();
        res.status(201).json({ success: true, data: newBecomeSuccessfulInstructor });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateBecomeSuccessfulInstructor = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.icon = req.file.path;
        }
        const updateBecomeSuccessfulInstructor = await becomeSuccessfulInstructorModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updateBecomeSuccessfulInstructor) {
            return res.status(404).json({ success: false, message: "Become Successful Instructor not found" });
        }
        res.status(200).json({ success: true, data: updateBecomeSuccessfulInstructor });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}