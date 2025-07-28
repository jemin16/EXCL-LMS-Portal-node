const instructorModel = require("../models/instructorModel");

exports.getInstructors = async (req, res) => {
    try {
        const instructors = await instructorModel.find();
        res.json(instructors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createInstructor = async (req, res) => {
    const { name, course, rating, students, isTopInstructor, isPopularInstructor } = req.body;
    const image = req.file ? req.file.filename : null;

    const newInstructor = new instructorModel({
        image,
        name,
        course,
        rating,
        students,
        isTopInstructor: isTopInstructor === 'true',
        isPopularInstructor: isPopularInstructor === 'true' 
    })

    try {
        await newInstructor.save();
        res.status(201).json(newInstructor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
