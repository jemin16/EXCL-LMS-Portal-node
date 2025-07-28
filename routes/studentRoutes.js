const express = require("express");
const router = express.Router();
const uploadIcon = require("../middlewares/uploadIcon");

const studentProfileController = require("../controllers/studentProfileController");
const studentDashboardController = require("../controllers/studentDashboardController");
const studentCourseController = require("../controllers/studentCourseController");
const studentTeacherController = require("../controllers/studentTeacherController");
const studentMessageController = require("../controllers/studentMessageController");
const studentChatMessageController = require("../controllers/studentChatMessageController");
const studentWishlistController = require("../controllers/studentWishlistController");
const studentPurchaseHistoryController = require("../controllers/StuPurchaseHisController");
const studentSettingsController = require("../controllers/studentSettingsController");

router.get("/profile", studentProfileController.getStudent);
router.post("/profile", uploadIcon.single("profileImage"), studentProfileController.createStudent);

router.get("/dashboard", studentDashboardController.getDashboard);
router.post("/dashboard", uploadIcon.single("image"), studentDashboardController.createDashboardItem);
router.put("/dashboard/:id", uploadIcon.single("image"), studentDashboardController.updateDashboardItem);

router.get("/courses", studentCourseController.getCourses);
router.post("/courses", uploadIcon.single("image"), studentCourseController.createCourse);
router.put("/courses/:id", uploadIcon.single("image"), studentCourseController.updateCourse);

router.get("/teachers", studentTeacherController.getTeachers);
router.post("/teachers", uploadIcon.single("image"), studentTeacherController.createTeacher);
router.put("/teachers/:id", uploadIcon.single("image"), studentTeacherController.updateTeacher);

router.get("/messages-sidebar", studentMessageController.getMessages);
router.post("/messages-sidebar", uploadIcon.single("image"), studentMessageController.createMessage);
router.put("/messages-sidebar/:id", uploadIcon.single("image"), studentMessageController.updateMessage);

router.get("/messages-chat", studentChatMessageController.getChatMessages);
router.post("/messages-chat", studentChatMessageController.createChatMessage);

router.get("/wishlist", studentWishlistController.getWishlistItems);
router.post("/wishlist", uploadIcon.single("image"), studentWishlistController.createWishlistItem);
router.put("/wishlist/:id", uploadIcon.single("image"), studentWishlistController.updateWishlistItem);

router.get("/purchase-history", studentPurchaseHistoryController.getPurchaseHistory);
router.post("/purchase-history", uploadIcon.fields([{ name: 'images', maxCount: 2 }]), studentPurchaseHistoryController.createPurchaseHistory);
router.put("/purchase-history/:id", uploadIcon.fields([{ name: 'images', maxCount: 2 }]), studentPurchaseHistoryController.updatePurchaseHistory);

router.get("/settings", studentSettingsController.getStudentSettings);
router.post("/settings", uploadIcon.single("image"), studentSettingsController.createStudentSettings);
router.put("/settings/:id", uploadIcon.single("image"), studentSettingsController.updateStudentSettings);

module.exports = router;