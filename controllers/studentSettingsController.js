const studentSettings = require("../models/studentSettings");

exports.getStudentSettings = async (req, res) => {
    try {
        const settings = await studentSettings.find();
        res.json(settings);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createStudentSettings = async (req, res) => {
    try {
        const newSettings = new studentSettings({
            title: req.body.title,
            image: req.file ? req.file.path : null,
        })
        await newSettings.save();
        res.status(201).json({ success: true, data: newSettings });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateStudentSettings = async (req, res) => {
    const { id } = req.params;
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = req.file.path;
        }
        const updateSettings = await studentSettings.findByIdAndUpdate(id, updateData, { new: true });
        if (!updateSettings) {
            return res.status(404).json({ success: false, message: "Settings not found" });
        }
        res.status(200).json({ success: true, data: updateSettings });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}