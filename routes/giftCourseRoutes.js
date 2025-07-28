const express = require("express");
const router = express.Router();

const giftCourseController = require("../controllers/giftCourseController");
const uploadIcon = require("../middlewares/uploadIcon");

router.get("/gift-course", giftCourseController.getGiftCourse);
router.post("/gift-course", uploadIcon.single("image"), giftCourseController.createGiftCourse);

module.exports = router;