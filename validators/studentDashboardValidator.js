const Joi = require('joi');

const studentDashboardValidator = {
    // Validate student dashboard data
    validateDashboardData: (data) => {
        const schema = Joi.object({
            studentId: Joi.string().required().messages({
                'string.empty': 'Student ID is required'
            }),
            totalCourses: Joi.number().integer().min(0).optional().messages({
                'number.min': 'Total courses cannot be negative'
            }),
            completedCourses: Joi.number().integer().min(0).optional().messages({
                'number.min': 'Completed courses cannot be negative'
            }),
            inProgressCourses: Joi.number().integer().min(0).optional().messages({
                'number.min': 'In progress courses cannot be negative'
            }),
            totalHours: Joi.number().min(0).optional().messages({
                'number.min': 'Total hours cannot be negative'
            }),
            achievements: Joi.array().items(Joi.string()).optional(),
            lastActivity: Joi.date().optional()
        });

        return schema.validate(data);
    },

    // Validate dashboard update
    validateUpdate: (data) => {
        const schema = Joi.object({
            totalCourses: Joi.number().integer().min(0).optional(),
            completedCourses: Joi.number().integer().min(0).optional(),
            inProgressCourses: Joi.number().integer().min(0).optional(),
            totalHours: Joi.number().min(0).optional(),
            achievements: Joi.array().items(Joi.string()).optional(),
            lastActivity: Joi.date().optional()
        });

        return schema.validate(data);
    }
};

module.exports = studentDashboardValidator;
