const express = require("express");
const router = express.Router();
const questionsController = require("../controller/questionsController");
const middleware = require("../middleware/jwt-middleware");

router.get("/initialQuestions", questionsController.getInitialQuestions)

module.exports = router;