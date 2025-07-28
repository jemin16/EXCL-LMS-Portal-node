const RecentlyAddedCourse = require("../models/homeRecentlyAdded");

exports.getRecentlyAddedCourses = async (req, res) => {
    try {
        const courses = await RecentlyAddedCourse.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.createRecentlyAddedCourse = async (req, res) => {
    try {
        const {
            category,
            categoryColor,
            title,
            price,
            rating,
            subscribe,
            students,
            instructor,
            duration,
            level,
            discountPrice,
            originalPrice,
            learn,
        } = req.body;

        const course = new RecentlyAddedCourse({
            image: req.file ? `/uploads/recentlyAddedCourse/${req.file.filename}` : "",
            category,
            categoryColor,
            title,
            price,
            rating,
            subscribe,
            students,
            instructor,
            duration,
            level,
            discountPrice,
            originalPrice,
            learn: JSON.parse(learn),
        });

        await course.save();
        res.status(201).json({ success: true, course });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.updateRecentlyAddedCourseImage = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.file) {
            return res.status(400).json({ message: "No image file uploaded" });
        }

        const updated = await RecentlyAddedCourse.findByIdAndUpdate(
            id,
            { image: `/uploads/recentlyAddedCourse/${req.file.filename}` },
            { new: true }
        );

        res.json({
            message: "Image uploaded successfully",
            course: updated,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
