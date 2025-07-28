const mongoose = require("mongoose");

const instrEarningSchema = new mongoose.Schema({
    date: String,
    amt: String,
    bank: String,
    status: String
})

module.exports = mongoose.model("InstrEarning", instrEarningSchema);