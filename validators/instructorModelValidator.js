const Joi = require('joi');

const instructorModelValidator = {
    // Validate instructor creation
    validateCreate: (data) => {
        const schema = Joi.object({
            name: Joi.string().trim().min(2).max(100).required().messages({
                'string.empty': 'Instructor name is required',
                'string.min': 'Name must be at least 2 characters long',
                'string.max': 'Name cannot exceed 100 characters'
            }),
            email: Joi.string().email().lowercase().trim().required().messages({
                'string.empty': 'Email is required',
                'string.email': 'Please provide a valid email address'
            }),
            bio: Joi.string().trim().max(1000).optional().messages({
                'string.max': 'Bio cannot exceed 1000 characters'
            }),
            expertise: Joi.array().items(Joi.string().trim()).optional(),
            experience: Joi.number().integer().min(0).optional().messages({
                'number.min': 'Experience cannot be negative'
            }),
            rating: Joi.number().min(0).max(5).optional().messages({
                'number.min': 'Rating cannot be less than 0',
                'number.max': 'Rating cannot exceed 5'
            }),
            profileImage: Joi.string().uri().optional().messages({
                'string.uri': 'Profile image must be a valid URL'
            })
        });

        return schema.validate(data);
    },

    // Validate instructor update
    validateUpdate: (data) => {
        const schema = Joi.object({
            name: Joi.string().trim().min(2).max(100).optional(),
            email: Joi.string().email().lowercase().trim().optional(),
            bio: Joi.string().trim().max(1000).optional(),
            expertise: Joi.array().items(Joi.string().trim()).optional(),
            experience: Joi.number().integer().min(0).optional(),
            rating: Joi.number().min(0).max(5).optional(),
            profileImage: Joi.string().uri().optional()
        });

        return schema.validate(data);
    }
};

module.exports = instructorModelValidator;
