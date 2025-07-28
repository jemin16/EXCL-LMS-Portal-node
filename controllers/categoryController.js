const Category = require("../models/homeCategories");

exports.getCategories = async (req, res) => {
    try {
        const data = await Category.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const newCategory = new Category({
            name: req.body.name,
            courses: req.body.courses,
            icon: req.file ? req.file.filename : null,
            color: req.body.color,
        });
        await newCategory.save();
        res.status(201).json({ success: true, data: newCategory });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

