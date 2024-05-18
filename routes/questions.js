const express = require("express");
const router = express.Router();
const questionsController = require("../controller/questionsController");
const middleware = require("../middleware/jwt-middleware");

router.get("/initialQuestions", middleware.verifyJWT, questionsController.getInitialQuestions);

router.get("/aforeQuestions", middleware.verifyJWT, questionsController.getAforeQuestions);

router.get("/inversionQuestions", middleware.verifyJWT, questionsController.getInversionQuestions);

router.get("/saveQuestions", middleware.verifyJWT, questionsController.getSaveQuestions);

router.get("/learnfinanceQuestions", middleware.verifyJWT, questionsController.getLearnFinanceQuestions);

router.get("/answers", middleware.verifyJWT, questionsController.getAnswers);

module.exports = router;