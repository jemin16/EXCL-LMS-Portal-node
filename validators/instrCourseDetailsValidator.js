const joi = require("joi");

const instrCourseDetailsValidator = joi.object({
    uploaded: joi.string().required(),
    lastUpdated: joi.string().required(),
    title: joi.string().required(),
    description: joi.string().required(),
    createdBy: joi.string().required(),
    ratingCount: joi.string().required(),
    coursePrice: joi.string().required(),
    usdDollarRevenue: joi.string().required(),
});

module.exports = instrCourseDetailsValidator;
