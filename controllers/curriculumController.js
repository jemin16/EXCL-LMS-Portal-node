const Curriculum = require("../models/curriculum");

exports.addCurriculum = async (req, res) => {
    try {
        const newCurriculum = new Curriculum(req.body);
        await newCurriculum.save();
        res.status(201).json({ message: "Curriculum added", data: newCurriculum });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getCurriculums = async (req, res) => {
    try {
        const curriculums = await Curriculum.find();
        res.status(200).json(curriculums);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
