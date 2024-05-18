const connection = require("../helpers/mysql-config");

const questionsService = {
    getInitialQuestions: async () => {
        try {
          const [rows] = await connection.query(
            "SELECT * FROM hackathon.Questions WHERE typeQuestion = 5;",
          );
          return rows[0]; 
        } catch (error) {
          throw error;
        }
      },

      getAforeQuestions: async () => {
        try {
          const [rows] = await connection.query(
            "SELECT * FROM hackathon.Questions WHERE typeQuestion = 1;",
          );
          return rows[0]; 
        } catch (error) {
          throw error;
        }
      },

      getInversionQuestions: async () => {
        try {
          const [rows] = await connection.query(
            "SELECT * FROM hackathon.Questions WHERE typeQuestion = 2;",
          );
          return rows[0]; 
        } catch (error) {
          throw error;
        }
      },

      getSaveQuestions: async () => {
        try {
          const [rows] = await connection.query(
            "SELECT * FROM hackathon.Questions WHERE typeQuestion = 3;",
          );
          return rows[0]; 
        } catch (error) {
          throw error;
        }
      },

      getLearnFinanceQuestions: async () => {
        try {
          const [rows] = await connection.query(
            "SELECT * FROM hackathon.Questions WHERE typeQuestion = 4;",
          );
          return rows[0]; 
        } catch (error) {
          throw error;
        }
      }
}

module.exports = questionsService;