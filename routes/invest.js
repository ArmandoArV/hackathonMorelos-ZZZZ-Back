const express = require("express");
const router = express.Router();
const investController = require("../controller/investController");
const middleware = require("../middleware/jwt-middleware");

router.get("/invests", middleware.verifyJWT, investController.getInvests);

router.get(
  "/invests/:idInvest",
  middleware.verifyJWT,
  investController.getInvestById
);

router.get("/brokers", middleware.verifyJWT, investController.getBrokers);

router.get(
  "/brokers/:idBroker",
  middleware.verifyJWT,
  investController.getBrokerById
);

router.post(
  "/calculateFinalValue",
  middleware.verifyJWT,
  investController.calculateFinalValue
);

module.exports = router;
