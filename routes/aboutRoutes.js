const express = require("express");
const router = express.Router();
const uploadIcon = require("../middlewares/uploadIcon");

const aboutGrowingCompaniesController = require("../controllers/aboutGrowingCompaniesController");
const aboutTestimonialController = require("../controllers/aboutTestimonialController");

router.get("/growing-companies", aboutGrowingCompaniesController.getGrowingCompanies);
router.post("/growing-companies", uploadIcon.single("image"), aboutGrowingCompaniesController.createGrowingCompanies);

router.get("/testimonial", aboutTestimonialController.getTestimonial);
router.post("/testimonial", aboutTestimonialController.createTestimonial);
router.put("/testimonial/:id", aboutTestimonialController.updateTestimonial);
router.delete("/testimonial/:id", aboutTestimonialController.deleteTestimonial);

module.exports = router;
