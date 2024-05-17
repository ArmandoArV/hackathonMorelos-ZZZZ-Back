const express = require("express");
const router = express.Router();
const aforeController = require("../controller/aforeController");

// Routes
router.get("/afores", aforeController.getAfores);
router.get("/afores/:idAfore", aforeController.getAforeById);
router.post("/afore", aforeController.addAfore);
router.get("/afore-types", aforeController.getAforesType);
module.exports = router;
