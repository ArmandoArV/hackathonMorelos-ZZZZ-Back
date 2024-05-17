const connection = require("../helpers/mysql-config");

const objectiveService = {
  getObjectives: async () => {
    try {
      const [rows] = await connection.query("SELECT * FROM Objective");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getObjectiveById: async (idObjective) => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM Objective WHERE idObjective = ?",
        [idObjective]
      );
      return rows[0]; 
    } catch (error) {
      throw error;
    }
  },

  getQuestionsByObjectiveId: async (idObjective) => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM Questions WHERE Objective_idObjective = ?",
        [idObjective]
      );
      return rows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = objectiveService;