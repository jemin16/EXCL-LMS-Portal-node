const express = require("express");
const router = express.Router();

const instrEarningController = require("../controllers/instrEarningController");

router.get("/earnings", instrEarningController.getInstrEarnings);
router.post("/earnings", instrEarningController.createInstrEarning);
router.put("/earnings/:id", instrEarningController.updateInstrEarning);


module.exports = router; 
