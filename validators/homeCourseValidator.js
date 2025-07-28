const Joi = require('joi');

const homeCourseValidator = {
    // Validate home course creation
    validateCreate: (data) => {
        const schema = Joi.object({
            title: Joi.string().trim().min(3).max(200).required().messages({
                'string.empty': 'Course title is required',
                'string.min': 'Title must be at least 3 characters long',
                'string.max': 'Title cannot exceed 200 characters'
            }),
            description: Joi.string().trim().max(500).optional().messages({
                'string.max': 'Description cannot exceed 500 characters'
            }),
            image: Joi.string().uri().optional().messages({
                'string.uri': 'Image must be a valid URL'
            }),
            price: Joi.number().min(0).optional().messages({
                'number.min': 'Price cannot be negative'
            }),
            category: Joi.string().trim().optional(),
            instructor: Joi.string().trim().optional(),
            rating: Joi.number().min(0).max(5).optional().messages({
                'number.min': 'Rating cannot be less than 0',
                'number.max': 'Rating cannot exceed 5'
            }),
            featured: Joi.boolean().optional()
        });

        return schema.validate(data);
    },

    // Validate home course update
    validateUpdate: (data) => {
        const schema = Joi.object({
            title: Joi.string().trim().min(3).max(200).optional(),
            description: Joi.string().trim().max(500).optional(),
            image: Joi.string().uri().optional(),
            price: Joi.number().min(0).optional(),
            category: Joi.string().trim().optional(),
            instructor: Joi.string().trim().optional(),
            rating: Joi.number().min(0).max(5).optional(),
            featured: Joi.boolean().optional()
        });

        return schema.validate(data);
    }
};

module.exports = homeCourseValidator;
