const instrEarningModel = require("../models/instrEarning");
const instrEarningValidator = require("../validators/instrEarningValidator");

exports.getInstrEarnings = async (req, res) => {
    try {
        const earnings = await instrEarningModel.find();
        res.json(earnings);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createInstrEarning = async (req, res) => {
    try {
        const { error, value } = instrEarningValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ success: false, error: error.details[0].message });
        }
        const newEarning = new instrEarningModel({
            date: value.date,
            amt: value.amt,
            bank: value.bank,
            status: value.status,
        })
        await newEarning.save();
        res.status(201).json({ success: true, data: newEarning });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateInstrEarning = async (req, res) => {
    try {
        const updatedEarning = await instrEarningModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEarning) {
            return res.status(404).json({ success: false, message: "Earning not found" });
        }
        res.status(200).json({ success: true, data: updatedEarning });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}