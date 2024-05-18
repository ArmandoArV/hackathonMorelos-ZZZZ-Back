const connection = require("../helpers/mysql-config");

const questionsService = {
  getInitialQuestions: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM hackathon.Questions WHERE typeQuestion = 5;"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getAforeQuestions: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM hackathon.Questions WHERE typeQuestion = 1;"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getInversionQuestions: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM hackathon.Questions WHERE typeQuestion = 2;"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getSaveQuestions: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM hackathon.Questions WHERE typeQuestion = 3;"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getLearnFinanceQuestions: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM hackathon.Questions WHERE typeQuestion = 4;"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // New methods for retrieving answers
  getAnswersAfore: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT answer FROM hackathon.AnswersAfore;"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getAnswersInvest: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT answer FROM hackathon.AnswersInvest;"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getSaveAnswers: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT answers FROM hackathon.Save;"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getLearnFinanceAnswers: async () => {
    try {
      const [rows] = await connection.query(
        "SELECT answer FROM hackathon.LearnFinance;"
      );
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = questionsService;
