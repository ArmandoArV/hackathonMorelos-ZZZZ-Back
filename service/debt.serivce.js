const connection = require("../helpers/mysql-config");
const { getDayMonthYearString } = require("../utils/getMonthYearString");

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

  getStartEndDaysById: async (IdDebt) => {
    try {
      const [rows] = await connection.query(
        "SELECT startDate, endDate FROM Debt WHERE IdDebt = ?",
        [IdDebt]
      );
      if (rows.length > 0) {
        return {
          startDay: rows[0].startDay,
          endDay: rows[0].endDay,
        };
      } else {
        return null; // No data found for the given IdDebt
      }
    } catch (error) {
      throw error;
    }
  },

  addDebt: async (amount, mounthlyOutput, User_idUser, startDate, endDate) => {
    try {
      const query =
        "INSERT INTO Debt (amount, mounthlyOutput, User_idUser, startDate, endDate) VALUES (?, ?, ?, ?, ?)";
      const [result] = await connection.query(query, [
        amount,
        mounthlyOutput,
        User_idUser,
        startDate,
        endDate,
      ]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },
  getMonthlyDebt: async (userId) => {
    try {
      const query = `
        SELECT 
          amount, 
          mounthlyOutput, 
          startDate, 
          endDate,
          MONTH(startDate) AS startMonth,
          YEAR(startDate) AS startYear,
          MONTH(endDate) AS endMonth,
          YEAR(endDate) AS endYear
        FROM Debt
        WHERE User_idUser = ?
        ORDER BY startDate, endDate
      `;
      const [rows] = await connection.query(query, [userId]);

      // Format the data
      const monthlyDebts = rows.map((row) => ({
        amount: row.amount,
        mounthlyOutput: row.mounthlyOutput,
        startMonth: getDayMonthYearString(
          row.startDate.getDate(),
          row.startDate.getMonth() + 1,
          row.startDate.getFullYear()
        ),
        endMonth: getDayMonthYearString(
          row.endDate.getDate(),
          row.endDate.getMonth() + 1,
          row.endDate.getFullYear()
        ),
      }));

      return monthlyDebts;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = debtService;
