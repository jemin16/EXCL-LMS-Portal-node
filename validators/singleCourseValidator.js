const Joi = require('joi');

const singleCourseValidator = {
    // Validate single course creation
    validateCreate: (data) => {
        const schema = Joi.object({
            image: Joi.string().uri().optional().messages({
                'string.uri': 'Image must be a valid URL'
            }),
            title: Joi.string().trim().min(5).max(200).required().messages({
                'string.empty': 'Course title is required',
                'string.min': 'Title must be at least 5 characters long',
                'string.max': 'Title cannot exceed 200 characters'
            }),
            subtitle: Joi.string().trim().min(10).max(300).optional().messages({
                'string.min': 'Subtitle must be at least 10 characters long',
                'string.max': 'Subtitle cannot exceed 300 characters'
            }),
            description: Joi.string().trim().min(20).max(1000).required().messages({
                'string.empty': 'Course description is required',
                'string.min': 'Description must be at least 20 characters long',
                'string.max': 'Description cannot exceed 1000 characters'
            }),
            paragraphOne: Joi.string().trim().optional(),
            paragraphTwo: Joi.string().trim().optional(),
            paragraphThree: Joi.string().trim().optional(),
            paragraphFour: Joi.string().trim().optional(),
            learnTitle: Joi.string().trim().optional(),
            learnParagraphone: Joi.string().trim().optional(),
            learnParagraphtwo: Joi.string().trim().optional(),
            learnParagraphthree: Joi.string().trim().optional(),
            learnParagraphfour: Joi.string().trim().optional(),
            learnParagraphfive: Joi.string().trim().optional(),
            learnParagraphsix: Joi.string().trim().optional(),
            whoTitle: Joi.string().trim().optional(),
            whoParagraphone: Joi.string().trim().optional(),
            whoParagraphtwo: Joi.string().trim().optional(),
            whoParagraphthree: Joi.string().trim().optional(),
            whoParagraphfour: Joi.string().trim().optional(),
            whoParagraphfive: Joi.string().trim().optional(),
            whoParagraphsix: Joi.string().trim().optional(),
            whoParagraphseven: Joi.string().trim().optional(),
            CourseRequirementsTitle: Joi.string().trim().optional(),
            CourseRequirementsTitleone: Joi.string().trim().optional(),
            CourseRequirementsTitletwo: Joi.string().trim().optional(),
            CourseRequirementsTitlethree: Joi.string().trim().optional(),
            CourseRequirementsTitlefour: Joi.string().trim().optional(),
            CourseRequirementsTitlefive: Joi.string().trim().optional(),
            CourseRequirementsTitlesix: Joi.string().trim().optional(),
            CourseRequirementsTitleseven: Joi.string().trim().optional()
        });

        return schema.validate(data);
    },

    // Validate single course update
    validateUpdate: (data) => {
        const schema = Joi.object({
            image: Joi.string().uri().optional(),
            title: Joi.string().trim().min(5).max(200).optional(),
            subtitle: Joi.string().trim().min(10).max(300).optional(),
            description: Joi.string().trim().min(20).max(1000).optional(),
            paragraphOne: Joi.string().trim().optional(),
            paragraphTwo: Joi.string().trim().optional(),
            paragraphThree: Joi.string().trim().optional(),
            paragraphFour: Joi.string().trim().optional(),
            learnTitle: Joi.string().trim().optional(),
            learnParagraphone: Joi.string().trim().optional(),
            learnParagraphtwo: Joi.string().trim().optional(),
            learnParagraphthree: Joi.string().trim().optional(),
            learnParagraphfour: Joi.string().trim().optional(),
            learnParagraphfive: Joi.string().trim().optional(),
            learnParagraphsix: Joi.string().trim().optional(),
            whoTitle: Joi.string().trim().optional(),
            whoParagraphone: Joi.string().trim().optional(),
            whoParagraphtwo: Joi.string().trim().optional(),
            whoParagraphthree: Joi.string().trim().optional(),
            whoParagraphfour: Joi.string().trim().optional(),
            whoParagraphfive: Joi.string().trim().optional(),
            whoParagraphsix: Joi.string().trim().optional(),
            whoParagraphseven: Joi.string().trim().optional(),
            CourseRequirementsTitle: Joi.string().trim().optional(),
            CourseRequirementsTitleone: Joi.string().trim().optional(),
            CourseRequirementsTitletwo: Joi.string().trim().optional(),
            CourseRequirementsTitlethree: Joi.string().trim().optional(),
            CourseRequirementsTitlefour: Joi.string().trim().optional(),
            CourseRequirementsTitlefive: Joi.string().trim().optional(),
            CourseRequirementsTitlesix: Joi.string().trim().optional(),
            CourseRequirementsTitleseven: Joi.string().trim().optional()
        });

        return schema.validate(data);
    }
};

module.exports = singleCourseValidator;
