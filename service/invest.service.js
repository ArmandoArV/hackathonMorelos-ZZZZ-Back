const connection = require("../helpers/mysql-config");

const investService = {
  getInvests: async () => {
    try {
      const [rows] = await connection.query("SELECT * FROM Invest");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getInvestById: async (idInvest) => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM Invest WHERE idInvest = ?",
        [idInvest]
      );
      return rows[0]; // Assuming you want to return a single object instead of an array
    } catch (error) {
      throw error;
    }
  },

  getBrokers: async () => {
    try {
      const [rows] = await connection.query("SELECT * FROM Broker");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getBrokerById: async (idBroker) => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM Broker WHERE idBroker = ?",
        [idBroker]
      );
      return rows[0]; // Assuming you want to return a single object instead of an array
    } catch (error) {
      throw error;
    }
  },

  calculateFinalValue: async (idInvest, periodicity) => {
    try {
      // Get investment details
      const invest = await investService.getInvestById(idInvest);
      if (!invest) {
        throw new Error("Investment not found");
      }

      // Get broker details for the investment
      const [brokers] = await connection.query(
        "SELECT * FROM Broker WHERE Invest_idInvest = ?",
        [idInvest]
      );

      // Assuming there's only one broker per investment for simplicity
      if (brokers.length === 0) {
        throw new Error("Broker not found for the given investment");
      }
      const broker = brokers[0];

      // Calculate the gain
      const gain = broker.return * periodicity;

      // Calculate the final value
      const finalValue = invest.initialSalary + gain;

      return { finalValue };
    } catch (error) {
      throw error;
    }
  },

  addInvest: async (initialSalary, finalGain, userId) => {
    try {
      const [result] = await connection.query(
        "INSERT INTO Invest (initialSalary, finalGain, User_idUser) VALUES (?, ?, ?)",
        [initialSalary, finalGain, userId]
      );

      return { idInvest: result.insertId };
    } catch (error) {
      throw error;
    }
  },

  addBroker: async (name, serial, returnRate, investId) => {
    try {
      const [result] = await connection.query(
        "INSERT INTO Broker (name, serial, return, Invest_idInvest) VALUES (?, ?, ?, ?)",
        [name, serial, returnRate, investId]
      );

      return { idBroker: result.insertId };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = investService;
