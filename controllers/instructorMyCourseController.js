const instructorMyCourseModel = require("../models/instructorMyCourse");

exports.getInstructorMyCourse = async (req, res) => {
    try {
        const instructorMyCourse = await instructorMyCourseModel.find();
        res.status(200).json(instructorMyCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createInstructorMyCourse = async (req, res) => {
    try {
        const { category, price, oldprice, title, rating, students } = req.body;
        const image = req.file ? req.file.filename : null;

        const newInstructorMyCourse = new instructorMyCourseModel({
            image,
            category,
            price,
            oldprice,
            title,
            rating,
            students
        })
        await newInstructorMyCourse.save();
        res.status(201).json({ success: true, data: newInstructorMyCourse });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateInstuctorMyCourse = async (req, res) => {
    try {
        const { category, price, oldprice, title, rating, students } = req.body;
        const image = req.file ? req.file.filename : null;
        
        // Create update object with all fields
        const updateData = { category, price, oldprice, title, rating, students };
        
        // Only update image if a new one is provided
        if (image) {
            updateData.image = image;
        }
        
        const updateInstuctorMyCourse = await instructorMyCourseModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updateInstuctorMyCourse) {
            return res.status(404).json({ success: false, message: "Instuctor My Course not found" });
        }
        res.status(200).json({ success: true, data: updateInstuctorMyCourse });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteInstuctorMyCourse = async (req, res) => {
    try {
        const deletedInstructorMyCourse = await instructorMyCourseModel.findByIdAndDelete(req.params.id);
        if (!deletedInstructorMyCourse) {
            return res.status(404).json({ success: false, message: "Instuctor My Course not found" });
        }
        res.status(200).json({ success: true, data: deletedInstructorMyCourse });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}