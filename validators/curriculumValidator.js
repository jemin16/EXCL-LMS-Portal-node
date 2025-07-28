const Joi = require('joi');

const curriculumValidator = {
    // Validate curriculum creation
    validateCreate: (data) => {
        const schema = Joi.object({
            courseId: Joi.string().required().messages({
                'string.empty': 'Course ID is required'
            }),
            title: Joi.string().trim().min(3).max(200).required().messages({
                'string.empty': 'Curriculum title is required',
                'string.min': 'Title must be at least 3 characters long',
                'string.max': 'Title cannot exceed 200 characters'
            }),
            description: Joi.string().trim().max(1000).optional().messages({
                'string.max': 'Description cannot exceed 1000 characters'
            }),
            sections: Joi.array().items(Joi.object()).optional(),
            duration: Joi.number().positive().optional().messages({
                'number.positive': 'Duration must be a positive number'
            }),
            order: Joi.number().integer().min(0).optional().messages({
                'number.min': 'Order cannot be negative'
            })
        });

        return schema.validate(data);
    },

    // Validate curriculum update
    validateUpdate: (data) => {
        const schema = Joi.object({
            courseId: Joi.string().optional(),
            title: Joi.string().trim().min(3).max(200).optional(),
            description: Joi.string().trim().max(1000).optional(),
            sections: Joi.array().items(Joi.object()).optional(),
            duration: Joi.number().positive().optional(),
            order: Joi.number().integer().min(0).optional()
        });

        return schema.validate(data);
    }
};

module.exports = curriculumValidator;
