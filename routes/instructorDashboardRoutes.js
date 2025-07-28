const express = require("express");
const router = express.Router();

const instructorDashboardCountController = require("../controllers/instructorDashboardCountController");
const instructorDashboardBioController = require("../controllers/instructorDashboardBioController");
const uploadIcon = require("../middlewares/uploadIcon");

router.get("/instructor-dashboard-count", instructorDashboardCountController.getInstructorDashboardCount);
router.post("/instructor-dashboard-count", instructorDashboardCountController.createInstructorDashboardCount);
router.put("/instructor-dashboard-count/:id", instructorDashboardCountController.updateInstructorDashboardCount);

router.get("/instructor-dashboard-bio", instructorDashboardBioController.getInstructorDashboardBio);
router.post("/instructor-dashboard-bio", uploadIcon.single("avtar"), instructorDashboardBioController.createInstructorDashboardBio);
router.put("/instructor-dashboard-bio/:id", uploadIcon.single("avtar"), instructorDashboardBioController.updateInstructorDashboardBio);

module.exports = router;