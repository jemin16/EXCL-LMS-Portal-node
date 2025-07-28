const careerPerkModel = require("../models/careerPerks");

exports.getCareerPerks = async (req, res) => {
    try {
        const careerPerks = await careerPerkModel.find();
        res.status(200).json(careerPerks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createCareerPerk = async (req, res) => {
    try {
        const newCareerPerk = new careerPerkModel({
            bgColor: req.body.bgColor,
            perk: req.body.perk,
        })
        await newCareerPerk.save();
        res.status(200).json({ success: true, data: newCareerPerk })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

exports.updateCareerPerk = async (req, res) => {
    try {
        const updateCareerPerk = await careerPerkModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateCareerPerk) {
            res.status(404).json({ success: false, message: "Career Perk Not Found" });
        }
        res.status(200).json({ success: true, data: updateCareerPerk });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteCareerPerk = async (req, res) => {
    try {
        const deleteCareerPerk = await careerPerkModel.findByIdAndDelete(req.params.id);
        if (!deleteCareerPerk) {
            res.status(404).json({ success: false, message: "Career Perk Not Found" });
        }
        res.status(200).json({ success: true, data: deleteCareerPerk });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}