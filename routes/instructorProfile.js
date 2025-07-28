const express = require("express");
const router = express.Router();

const instructorProfileInformationController = require("../controllers/instructorProfileInformationController");
const uploadIcon = require("../middlewares/uploadIcon");

router.get("/instructor-profile-information", instructorProfileInformationController.getInstructorProfileInformation);
router.post("/instructor-profile-information", uploadIcon.single("image"), instructorProfileInformationController.createInstructorProfileInformation);
router.put("/instructor-profile-information/:id", uploadIcon.single("image"), instructorProfileInformationController.updateInstructorProfileInformation);

module.exports = router;