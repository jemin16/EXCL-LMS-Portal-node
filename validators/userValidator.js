const Joi = require('joi');

const userValidator = {
    // Validate user registration
    validateUserRegistration: (data) => {
        const schema = Joi.object({
            firstname: Joi.string().trim().min(2).max(50).required().messages({
                'string.empty': 'First name is required',
                'string.min': 'First name must be at least 2 characters long',
                'string.max': 'First name cannot exceed 50 characters'
            }),
            lastname: Joi.string().trim().min(2).max(50).required().messages({
                'string.empty': 'Last name is required',
                'string.min': 'Last name must be at least 2 characters long',
                'string.max': 'Last name cannot exceed 50 characters'
            }),
            username: Joi.string().trim().min(3).max(30).alphanum().required().messages({
                'string.empty': 'Username is required',
                'string.min': 'Username must be at least 3 characters long',
                'string.max': 'Username cannot exceed 30 characters',
                'string.alphanum': 'Username must contain only letters and numbers'
            }),
            email: Joi.string().email().lowercase().trim().required().messages({
                'string.empty': 'Email is required',
                'string.email': 'Please provide a valid email address'
            }),
            password: Joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])')).required().messages({
                'string.empty': 'Password is required',
                'string.min': 'Password must be at least 8 characters long',
                'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
            }),
            acceptedTerms: Joi.boolean().valid(true).required().messages({
                'any.only': 'You must accept the terms and conditions'
            })
        });

        return schema.validate(data);
    },

    // Validate user login
    validateUserLogin: (data) => {
        const schema = Joi.object({
            email: Joi.string().email().required().messages({
                'string.empty': 'Email is required',
                'string.email': 'Please provide a valid email address'
            }),
            password: Joi.string().required().messages({
                'string.empty': 'Password is required'
            })
        });

        return schema.validate(data);
    },

    // Validate user update
    validateUserUpdate: (data) => {
        const schema = Joi.object({
            firstname: Joi.string().trim().min(2).max(50).optional(),
            lastname: Joi.string().trim().min(2).max(50).optional(),
            username: Joi.string().trim().min(3).max(30).alphanum().optional(),
            email: Joi.string().email().lowercase().trim().optional(),
            isVerified: Joi.boolean().optional()
        });

        return schema.validate(data);
    },

    // Validate OTP
    validateOTP: (data) => {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            otp: Joi.string().length(6).pattern(/^[0-9]+$/).required().messages({
                'string.empty': 'OTP is required',
                'string.length': 'OTP must be exactly 6 digits',
                'string.pattern.base': 'OTP must contain only numbers'
            })
        });

        return schema.validate(data);
    }
};

module.exports = userValidator;
