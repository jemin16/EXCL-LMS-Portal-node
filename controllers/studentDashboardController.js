const studentDashboard = require("../models/studentDashboard");

exports.getDashboard = async (req, res) => {
    try {
        const dashboardData = await studentDashboard.find();
        res.json(dashboardData);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.createDashboardItem = async (req, res) => {
    const { icon, count, label, bgColor } = req.body;
    try {
        const newDashboardItem = new studentDashboard({
            icon,
            count,
            label,
            bgColor,
            image: req.file ? req.file.path : null,
            title: req.body.title,
            subtitle: req.body.subtitle,
            isShowButton: req.body.isShowButton,
            completed: req.body.completed,
        })
        await newDashboardItem.save();
        res.status(201).json({ success: true, data: newDashboardItem });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateDashboardItem = async (req, res) => {
    const { id } = req.params;
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = req.file.path;
        }
        const updatedItem = await studentDashboard.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ success: false, message: "Item not found" });
        }
        res.status(200).json({ success: true, data: updatedItem });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}