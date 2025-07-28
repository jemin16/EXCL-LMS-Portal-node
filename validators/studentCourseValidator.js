const Joi = require('joi');

const studentCourseValidator = {
    // Validate student course enrollment
    validateEnrollment: (data) => {
        const schema = Joi.object({
            studentId: Joi.string().required().messages({
                'string.empty': 'Student ID is required'
            }),
            courseId: Joi.string().required().messages({
                'string.empty': 'Course ID is required'
            }),
            enrollmentDate: Joi.date().optional(),
            progress: Joi.number().min(0).max(100).optional().messages({
                'number.min': 'Progress cannot be negative',
                'number.max': 'Progress cannot exceed 100%'
            }),
            status: Joi.string().valid('enrolled', 'completed', 'dropped').optional()
        });

        return schema.validate(data);
    },

    // Validate student course update
    validateUpdate: (data) => {
        const schema = Joi.object({
            progress: Joi.number().min(0).max(100).optional(),
            status: Joi.string().valid('enrolled', 'completed', 'dropped').optional(),
            completionDate: Joi.date().optional()
        });

        return schema.validate(data);
    }
};

module.exports = studentCourseValidator;
