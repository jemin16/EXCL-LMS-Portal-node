const becomeInstructorCountModel = require("../models/becomeInstructorCount");

exports.getBecomeInstructorCount = async (req, res) => {
    try {
        const becomeInstructorCount = await becomeInstructorCountModel.find();
        res.status(200).json(becomeInstructorCount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createBecomeInstructorCount = async (req, res) => {
    try {
        const newBecomeInstructorCount = new becomeInstructorCountModel({
            image: req.file ? req.file.path : null,
            count: req.body.count,
            title: req.body.title,
        })
        await newBecomeInstructorCount.save();
        res.status(201).json({ success: true, data: newBecomeInstructorCount });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateBecomeInstructorCount = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = req.file.path;
        }
        const updatedBecomeInstructorCount = await becomeInstructorCountModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedBecomeInstructorCount) {
            return res.status(404).json({ success: false, message: "Become Instructor Count not found" });
        }
        res.status(200).json({ success: true, data: updatedBecomeInstructorCount });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}