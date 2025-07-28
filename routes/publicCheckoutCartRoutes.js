const express = require("express");
const router = express.Router();

const publicCheckoutCartController = require("../controllers/publicCheckoutCartController");
const { createUploadIcon } = require("../middlewares/uploadIcon");

const uploadPublicCheckoutCartPhotos = createUploadIcon("uploads/publicCheckoutCart");

router.get("/public-grid", publicCheckoutCartController.getPublicGrid);
router.post("/public-grid", uploadPublicCheckoutCartPhotos.single("image"), publicCheckoutCartController.createPublicGrid);
router.put("/public-grid/:id", uploadPublicCheckoutCartPhotos.single("image"), publicCheckoutCartController.updatePublicGrid);
router.delete("/public-grid/:id", publicCheckoutCartController.deletePublicGrid);

module.exports = router;
