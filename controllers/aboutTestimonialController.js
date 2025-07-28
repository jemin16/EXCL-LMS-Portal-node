const aboutTestimonialModel = require("../models/aboutTestimonial");

exports.getTestimonial = async (req, res) => {
    try {
        const testimonial = await aboutTestimonialModel.find();
        res.status(200).json(testimonial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createTestimonial = async (req, res) => {
    try {
        const newTestimonial = new aboutTestimonialModel({
            paragraph: req.body.paragraph,
            name: req.body.name,
            position: req.body.position,
            company: req.body.company,
        })
        await newTestimonial.save();
        res.status(201).json({ success: true, data: newTestimonial });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateTestimonial = async (req, res) => {
    try {
        const updatedTestimonial = await aboutTestimonialModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTestimonial) {
            return res.status(404).json({ success: false, message: "Testimonial not found" });
        }
        res.status(200).json({ success: true, data: updatedTestimonial });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteTestimonial = async (req, res) => {
    try {
        const deleteTestimonial = await aboutTestimonialModel.findByIdAndDelete(req.params.id);
        if (!deleteTestimonial) {
            return res.status(404).json({ success: false, message: "Testimonial not found" });
        }
        res.status(200).json({ success: true, data: deleteTestimonial });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}