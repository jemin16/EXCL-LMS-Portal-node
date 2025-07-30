const instructorSettingsModel = require("../models/instructorSettings");

exports.getInstructorSettings = async (req, res) => {
    try {
        const instructorSettings = await instructorSettingsModel.find();
        res.status(200).json(instructorSettings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createInstructorSettings = async (req, res) => {
    try {
        const newInstructorSettings = new instructorSettingsModel({
            notification: req.body.notification,
        });
        await newInstructorSettings.save();
        res.status(201).json(newInstructorSettings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateInstructorSettings = async (req, res) => {
    try {
        const updatedInstructorSettings = await instructorSettingsModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedInstructorSettings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}