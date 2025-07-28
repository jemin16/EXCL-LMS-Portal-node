const instrCourseDetailsValidator = require("../validators/instrCourseDetailsValidator");
const InstrCoursesDetails = require("../models/instrCoursesDetails");

exports.getInstrCoursesDetails = async (req, res) => {
    try {
        const instrCoursesDetails = await InstrCoursesDetails.find();
        res.status(200).json(instrCoursesDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createInstrCoursesDetails = async (req, res) => {
    try {
        const { error, value } = instrCourseDetailsValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const newInstrCoursesDetails = new InstrCoursesDetails({
            uploaded: value.uploaded,
            lastUpdated: value.lastUpdated,
            title: value.title,
            description: value.description,
            createdBy: value.createdBy,
            ratingCount: value.ratingCount,
            coursePrice: value.coursePrice,
            usdDollarRevenue: value.usdDollarRevenue,
        });
        await newInstrCoursesDetails.save();
        res.status(201).json({ success: true, data: newInstrCoursesDetails });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateInstrCoursesDetails = async (req, res) => {
    try {
        const updatedInstrCoursesDetails = await InstrCoursesDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ success: true, data: updatedInstrCoursesDetails });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}