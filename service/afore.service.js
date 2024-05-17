const connection = require("../helpers/mysql-config");

const aforeService = {
  getAfores: async () => {
    try {
      const [rows] = await connection.query("SELECT * FROM Afore");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getAforeById: async (idAfore) => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM Afore WHERE idAfore = ?",
        [idAfore]
      );
      return rows[0]; // Assuming you want to return a single object instead of an array
    } catch (error) {
      throw error;
    }
  },

  addAfore: async (
    typeAfore,
    comission,
    initialSalary,
    monthsNumber,
    userId
  ) => {
    try {
      const [result] = await connection.query(
        "INSERT INTO Afore (typeAfore, comission, initialSalary, monthsNumber, User_idUser) VALUES (?, ?, ?, ?, ?)",
        [typeAfore, comission, initialSalary, monthsNumber, userId]
      );

      return { idAfore: result.insertId };
    } catch (error) {
      throw error;
    }
  },

  calculateRetirementSavingsBalance: async (idAfore) => {
    try {
      const [rows] = await connection.query(
        "SELECT initialSalary, comission, monthsNumber FROM Afore WHERE idAfore = ?",
        [idAfore]
      );

      if (rows.length === 0) {
        throw new Error("Afore not found");
      }

      const { initialSalary, comission, monthsNumber } = rows[0];
      const retirementSavingsBalance =
        initialSalary * Math.pow(1 + comission, monthsNumber);

      return { retirementSavingsBalance };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = aforeService;
