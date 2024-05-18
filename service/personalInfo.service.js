const connection = require("../helpers/mysql-config");
const { getDayMonthYearString } = require("../utils/getMonthYearString");

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

  addPersonalInfo: async (
    userId,
    income,
    outcome,
    debt,
    startDate,
    endDate
  ) => {
    try {
      const query =
        "INSERT INTO PersonalInfo (User_idUser, income, outcome, debt, startDate, endDate) VALUES (?, ?, ?, ?, ?, ?)";
      const [result] = await connection.query(query, [
        userId,
        income,
        outcome,
        debt,
        startDate,
        endDate,
      ]);
      return result.insertId;
    } catch (error) {
      throw error;
    }
  },

  getMonthlyPersonalInfo: async (userId) => {
    try {
      const query = `
        SELECT 
          income, 
          outcome, 
          debt, 
          startDate, 
          endDate,
          MONTH(startDate) AS startMonth,
          YEAR(startDate) AS startYear,
          MONTH(endDate) AS endMonth,
          YEAR(endDate) AS endYear
        FROM PersonalInfo
        WHERE User_idUser = ?
        ORDER BY startDate, endDate
      `;
      const [rows] = await connection.query(query, [userId]);

      // Format the data
      const monthlyPersonalInfo = rows.map((row) => ({
        income: row.income,
        outcome: row.outcome,
        debt: row.debt,
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

      return monthlyPersonalInfo;
    } catch (error) {
      throw error;
    }
  },

  getAverageIncomeOutcome: async (userId) => {
    try {
      // Get the current month and year
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1
      const currentYear = currentDate.getFullYear();

      // Query to fetch income and outcome for the current month
      const query = `
        SELECT 
          AVG(income) AS averageIncome,
          AVG(outcome) AS averageOutcome
        FROM PersonalInfo
        WHERE 
          User_idUser = ? AND
          MONTH(startDate) = ? AND
          YEAR(startDate) = ?
      `;

      const [rows] = await connection.query(query, [
        userId,
        currentMonth,
        currentYear,
      ]);

      // Extract the average income and outcome from the result
      const { averageIncome, averageOutcome } = rows[0];

      return { averageIncome, averageOutcome };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = personalInfoService;
