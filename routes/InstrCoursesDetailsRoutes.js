const express = require("express");
const router = express.Router();

const instrCoursesDetailsController = require("../controllers/instrCoursesDetailsController");

router.get("/courses-details", instrCoursesDetailsController.getInstrCoursesDetails);
router.post("/courses-details", instrCoursesDetailsController.createInstrCoursesDetails);
router.put("/courses-details/:id", instrCoursesDetailsController.updateInstrCoursesDetails);


module.exports = router;