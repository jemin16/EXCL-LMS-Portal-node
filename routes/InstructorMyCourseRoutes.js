const express = require("express");
const router = express.Router();

const { createUploadIcon } = require("../middlewares/uploadIcon");
const uploadInstructorMyCoursePhotos = createUploadIcon("uploads/instructorMyCourse");

const instructorMyCourseController = require("../controllers/instructorMyCourseController");

router.get("/my-course", instructorMyCourseController.getInstructorMyCourse);
router.post("/my-course", uploadInstructorMyCoursePhotos.single("image"), instructorMyCourseController.createInstructorMyCourse);
router.put("/my-course/:id", uploadInstructorMyCoursePhotos.single("image"), instructorMyCourseController.updateInstuctorMyCourse);
router.delete("/my-course/:id", instructorMyCourseController.deleteInstuctorMyCourse);

module.exports = router;