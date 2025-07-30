const becomeInstrEnduguardModel = require("../models/becomeInstrEnduguard");

exports.getEnduguard = async (req, res) => {
    try {
        const enduguard = await becomeInstrEnduguardModel.find();
        res.status(200).json(enduguard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createEnduguard = async (req, res) => {
    try {
        const newEnduguard = new becomeInstrEnduguardModel({
            text: req.body.text,
            description: req.body.description,
            icon: req.file ? req.file.path : null,
        })
        await newEnduguard.save();
        res.status(201).json({ success: true, data: newEnduguard });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateEnduguard = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.icon = req.file.path;
        }
        const updateEnduguard = await becomeInstrEnduguardModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updateEnduguard) {
            return res.status(404).json({ success: false, message: "Enduguard not found" });
        }
        res.status(200).json({ success: true, data: updateEnduguard });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
