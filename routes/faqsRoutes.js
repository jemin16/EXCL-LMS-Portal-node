const express = require("express");
const router = express.Router();

const faqsController = require("../controllers/faqsController");

router.get("/qa", faqsController.getFaqs);
router.post("/qa", faqsController.createFaqs);
router.put("/qa/:id", faqsController.updateFaqs);
router.delete("/qa/:id", faqsController.deleteFaqs);

module.exports = router;