const popularToolModel = require('../models/popularToolModel');

exports.getPopularTools = async (req, res) => {
    try {
        const popularTools = await popularToolModel.find();
        res.json(popularTools);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createPopularTool = async (req, res) => {
    const { name, courses } = req.body;
    const popularTool = new popularToolModel({
        name,
        courses
    });

    try {
        const newPopularTool = await popularTool.save();
        res.status(201).json(newPopularTool);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


