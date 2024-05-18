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
      }
}

module.exports = questionsController;