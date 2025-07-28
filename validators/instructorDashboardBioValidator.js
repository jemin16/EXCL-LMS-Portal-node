const Joi = require('joi');

const instructorDashboardBioValidator = {
    // Validate instructor dashboard bio creation
    validateCreate: (data) => {
        const schema = Joi.object({
            avtar: Joi.string().uri().optional().messages({
                'string.uri': 'Avatar must be a valid URL'
            }),
            name: Joi.string().trim().min(2).max(100).required().messages({
                'string.empty': 'Name is required',
                'string.min': 'Name must be at least 2 characters long',
                'string.max': 'Name cannot exceed 100 characters'
            }),
            email: Joi.string().email().lowercase().trim().required().messages({
                'string.empty': 'Email is required',
                'string.email': 'Please provide a valid email address'
            }),
            steps: Joi.string().trim().optional().messages({
                'string.base': 'Steps must be a string'
            }),
            complete: Joi.string().trim().optional().messages({
                'string.base': 'Complete status must be a string'
            })
        });

        return schema.validate(data);
    },

    // Validate instructor dashboard bio update
    validateUpdate: (data) => {
        const schema = Joi.object({
            avtar: Joi.string().uri().optional().messages({
                'string.uri': 'Avatar must be a valid URL'
            }),
            name: Joi.string().trim().min(2).max(100).optional(),
            email: Joi.string().email().lowercase().trim().optional(),
            steps: Joi.string().trim().optional(),
            complete: Joi.string().trim().optional()
        });

        return schema.validate(data);
    }
};

module.exports = instructorDashboardBioValidator;
