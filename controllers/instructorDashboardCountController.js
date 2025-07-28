const instructorDashboardCountModel = require("../models/instrctorDashboardCount");

exports.getInstructorDashboardCount = async (req, res) => {
    try {
        const instructorDashboardCount = await instructorDashboardCountModel.find();
        res.json(instructorDashboardCount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createInstructorDashboardCount = async (req, res) => {
    try {
        const newInstructorDashboardCount = new instructorDashboardCountModel({
            value: req.body.value,
            label: req.body.label,
        })
        await newInstructorDashboardCount.save();
        res.status(201).json({ success: true, data: newInstructorDashboardCount });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.updateInstructorDashboardCount = async (req, res) => {
    try {
        const updateInstructorDashboardCount = await instructorDashboardCountModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateInstructorDashboardCount) {
            return res.status(404).json({ success: false, message: "Instructor Dashboard Count not found" });
        }
        res.status(200).json({ success: true, data: updateInstructorDashboardCount });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
