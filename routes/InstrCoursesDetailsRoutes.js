const express = require("express");
const router = express.Router();

const instrCoursesDetailsController = require("../controllers/instrCoursesDetailsController");
const instrCourseDetailsCountController = require("../controllers/instrCourseDetailsCountController");

router.get("/courses-details", instrCoursesDetailsController.getInstrCoursesDetails);
router.post("/courses-details", instrCoursesDetailsController.createInstrCoursesDetails);
router.put("/courses-details/:id", instrCoursesDetailsController.updateInstrCoursesDetails);

router.get("/details-count", instrCourseDetailsCountController.getInstrCourseDetailsCount);
router.post("/details-count", instrCourseDetailsCountController.createInstrCourseDetailsCount);
router.put("/details-count/:id", instrCourseDetailsCountController.updateInstrCourseDetailsCount);

module.exports = router;