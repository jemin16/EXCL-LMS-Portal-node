const careerTopDetailsModel = require("../models/careerDetails");

exports.getCareerTopDetails = async (req, res) => {
    try {
        const careerTopDetails = await careerTopDetailsModel.find();
        res.status(200).json(careerTopDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createCareerTopDetails = async (req, res) => {
    try {
        const newCareerTopDetails = new careerTopDetailsModel({
            addressOne: req.body.addressOne,
            addressTwo: req.body.addressTwo,
            contactOne: req.body.contactOne,
            contactTwo: req.body.contactTwo
        })
        await newCareerTopDetails.save();
        res.status(200).json({ success: true, data: newCareerTopDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateCareerTopDetails = async (req, res) => {
    try {
        const updateCareerTopDetails = await careerTopDetailsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateCareerTopDetails) {
            res.status(404).json({ success: false, message: "Career Top Details Not Found" });
        }
        res.status(200).json({ success: true, data: updateCareerTopDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteCareerTopDetails = async (req, res) => {
    try {
        const deleteCareerTopDetails = await careerTopDetailsModel.findByIdAndDelete(req.params.id);
        if (!deleteCareerTopDetails) {
            res.status(404).json({ success: false, message: "Career Top Details Not Found" });
        }
        res.status(200).json({ success: true, data: deleteCareerTopDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}
