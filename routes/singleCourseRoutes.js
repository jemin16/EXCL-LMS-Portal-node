const express = require("express");
const router = express.Router();
const uploadIcon = require("../middlewares/uploadIcon");

const singleCourseController = require("../controllers/singleCourseController");
const {
    addCurriculum,
    getCurriculums,
} = require("../controllers/curriculumController");
const instructorSingleCourseController = require("../controllers/instructorSingleCourseController");
const feedbackSingleCourseController = require("../controllers/feedbackSingleCourseController");
const overviewSingleCourseController = require('../controllers/overviewSingleCourseController');


router.get("/single-course-details", singleCourseController.getSingleCourse);
router.post("/single-course-details", uploadIcon.single("image"), singleCourseController.createSingleCourse);

router.get("/curriculums", getCurriculums);
router.post("/curriculums", addCurriculum);

router.get("/instructor-course", instructorSingleCourseController.getInstructorSingleCourse);
router.post(
    "/instructor-course",
    uploadIcon.single("image"),
    instructorSingleCourseController.createInstructorSingleCourse
);

router.get("/student-feedback", feedbackSingleCourseController.getFeedbackSingleCourse);
router.post("/student-feedback", uploadIcon.single("image"), feedbackSingleCourseController.createFeedbackSingleCourse);

router.get('/overview', overviewSingleCourseController.getAllOverviewCourses);
router.post('/overview', overviewSingleCourseController.createOverview);




module.exports = router;