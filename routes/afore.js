const express = require("express");
const router = express.Router();
const aforeController = require("../controllers/aforeController");

// Routes
router.get("/afores", aforeController.getAfores);
router.get("/afores/:idAfore", aforeController.getAforeById);
router.post("/afore", aforeController.addAfore);
router.get(
  "/afores/:idAfore/calculate-retirement-savings-balance",
  aforeController.calculateRetirementSavingsBalance
);

module.exports = router;
