const mongoose = require("mongoose");

const contactBranchSchema = new mongoose.Schema({
    image: String,
    branchName: String,
    city: String,
    address: String,
})

module.exports = mongoose.model("contactBranch", contactBranchSchema);