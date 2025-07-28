const studentChatMessage = require("../models/studentChatMessage");

exports.getChatMessages = async (req, res) => {
    try {
        const messages = await studentChatMessage.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createChatMessage = async (req, res) => {
    try {
        const newMessage = new studentChatMessage({
            from: req.body.from,
            text: req.body.text,
        })
        await newMessage.save();
        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}