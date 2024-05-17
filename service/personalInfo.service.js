const connection = require("../helpers/mysql-config");

const personalInfoService = {
  getPersonalInfos: async () => {
    try {
      const [rows] = await connection.query("SELECT * FROM PersonalInfo");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getPersonalInfoById: async (idPersonalInfo) => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM PersonalInfo WHERE idPersonalInfo = ?",
        [idPersonalInfo]
      );
      return rows[0]; 
    } catch (error) {
      throw error;
    }
  },

  addPersonalInfo: async (income, outcome, debt, userId) => {
    try {
      const [result] = await connection.query(
        "INSERT INTO PersonalInfo (income, outcome, debt, User_idUser) VALUES (?, ?, ?, ?)",
        [income, outcome, debt, userId]
      );

      return result;
    } catch (error) {
      throw error;
    }
  },

  updatePersonalInfo: async (idPersonalInfo, income, outcome, debt) => {
    try {
      const [result] = await connection.query(
        "UPDATE PersonalInfo SET income = ?, outcome = ?, debt = ? WHERE idPersonalInfo = ?",
        [income, outcome, debt, idPersonalInfo]
      );

      return result;
    } catch (error) {
      throw error;
    }
  },

  deletePersonalInfo: async (idPersonalInfo) => {
    try {
      const [result] = await connection.query(
        "DELETE FROM PersonalInfo WHERE idPersonalInfo = ?",
        [idPersonalInfo]
      );

      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = personalInfoService;
