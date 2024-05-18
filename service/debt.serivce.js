const connection = require("../helpers/mysql-config");
const { getDayMonthYearString } = require("../utils/getMonthYearString");

const debtService = {
  getDebt: async () => {
    try {
      const [rows] = await connection.query("SELECT * FROM Debt");
      return rows;
    } catch (error) {
      console.error("Error fetching debts:", error);
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
      console.error(`Error fetching debt with ID ${IdDebt}:`, error);
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
          startDay: rows[0].startDate,
          endDay: rows[0].endDate,
        };
      } else {
        return null; // No data found for the given IdDebt
      }
    } catch (error) {
      console.error(
        `Error fetching start and end dates for debt ID ${IdDebt}:`,
        error
      );
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
      console.error("Error adding debt:", error);
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
      console.error(
        `Error fetching monthly debts for user ID ${userId}:`,
        error
      );
      throw error;
    }
  },
  calculateAverageDebt: async (userId) => {
    try {
      // Get the current date
      const currentDate = new Date();
      // Get the first day of the current month
      const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      );
      // Get the last day of the current month
      const lastDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );

      console.log("First day of month:", firstDayOfMonth);
      console.log("Last day of month:", lastDayOfMonth);

      const query = `
        SELECT 
          amount, 
          DATEDIFF(endDate, startDate) / 30 AS monthsActive
        FROM Debt
        WHERE 
          User_idUser = ? AND
          startDate <= ? AND
          endDate >= ?
      `;

      console.log("Executing query:", query);

      const [rows] = await connection.query(query, [
        userId,
        lastDayOfMonth,
        firstDayOfMonth,
      ]);

      console.log("Query result:", rows);

      if (rows.length === 0) {
        console.log("No debts found for the current month for the given user");
        return 0; // No debts found for the current month for the given user
      }

      // Calculate the total debt amount over all months
      let totalDebt = 0;
      let totalMonths = 12;

      rows.forEach((row) => {
        totalDebt += row.amount / row.monthsActive;
        totalMonths += row.monthsActive;
      });

      console.log("Total debt:", totalDebt);
      console.log("Total months:", totalMonths);

      return totalDebt;
    } catch (error) {
      console.error(
        `Error calculating average monthly debt for user ID ${userId}:`,
        error
      );
      throw error;
    }
  },
};

module.exports = debtService;
