const express = require("express");
const router = express.Router();
const questionsController = require("../controller/questionsController");
const middleware = require("../middleware/jwt-middleware");

router.get("/initialQuestions", questionsController.getInitialQuestions);

router.get("/aforeQuestions", questionsController.getAforeQuestions);

router.get("/inversionQuestions", questionsController.getInversionQuestions);

router.get("/saveQuestions", questionsController.getSaveQuestions);

router.get(
  "/learnfinanceQuestions",
  questionsController.getLearnFinanceQuestions
);

router.get("/aforeAnswers", questionsController.getAnswersAfore);
router.get("/inversionAnswers", questionsController.getAnswersInvest);
router.get("/saveAnswers", questionsController.getSaveAnswers);
router.get("/learnfinanceAnswers", questionsController.getLearnFinanceAnswers);
module.exports = router;
