const faqsModel = require("../models/faqs");

exports.getFaqs = async (req, res) => {
    try {
        const faqs = await faqsModel.find();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createFaqs = async (req, res) => {
    try {
        const { question, title, content } = req.body;
        const newFaqs = new faqsModel({
            question,
            title,
            content
        })
        await newFaqs.save();
        res.status(201).json({ success: true, data: newFaqs });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateFaqs = async (req, res) => {
    try {
        const updatedFaqs = await faqsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFaqs) {
            return res.status(404).json({ success: false, message: "Faqs not found" });
        }
        res.status(200).json({ success: true, data: updatedFaqs });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteFaqs = async (req, res) => {
    try {
        const deletedFaqs = await faqsModel.findByIdAndDelete(req.params.id);
        if (!deletedFaqs) {
            return res.status(404).json({ success: false, message: "Faqs not found" });
        }
        res.status(200).json({ success: true, data: deletedFaqs });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}