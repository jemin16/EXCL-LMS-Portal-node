const careerInformationModel = require("../models/careerInformation");

exports.getCareerInformation = async (req, res) => {
    try {
        const careerInformation = await careerInformationModel.find();
        res.status(200).json(careerInformation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createCareerInformation = async (req, res) => {
    try {
        const newCareerInformation = new careerInformationModel({
            title: req.body.title,
            paragraph: req.body.paragraph,
            pointsTitle: req.body.pointsTitle,
            points: req.body.points || [],
        });
        await newCareerInformation.save();
        res.status(201).json({ success: true, data: newCareerInformation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateCareerInformation = async (req, res) => {
    try {
        const updateCareerInformation = await careerInformationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateCareerInformation) {
            res.status(404).json({ success: false, message: "Career Information Not Found" });
        }
        res.status(200).json({ success: true, data: updateCareerInformation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteCareerInformation = async (req, res) => {
    try {
        const deleteCareerInformation = await careerInformationModel.findByIdAndDelete(req.params.id);
        if (!deleteCareerInformation) {
            res.status(404).json({ success: false, message: "Career Information Not Found" });
        }
        res.status(200).json({ success: true, data: deleteCareerInformation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
