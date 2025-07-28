const mongoose = require("mongoose");

const aboutGrowingCompaniesSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    image: String
})

module.exports = mongoose.model("AboutGrowingCompanies", aboutGrowingCompaniesSchema);