const questionsService = require("../service/questions.service");

const questionsController = {
    getInitialQuestions: async (req, res) => {
        try {
          const objective = await questionsService.getInitialQuestions();
          if (objective) {
            res.status(200).json(objective);
          } else {
            res.status(404).json({ message: "Objective not found" });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },

      getAforeQuestions: async (req, res) => {
        try {
          const objective = await questionsService.getAforeQuestions();
          if (objective) {
            res.status(200).json(objective);
          } else {
            res.status(404).json({ message: "Objective not found" });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },

      getInversionQuestions: async (req, res) => {
        try {
          const objective = await questionsService.getInversionQuestions();
          if (objective) {
            res.status(200).json(objective);
          } else {
            res.status(404).json({ message: "Objective not found" });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },

      getSaveQuestions: async (req, res) => {
        try {
          const objective = await questionsService.getSaveQuestions();
          if (objective) {
            res.status(200).json(objective);
          } else {
            res.status(404).json({ message: "Objective not found" });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },

      getLearnFinanceQuestions: async (req, res) => {
        try {
          const objective = await questionsService.getInitialQuestions();
          if (objective) {
            res.status(200).json(objective);
          } else {
            res.status(404).json({ message: "Objective not found" });
          }
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
}

module.exports = questionsController;