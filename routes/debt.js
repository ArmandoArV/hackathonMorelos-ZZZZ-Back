const express = require("express");
const router = express.Router();
const debtController = require("../controller/debtController");
const middleware = require("../middleware/jwt-middleware");

router.get("/debt", middleware.verifyJWT, debtController.getDebt);
router.get("/debt/:IdDebt", middleware.verifyJWT, debtController.getDebtById);
router.post("/debt", middleware.verifyJWT, debtController.addDebt);

// Add route for fetching monthly debt for a specific user
router.get(
  "/monthlyDebt/:userId",
  middleware.verifyJWT,
  debtController.getMonthlyDebt
);

module.exports = router;
