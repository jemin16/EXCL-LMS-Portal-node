const instructorDashboardBioModel = require("../models/instructorDashboardBio");

exports.getInstructorDashboardBio = async (req, res) => {
    try {
        const instructorDashboardBio = await instructorDashboardBioModel.find();
        res.json(instructorDashboardBio);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createInstructorDashboardBio = async (req, res) => {
    try {
        const newInstructorDashboardBio = new instructorDashboardBioModel({
            avtar: req.file ? req.file.path : null,
            name: req.body.name,
            email: req.body.email,
            steps: req.body.steps,
            complete: req.body.complete,
        })
        await newInstructorDashboardBio.save();
        res.status(201).json({ success: true, data: newInstructorDashboardBio });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateInstructorDashboardBio = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.avtar = req.file.path;
        }
        const updatedInstructorDashboardBio = await instructorDashboardBioModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedInstructorDashboardBio) {
            return res.status(404).json({ success: false, message: "Instructor Dashboard Bio not found" });
        }
        res.status(200).json({ success: true, data: updatedInstructorDashboardBio });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}