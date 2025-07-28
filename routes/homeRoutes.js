const express = require("express");
const router = express.Router();
const uploadIcon = require("../middlewares/uploadIcon");


const categoryController = require("../controllers/categoryController");
const courseController = require("../controllers/courseController");
const featuredController = require("../controllers/featuredCourseController");
const recentlyController = require("../controllers/recentlyAddedCourseController");


router.get("/categories", categoryController.getCategories);
router.post("/categories", uploadIcon.single("icon"), categoryController.createCategory);


router.get("/course", courseController.getCourses);
router.post("/course", uploadIcon.single("image"), courseController.createCourse);


router.get("/featured-courses", featuredController.getFeaturedCourses);
router.post("/featured-courses", uploadIcon.single("image"), featuredController.createFeaturedCourse);


router.get("/recently-added-courses", recentlyController.getRecentlyAddedCourses);
router.post("/recently-added-courses", uploadIcon.single("image"), recentlyController.createRecentlyAddedCourse);
router.post("/recently-added-courses/:id/image", uploadIcon.single("image"), recentlyController.updateRecentlyAddedCourseImage);

module.exports = router;
