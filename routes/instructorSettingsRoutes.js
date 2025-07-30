const express = require("express");
const router = express.Router();

const instructorSettingsController = require("../controllers/instructorSettingsController");

router.get("/settings", instructorSettingsController.getInstructorSettings);
router.post("/settings", instructorSettingsController.createInstructorSettings);
router.put("/settings/:id", instructorSettingsController.updateInstructorSettings);

module.exports = router;
