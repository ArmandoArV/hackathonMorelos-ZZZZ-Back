const connection = require("../helpers/mysql-config");

const debtService = {
  getDebt: async () => {
    try {
      const [rows] = await connection.query("SELECT * FROM Debt");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getDebtById: async (IdDebt) => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM Debt WHERE IdDebt = ?",
        [IdDebt]
      );
      return rows[0]; 
    } catch (error) {
      throw error;
    }
  },

  addDebt: async (amount,mounthlyOuput, userId) => {
    try {
      const [result] = await connection.query(
        "INSERT INTO Debt (amount,mounthlyOutput, User_idUser) VALUES (?, ?, ?)",
        [amount, mounthlyOuput, userId]
      );

      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = debtService;