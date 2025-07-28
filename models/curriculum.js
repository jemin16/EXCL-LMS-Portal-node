const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
    name: String,
    duration: String,
});

const curriculumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    lectures: [lectureSchema],
    lectureCount: Number,
    totalTime: String,
}, { timestamps: true });

module.exports = mongoose.model("Curriculum", curriculumSchema);
