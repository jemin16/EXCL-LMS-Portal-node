const contactBranchModel = require("../models/contactBranches");

exports.getContactBranches = async (req, res) => {
    try {
        const contactBranches = await contactBranchModel.find();
        res.status(200).json(contactBranches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createContactBranch = async (req, res) => {
    try {
        const newContactBranch = new contactBranchModel({
            image: req.file ? req.file.path : null,
            branchName: req.body.branchName,
            city: req.body.city,
            address: req.body.address,
        })
        await newContactBranch.save();
        res.status(201).json({ success: true, data: newContactBranch });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateContactBranch = async (req, res) => {
    try {
        const updateContactBranch = await contactBranchModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateContactBranch) {
            return res.status(404).json({ success: false, message: "Contact Branch not found" });
        }
        res.status(200).json({ success: true, data: updateContactBranch });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteContactBranch = async (req, res) => {
    try {
        const deleteContactBranch = await contactBranchModel.findByIdAndDelete(req.params.id);
        if (!deleteContactBranch) {
            return res.status(404).json({ success: false, message: "Contact Branch not found" });
        }
        res.status(200).json({ success: true, data: deleteContactBranch });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}