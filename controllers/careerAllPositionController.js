const careerAllPositionModel = require("../models/careerAllPosition");

exports.getCareerAllPosition = async (req, res) => {
    try {
        const careerAllPosition = await careerAllPositionModel.find();
        res.status(200).json(careerAllPosition);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createCareerAllPosition = async (req, res) => {
    try {
        const newCareerAllPosition = new careerAllPositionModel({
            courseName: req.body.courseName,
            location: req.body.location,
            time: req.body.time,
            vacancy: req.body.vacancy,
            deadline: req.body.deadline,
        })
        await newCareerAllPosition.save();
        res.status(201).json({ success: true, data: newCareerAllPosition });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateCareerAllPosition = async (req, res) => {
    try {
        const updateCareerAllPosition = await careerAllPositionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateCareerAllPosition) {
            res.status(404).json({ success: false, message: "Career All Position Not Found" });
        }
        res.status(200).json({ success: true, data: updateCareerAllPosition });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteCareerAllPosition = async (req, res) => {
    try {
        const deleteCareerAllPosition = await careerAllPositionModel.findByIdAndDelete(req.params.id);
        if (!deleteCareerAllPosition) {
            res.status(404).json({ success: false, message: "Career All Position Not Found" });
        }
        res.status(200).json({ success: true, data: deleteCareerAllPosition });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}