const Joi = require('joi');

const instructorSingleCourseValidator = {
    // Validate instructor single course creation
    validateCreate: (data) => {
        const schema = Joi.object({
            instructorId: Joi.string().required().messages({
                'string.empty': 'Instructor ID is required'
            }),
            courseId: Joi.string().required().messages({
                'string.empty': 'Course ID is required'
            }),
            title: Joi.string().trim().min(3).max(200).required().messages({
                'string.empty': 'Course title is required',
                'string.min': 'Title must be at least 3 characters long',
                'string.max': 'Title cannot exceed 200 characters'
            }),
            description: Joi.string().trim().max(1000).optional().messages({
                'string.max': 'Description cannot exceed 1000 characters'
            }),
            price: Joi.number().min(0).optional().messages({
                'number.min': 'Price cannot be negative'
            }),
            duration: Joi.number().positive().optional().messages({
                'number.positive': 'Duration must be a positive number'
            }),
            level: Joi.string().valid('beginner', 'intermediate', 'advanced').optional(),
            status: Joi.string().valid('draft', 'published', 'archived').optional()
        });

        return schema.validate(data);
    },

    // Validate instructor single course update
    validateUpdate: (data) => {
        const schema = Joi.object({
            title: Joi.string().trim().min(3).max(200).optional(),
            description: Joi.string().trim().max(1000).optional(),
            price: Joi.number().min(0).optional(),
            duration: Joi.number().positive().optional(),
            level: Joi.string().valid('beginner', 'intermediate', 'advanced').optional(),
            status: Joi.string().valid('draft', 'published', 'archived').optional()
        });

        return schema.validate(data);
    }
};

module.exports = instructorSingleCourseValidator;
