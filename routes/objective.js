const express = require("express");
const router = express.Router();
const objectiveController = require("../controller/objectiveController");
const middleware = require("../middleware/jwt-middleware");

router.get("/objectives", middleware.verifyJWT, objectiveController.getObjectives);

router.get("/objectives/:idObjective", middleware.verifyJWT, objectiveController.getObjectiveById);

router.get("/objectives/:idObjective/questions", middleware.verifyJWT, objectiveController.getQuestionsByObjectiveId);

module.exports = router;