const studentPurchaseHistory = require("../models/studentPurchaseHistory");

exports.getPurchaseHistory = async (req, res) => {
    try {
        const history = await studentPurchaseHistory.find();
        res.json(history);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createPurchaseHistory = async (req, res) => {
    try {
        const { date, courses, total, method, detailsData, detailData } = req.body;
        const images = req.files?.images || [];

        let parsedDetailsData = undefined;

        if (detailsData) {
            if (typeof detailsData === "string") {
                try {
                    parsedDetailsData = JSON.parse(detailsData);
                } catch (err) {
                    return res.status(400).json({ success: false, error: "Invalid JSON in detailsData" });
                }
            } else if (Array.isArray(detailsData)) {
                parsedDetailsData = detailsData;
            }
        } else if (detailData) {
            if (typeof detailData === "string") {
                try {
                    parsedDetailsData = [JSON.parse(detailData)];
                } catch (err) {
                    return res.status(400).json({ success: false, error: "Invalid JSON in detailData" });
                }
            } else if (typeof detailData === 'object') {
                parsedDetailsData = [detailData];
            }
        } else {
            return res.status(400).json({ success: false, error: "Either detailsData (array) or detailData (object) must be provided." });
        }

        const updatedDetailsData = parsedDetailsData.map(detail => {
            let coursesArr = detail.courses;
            if (coursesArr) {
                if (typeof coursesArr === "string") {
                    try {
                        coursesArr = JSON.parse(coursesArr);
                    } catch (err) {
                        coursesArr = [];
                    }
                }
                const updatedCourses = coursesArr.map((course, idx) => ({
                    ...course,
                    image: images[idx] ? images[idx].path : course.image || ""
                }));
                return {
                    ...detail,
                    courses: updatedCourses
                };
            } else {
                return detail;
            }
        });

        const newPurchase = new studentPurchaseHistory({
            date,
            courses,
            total,
            method,
            detailsData: updatedDetailsData
        });

        await newPurchase.save();
        res.status(201).json({ success: true, data: newPurchase });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updatePurchaseHistory = async (req, res) => {
    const { id } = req.params;
    try {
        const updateData = { ...req.body };
        if (req.files && req.files.images) {
            const images = req.files.images;
            const updatedDetailsData = updateData.detailsData.map(detail => {
                let coursesArr = detail.courses;
                if (coursesArr) {
                    const updatedCourses = coursesArr.map((course, idx) => ({
                        ...course,
                        image: images[idx] ? images[idx].path : course.image || ""
                    }));
                    return {
                        ...detail,
                        courses: updatedCourses
                    };
                } else {
                    return detail;
                }
            });
            updateData.detailsData = updatedDetailsData;
        }
        const updated = await studentPurchaseHistory.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) {
            return res.status(404).json({ success: false, message: "Purchase history not found" });
        }
        res.status(200).json({ success: true, data: updated });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}