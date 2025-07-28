const express = require("express");
const router = express.Router();

const publicCheckoutCartController = require("../controllers/publicCheckoutCartController");
const { createUploadIcon } = require("../middlewares/uploadIcon");

const uploadPublicCheckoutCartPhotos = createUploadIcon("uploads/publicCheckoutCart");

router.get("/public-grid", publicCheckoutCartController.getPublicGrid);
router.post("/public-grid", uploadPublicCheckoutCartPhotos.single("image"), publicCheckoutCartController.createPublicGrid);

module.exports = router;
