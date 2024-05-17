const objectiveService = require("../service/objective.service");

const objectiveController = {
  getObjectives: async (req, res) => {
    try {
      const objectives = await objectiveService.getObjectives();
      res.status(200).json(objectives);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getObjectiveById: async (req, res) => {
    try {
      const { idObjective } = req.params;
      const objective = await objectiveService.getObjectiveById(idObjective);
      if (objective) {
        res.status(200).json(objective);
      } else {
        res.status(404).json({ message: "Objective not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getQuestionsByObjectiveId: async (req, res) => {
    try {
      const { idObjective } = req.params;
      const questions = await objectiveService.getQuestionsByObjectiveId(idObjective);
      if (questions.length > 0) {
        res.status(200).json(questions);
      } else {
        res.status(404).json({ message: "No questions found for this objective" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = objectiveController;
