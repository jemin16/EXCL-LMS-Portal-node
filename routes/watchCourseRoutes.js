const express = require("express");
const router = express.Router();
const uploadImage = require("../middlewares/uploadimage");

const watchCourseTopbar = require("../controllers/watchCourseTopbarController");
const watchCourseDescription = require("../controllers/watchCourseDescriptionContoller");
const watchCourseComment = require("../controllers/watchCourseCommentController");
const watchCourseContent = require("../controllers/watchCourseContentsController")

router.get("/watch-course-topbar", watchCourseTopbar.getWatchCourse);
router.post("/watch-course-topbar", watchCourseTopbar.createWatchCourse);

router.get("/description", watchCourseDescription.getWatchCourse);
router.post("/description", watchCourseDescription.createWatchCourse);

router.get("/comments", watchCourseComment.getWatchCourse);
router.post('/comments', uploadImage, watchCourseComment.createWatchCourse);

router.get("/content", watchCourseContent.getContents);
router.post("/content", watchCourseContent.addContent)


module.exports = router;