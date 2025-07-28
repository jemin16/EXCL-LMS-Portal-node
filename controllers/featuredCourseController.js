const FeaturedCourse = require("../models/homeFeaturedCourse");

exports.getFeaturedCourses = async (req, res) => {
    try {
        const featuredCourses = await FeaturedCourse.find();
        res.json(featuredCourses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createFeaturedCourse = async (req, res) => {
    try {
        const {
            category, title, price, originalPrice, author,
            rating, reviews, students, level, duration, bgColor
        } = req.body;

        const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

        const course = new FeaturedCourse({
            category,
            title,
            price,
            originalPrice,
            author,
            rating,
            reviews,
            students,
            level,
            duration,
            image: imagePath,
            bgColor
        });

        await course.save();
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
