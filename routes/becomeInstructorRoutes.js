const express = require("express");
const router = express.Router();

const becomeInstructorCountController = require("../controllers/becomeInstructorCountController");
const becomeSuccessfulInstructorController = require("../controllers/becomeSuccessfulInstructorController");
const uploadIcon = require("../middlewares/uploadIcon");

router.get("/become-instructor-count", becomeInstructorCountController.getBecomeInstructorCount);
router.post("/become-instructor-count", uploadIcon.single("image"), becomeInstructorCountController.createBecomeInstructorCount);
router.put("/become-instructor-count/:id", uploadIcon.single("image"), becomeInstructorCountController.updateBecomeInstructorCount);

router.get("/become-successful-instructor", becomeSuccessfulInstructorController.getBecomeSuccessfulInstructor);
router.post("/become-successful-instructor", uploadIcon.single("icon"), becomeSuccessfulInstructorController.createBecomeSuccessfulInstructor);
router.put("/become-successful-instructor/:id", uploadIcon.single("icon"), becomeSuccessfulInstructorController.updateBecomeSuccessfulInstructor);

module.exports = router;
