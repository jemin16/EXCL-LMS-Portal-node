const giftCourse = require("../models/giftCourse");

exports.getGiftCourse = async (req, res) => {
    try {
        const course = await giftCourse.find();
        res.json(course);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

exports.createGiftCourse = async (req, res) => {
    try {
        const newCourse = new giftCourse({
            title: req.body.title,
            subtitle: req.body.subtitle,
            method: req.body.method,
            image: req.file ? req.file.filename : null,
            cardNumber: req.body.cardNumber,
            expiry: req.body.expiry,
            cardName: req.body.cardName
        });
        await newCourse.save();
        res.status(201).json({ success: true, data: newCourse });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};