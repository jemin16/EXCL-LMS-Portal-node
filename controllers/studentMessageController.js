const studentMessage = require("../models/studentMessage");

exports.getMessages = async (req, res) => {
    try {
        const messages = await studentMessage.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createMessage = async (req, res) => {
    try {
        const newMessage = new studentMessage({
            image: req.file ? req.file.path : null,
            name: req.body.name,
            message: req.body.message,
            time: req.body.time,
            online: req.body.online,
        })
        await newMessage.save();
        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateMessage = async (req, res) => {
    const { id } = req.params;
    try {
        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = req.file.path;
        }
        const updateMessage = await studentMessage.findByIdAndUpdate(id, updateData, { new: true });
        if (!updateMessage) {
            return res.status(404).json({ success: false, message: "Message not found" });
        }
        res.status(200).json({ success: true, data: updateMessage });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}