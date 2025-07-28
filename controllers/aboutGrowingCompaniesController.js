const aboutGrowingCompaniesModel = require("../models/aboutGrowingCompanies");

exports.getGrowingCompanies = async (req, res) => {
    try {
        const growingCompanies = await aboutGrowingCompaniesModel.find();
        res.status(200).json(growingCompanies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createGrowingCompanies = async (req, res) => {
    try {
        const newGrowingCompanies = new aboutGrowingCompaniesModel({
            image: req.file ? req.file.path : null,
            title: req.body.title,
            subTitle: req.body.subTitle,
        })
        await newGrowingCompanies.save();
        res.status(201).json({ success: true, data: newGrowingCompanies });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}