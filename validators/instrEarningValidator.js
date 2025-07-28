const Joi = require("joi");

const instrEarningValidator = Joi.object({
    date: Joi.string().required(),
    amt: Joi.string().required(),
    bank: Joi.string().required(),
    status: Joi.string().valid("pending", "completed", "cancelled").required(),
})

module.exports = instrEarningValidator;
