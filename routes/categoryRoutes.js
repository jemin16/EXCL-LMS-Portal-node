const express = require("express");
const router = express.Router();
const uploadIcon = require("../middlewares/uploadIcon");

const instructorController = require("../controllers/instructorController");
const popularToolController = require("../controllers/popularToolController");

router.post("/popular-tools", popularToolController.createPopularTool);
router.get("/popular-tools", popularToolController.getPopularTools);

router.post("/instructor", uploadIcon.single("image"), instructorController.createInstructor);
router.get("/instructor", instructorController.getInstructors);

module.exports = router;