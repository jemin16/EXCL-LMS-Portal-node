const singleCourse = require("../models/singleCourse");

exports.getSingleCourse = async (req, res) => {
    try {
        const course = await singleCourse.find();
        res.json(course);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

exports.createSingleCourse = async (req, res) => {
    try {
        const newCourse = new singleCourse({
            image: req.file ? req.file.filename : null,
            title: req.body.title,
            subtitle: req.body.subtitle,
            description: req.body.description,
            paragraphOne: req.body.paragraphOne,
            paragraphTwo: req.body.paragraphTwo,
            paragraphThree: req.body.paragraphThree,
            paragraphFour: req.body.paragraphFour,
            learnTitle: req.body.learnTitle,
            learnParagraphone: req.body.learnParagraphone,
            learnParagraphtwo: req.body.learnParagraphtwo,
            learnParagraphthree: req.body.learnParagraphthree,
            learnParagraphfour: req.body.learnParagraphfour,
            learnParagraphfive: req.body.learnParagraphfive,
            learnParagraphsix: req.body.learnParagraphsix,
            whoTitle: req.body.whoTitle,
            whoParagraphone: req.body.whoParagraphone,
            whoParagraphtwo: req.body.whoParagraphtwo,
            whoParagraphthree: req.body.whoParagraphthree,
            whoParagraphfour: req.body.whoParagraphfour,
            whoParagraphfive: req.body.whoParagraphfive,
            whoParagraphsix: req.body.whoParagraphsix,
            whoParagraphseven: req.body.whoParagraphseven,
            CourseRequirementsTitle: req.body.CourseRequirementsTitle,
            CourseRequirementsTitleone: req.body.CourseRequirementsTitleone,
            CourseRequirementsTitletwo: req.body.CourseRequirementsTitletwo,
            CourseRequirementsTitlethree: req.body.CourseRequirementsTitlethree,
            CourseRequirementsTitlefour: req.body.CourseRequirementsTitlefour,
            CourseRequirementsTitlefive: req.body.CourseRequirementsTitlefive,
            CourseRequirementsTitlesix: req.body.CourseRequirementsTitlesix,
            CourseRequirementsTitleseven: req.body.CourseRequirementsTitleseven
        });
        await newCourse.save();
        res.status(201).json({ success: true, data: newCourse });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}
