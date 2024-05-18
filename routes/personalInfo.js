const express = require("express");
const router = express.Router();
const personalInfoController = require("../controller/personalInfoController");
const middleware = require("../middleware/jwt-middleware");

// Retrieve all personal information
router.get(
  "/personal-info",
  middleware.verifyJWT,
  personalInfoController.getPersonalInfos
);

// Retrieve personal information by ID
router.get(
  "/personal-info/:idPersonalInfo",
  middleware.verifyJWT,
  personalInfoController.getPersonalInfoById
);

// Add personal information
router.post(
  "/personal-info",
  middleware.verifyJWT,
  personalInfoController.addPersonalInfo
);

// Retrieve monthly personal information for a specific user
router.get(
  "/personal-info/monthly/:userId",
  middleware.verifyJWT,
  personalInfoController.getMonthlyPersonalInfo
);

// Retrieve the average income and outcome for the current month for a specific user
router.get(
  "/personal-info/average/:userId",
  middleware.verifyJWT,
  personalInfoController.getAverageIncomeOutcome
);

module.exports = router;
