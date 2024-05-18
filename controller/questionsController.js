const questionsService = require("../service/questions.service");

const questionsController = {
  getInitialQuestions: async (req, res) => {
    try {
      const questions = await questionsService.getInitialQuestions();
      if (questions) {
        res.status(200).json(questions);
      } else {
        res.status(404).json({ message: "Questions not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAforeQuestions: async (req, res) => {
    try {
      const questions = await questionsService.getAforeQuestions();
      if (questions) {
        res.status(200).json(questions);
      } else {
        res.status(404).json({ message: "Questions not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getInversionQuestions: async (req, res) => {
    try {
      const questions = await questionsService.getInversionQuestions();
      if (questions) {
        res.status(200).json(questions);
      } else {
        res.status(404).json({ message: "Questions not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getSaveQuestions: async (req, res) => {
    try {
      const questions = await questionsService.getSaveQuestions();
      if (questions) {
        res.status(200).json(questions);
      } else {
        res.status(404).json({ message: "Questions not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getLearnFinanceQuestions: async (req, res) => {
    try {
      const questions = await questionsService.getLearnFinanceQuestions();
      if (questions) {
        res.status(200).json(questions);
      } else {
        res.status(404).json({ message: "Questions not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAnswersAfore: async (req, res) => {
    try {
      const answers = await questionsService.getAnswersAfore();
      if (answers) {
        res.status(200).json(answers);
      } else {
        res.status(404).json({ message: "Answers not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAnswersInvest: async (req, res) => {
    try {
      const answers = await questionsService.getAnswersInvest();
      if (answers) {
        res.status(200).json(answers);
      } else {
        res.status(404).json({ message: "Answers not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getSaveAnswers: async (req, res) => {
    try {
      const answers = await questionsService.getSaveAnswers();
      if (answers) {
        res.status(200).json(answers);
      } else {
        res.status(404).json({ message: "Answers not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getLearnFinanceAnswers: async (req, res) => {
    try {
      const answers = await questionsService.getLearnFinanceAnswers();
      if (answers) {
        res.status(200).json(answers);
      } else {
        res.status(404).json({ message: "Answers not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = questionsController;
