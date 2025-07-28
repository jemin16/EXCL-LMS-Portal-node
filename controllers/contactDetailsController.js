const contactDetailsModel = require("../models/contactDetails");

exports.getContactDetails = async (req, res) => {
    try {
        const contactDetails = await contactDetailsModel.find();
        res.status(200).json(contactDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createContactDetails = async (req, res) => {
    try {
        const newContactDetails = new contactDetailsModel({
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
        })
        await newContactDetails.save();
        res.status(200).json({ success: true, data: newContactDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateContactDetails = async (req, res) => {
    try {
        const updateContactDetails = await contactDetailsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateContactDetails) {
            res.status(404).json({ success: false, message: "Contact Details Not Found" });
        }
        res.status(200).json({ success: true, data: updateContactDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.deleteContactDetails = async (req, res) => {
    try {
        const deleteContactDetails = await contactDetailsModel.findByIdAndDelete(req.params.id);
        if (!deleteContactDetails) {
            res.status(404).json({ success: false, message: "Contact Details Not Found" });
        }
        res.status(200).json({ success: true, data: deleteContactDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}