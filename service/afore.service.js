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
    initialSalary,
    monthsNumber,
    User_idUser,
    AforeBank_idBank,
    AforeType_idAforeType
  ) => {
    try {
      const query =
        "INSERT INTO Afore (initialSalary, monthsNumber, User_idUser, AforeBank_idBank, AforeType_idAforeType) VALUES (?, ?, ?, ?, ?)";
      const [result] = await connection.query(query, [
        initialSalary,
        monthsNumber,
        User_idUser,
        AforeBank_idBank,
        AforeType_idAforeType,
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

  getAforeBanksByAforeType: async (aforeTypeId) => {
    try {
      const query = `
        SELECT AB.*
        FROM AforeBank AS AB
        INNER JOIN AforeType AS AT ON AB.AforeType_idAforeType = AT.idAforeType
        WHERE AT.idAforeType = ?`;
      const [rows] = await connection.query(query, [aforeTypeId]);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  calculateRetirementSavingsBalance: async (AforeType_idAforeType) => {
    try {
      const query = `
      SELECT A.initialSalary, A.monthsNumber, B.netReturn
      FROM Afore A
      INNER JOIN AforeBank B ON A.AforeBank_idBank = B.idBank
      WHERE A.AforeType_idAforeType =  ?
      `;
      const [rows] = await connection.query(query, [AforeType_idAforeType]);

      if (rows.length === 0) {
        throw new Error("Afore record not found.");
      }

      const { initialSalary, monthsNumber, netReturn } = rows[0];
      const retirementSavingsBalance =
        initialSalary * Math.pow(1 + netReturn, monthsNumber);
      return retirementSavingsBalance;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = aforeService;
