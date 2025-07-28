const express = require("express");
const router = express.Router();

const uploadIcon = require("../middlewares/uploadIcon");
const contactBranchController = require("../controllers/contactBranchesController");
const contactDetailsController = require("../controllers/contactDetailsController");

router.get("/branches", contactBranchController.getContactBranches);
router.post("/branches", uploadIcon.single("image"), contactBranchController.createContactBranch);
router.put("/branches/:id", uploadIcon.single("image"), contactBranchController.updateContactBranch);
router.delete("/branches/:id", contactBranchController.deleteContactBranch);

router.get("/details", contactDetailsController.getContactDetails);
router.post("/details", contactDetailsController.createContactDetails);
router.put("/details/:id", contactDetailsController.updateContactDetails);
router.delete("/details/:id", contactDetailsController.deleteContactDetails);

module.exports = router;