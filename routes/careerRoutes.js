const express = require("express");
const router = express.Router();

const careerPerksController = require("../controllers/careerPerksController");
const careerAllPositionController = require("../controllers/careerAllPositionController");
const careerDetailsController = require("../controllers/careerDetailsController");
const careerInformationController = require("../controllers/careerInformationController");

router.get("/perks", careerPerksController.getCareerPerks);
router.post("/perks", careerPerksController.createCareerPerk);
router.put("/perks/:id", careerPerksController.updateCareerPerk);
router.delete("/perks/:id", careerPerksController.deleteCareerPerk);

router.get("/all-position", careerAllPositionController.getCareerAllPosition);
router.post("/all-position", careerAllPositionController.createCareerAllPosition);
router.put("/all-position/:id", careerAllPositionController.updateCareerAllPosition);
router.delete("/all-position/:id", careerAllPositionController.deleteCareerAllPosition);

router.get("/top-details", careerDetailsController.getCareerTopDetails);
router.post("/top-details", careerDetailsController.createCareerTopDetails);
router.put("/top-details/:id", careerDetailsController.updateCareerTopDetails);
router.delete("/top-details/:id", careerDetailsController.deleteCareerTopDetails);

router.get("/information", careerInformationController.getCareerInformation);
router.post("/information", careerInformationController.createCareerInformation);
router.put("/information/:id", careerInformationController.updateCareerInformation);
router.delete("/information/:id", careerInformationController.deleteCareerInformation);

module.exports = router;