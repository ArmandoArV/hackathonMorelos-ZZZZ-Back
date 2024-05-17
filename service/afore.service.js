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

  addAfore: async (aforeData) => {
    try {
      const query =
        "INSERT INTO Afore (initialSalary, monthsNumber, User_idUser, AforeBank_idBank, AforeType_idAforeType) VALUES (?, ?, ?, ?, ?)";
      const [result] = await connection.query(query, [
        aforeData.initialSalary,
        aforeData.monthsNumber,
        aforeData.userId,
        aforeData.aforeBankId,
        aforeData.aforeTypeId,
      ]);

      return result.insertId; // Returns the ID of the newly inserted row
    } catch (error) {
      throw error;
    }
  },
  getAforesType: async () => {
    try {
      const query = `
      SELECT idAforeType, generation FROM AforeType`;
      const [rows] = await connection.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = aforeService;
