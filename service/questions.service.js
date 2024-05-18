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
      }
}

module.exports = questionsService;