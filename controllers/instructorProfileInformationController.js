const instructorProfileInformationModel = require("../models/instructorProfileInformation");

exports.getInstructorProfileInformation = async (req, res) => {
    try {
        const instructorProfileInformation = await instructorProfileInformationModel.find();
        res.json(instructorProfileInformation);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

exports.createInstructorProfileInformation = async (req, res) => {
    try {
        const newInstructorProfileInformation = new instructorProfileInformationModel({
            image: req.file ? req.file.path : null,
            name: req.body.name,
            badge: req.body.badge,
            description: req.body.description,
            rating: req.body.rating,
            reviewCount: req.body.reviewCount,
            students: req.body.students,
            courses: req.body.courses,
            personalLink: req.body.personalLink,
        })
        await newInstructorProfileInformation.save();
        res.status(201).json({ success: true, data: newInstructorProfileInformation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

exports.updateInstructorProfileInformation = async (req, res) => {
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = req.file.path;
        }
        const updatedInstructorProfileInformation = await instructorProfileInformationModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedInstructorProfileInformation) {
            return res.status(404).json({ success: false, message: "Instructor Profile Information not found" });
        }
        res.status(200).json({ success: true, data: updatedInstructorProfileInformation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}