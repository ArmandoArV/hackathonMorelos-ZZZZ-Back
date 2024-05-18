const questionsService = require("../service/questions.service");

const questionsController = {
    getInitialQuestions: async (req, res) => {
        try {
          const questions = await questionsService.getInitialQuestions();
          if (questions) {
            res.status(200).json(objective);
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
            res.status(200).json(objective);
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
            res.status(200).json(objective);
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
            res.status(200).json(objective);
          } else {
            res.status(404).json({ message: "Questions not found" });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },

      getLearnFinanceQuestions: async (req, res) => {
        try {
          const questions = await questionsService.getInitialQuestions();
          if (questions) {
            res.status(200).json(objective);
          } else {
            res.status(404).json({ message: "Questions not found" });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },

      getAnswers: async (req, res) => {
        try {
          const questions = await questionsService.getAnswers();
          if (questions) {
            res.status(200).json(objective);
          } else {
            res.status(404).json({ message: "Questions not found" });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
}

module.exports = questionsController;