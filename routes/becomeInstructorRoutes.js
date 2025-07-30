const express = require("express");
const router = express.Router();

const uploadIcon = require("../middlewares/uploadIcon");

const { createUploadIcon } = require("../middlewares/uploadIcon");
const uploadIconEnduguard = createUploadIcon("uploads/becomeInstructorEnduguard");

const becomeInstructorCountController = require("../controllers/becomeInstructorCountController");
const becomeSuccessfulInstructorController = require("../controllers/becomeSuccessfulInstructorController");
const becomeInstrEnduguardController = require("../controllers/becomeInstrEnduController");

router.get("/become-instructor-count", becomeInstructorCountController.getBecomeInstructorCount);
router.post("/become-instructor-count", uploadIcon.single("image"), becomeInstructorCountController.createBecomeInstructorCount);
router.put("/become-instructor-count/:id", uploadIcon.single("image"), becomeInstructorCountController.updateBecomeInstructorCount);

router.get("/become-successful-instructor", becomeSuccessfulInstructorController.getBecomeSuccessfulInstructor);
router.post("/become-successful-instructor", uploadIcon.single("icon"), becomeSuccessfulInstructorController.createBecomeSuccessfulInstructor);
router.put("/become-successful-instructor/:id", uploadIcon.single("icon"), becomeSuccessfulInstructorController.updateBecomeSuccessfulInstructor);

router.get("/enduguard", becomeInstrEnduguardController.getEnduguard);
router.post("/enduguard", uploadIconEnduguard.single("icon"), becomeInstrEnduguardController.createEnduguard);
router.put("/enduguard/:id", uploadIconEnduguard.single("icon"), becomeInstrEnduguardController.updateEnduguard);

module.exports = router;
