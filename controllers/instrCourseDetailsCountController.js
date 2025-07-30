const instrCourseDetailsCountModel = require("../models/instrCourseDetailsCount");

exports.getInstrCourseDetailsCount = async (req, res) => {
    try {
        const instrCourseDetailsCount = await instrCourseDetailsCountModel.find();
        res.json(instrCourseDetailsCount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createInstrCourseDetailsCount = async (req, res) => {
    try {
        const newInstrCourseDetailsCount = new instrCourseDetailsCountModel({
            count: req.body.count,
            title: req.body.title,
        })
        await newInstrCourseDetailsCount.save();
        res.status(201).json({ success: true, data: newInstrCourseDetailsCount });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateInstrCourseDetailsCount = async (req, res) => {
    try {
        const updatedInstrCourseDetailsCount = await instrCourseDetailsCountModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedInstrCourseDetailsCount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
