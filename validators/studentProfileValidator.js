const Joi = require('joi');

const studentProfileValidator = {
    // Validate student profile creation
    validateCreate: (data) => {
        const schema = Joi.object({
            name: Joi.string().trim().min(2).max(100).required().messages({
                'string.empty': 'Student name is required',
                'string.min': 'Name must be at least 2 characters long',
                'string.max': 'Name cannot exceed 100 characters'
            }),
            email: Joi.string().email().lowercase().trim().required().messages({
                'string.empty': 'Email is required',
                'string.email': 'Please provide a valid email address'
            }),
            phone: Joi.string().pattern(/^[0-9]{10,15}$/).optional().messages({
                'string.pattern.base': 'Phone number must be 10-15 digits'
            }),
            bio: Joi.string().trim().max(500).optional().messages({
                'string.max': 'Bio cannot exceed 500 characters'
            }),
            profileImage: Joi.string().uri().optional().messages({
                'string.uri': 'Profile image must be a valid URL'
            }),
            dateOfBirth: Joi.date().optional(),
            interests: Joi.array().items(Joi.string().trim()).optional()
        });

        return schema.validate(data);
    },

    // Validate student profile update
    validateUpdate: (data) => {
        const schema = Joi.object({
            name: Joi.string().trim().min(2).max(100).optional(),
            email: Joi.string().email().lowercase().trim().optional(),
            phone: Joi.string().pattern(/^[0-9]{10,15}$/).optional(),
            bio: Joi.string().trim().max(500).optional(),
            profileImage: Joi.string().uri().optional(),
            dateOfBirth: Joi.date().optional(),
            interests: Joi.array().items(Joi.string().trim()).optional()
        });

        return schema.validate(data);
    }
};

module.exports = studentProfileValidator;
