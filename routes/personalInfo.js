const express = require("express");
const router = express.Router();
const personalInfoController = require("../controller/personalInfoController");
const middleware = require("../middleware/jwt-middleware");

router.get("/personal-info", middleware.verifyJWT, personalInfoController.getPersonalInfos);

router.get("/personal-info/:idPersonalInfo", middleware.verifyJWT, personalInfoController.getPersonalInfoById);

router.post("/personal-info", middleware.verifyJWT, personalInfoController.addPersonalInfo);

router.put("/personal-info/:idPersonalInfo", middleware.verifyJWT, personalInfoController.updatePersonalInfo);

router.delete("/personal-info/:idPersonalInfo", middleware.verifyJWT, personalInfoController.deletePersonalInfo);

module.exports = router;