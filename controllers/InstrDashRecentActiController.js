const instructorDashRecentActiModel = require("../models/instructorDashRecentActi");

exports.getInstructorDashRecentActi = async (req, res) => {
    try {
        const instructorDashRecentActi = await instructorDashRecentActiModel.find();
        res.status(200).json(instructorDashRecentActi);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createInstructorDashRecentActi = async (req, res) => {
    try {
        const { name, firstLine, secondLine, thirdLine, fourthLine, time } = req.body;
        const newInstructorDashRecentActi = new instructorDashRecentActiModel({
            name,
            firstLine,
            secondLine,
            thirdLine,
            fourthLine,
            time
        })
        await newInstructorDashRecentActi.save();
        res.status(201).json({ success: true, data: newInstructorDashRecentActi });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}