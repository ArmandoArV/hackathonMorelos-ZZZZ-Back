const debtService = require("../service/debt.serivce");

const debtController = {
  getDebt: async (req, res) => {
    try {
      const debts = await debtService.getDebt();
      res.status(200).json(debts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getDebtById: async (req, res) => {
    try {
      const { IdDebt } = req.params;
      const debt = await debtService.getDebtById(IdDebt);
      if (debt) {
        res.status(200).json(debt);
      } else {
        res.status(404).json({ message: "Debt info not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getStartEndDaysById: async (req, res) => {
    try {
      const { IdDebt } = req.params;
      const debt = await debtService.getStartEndDaysById(IdDebt);
      if (debt) {
        res.status(200).json(debt);
      } else {
        res.status(404).json({ message: "Debt not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addDebt: async (req, res) => {
    try {
      const { amount, mounthlyOutput, userId, startDate, endDate } = req.body;
      await debtService.addDebt(
        amount,
        mounthlyOutput,
        userId,
        startDate,
        endDate
      );
      res.status(201).json({ message: "Debt added successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getMonthlyDebt: async (req, res) => {
    try {
      const { userId } = req.params; // Assuming userId is passed as a parameter
      const monthlyDebts = await debtService.getMonthlyDebt(userId);
      res.status(200).json(monthlyDebts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  calculateAverageDebt: async (req, res) => {
    try {
      const { userId } = req.params; // Assuming userId is passed as a parameter
      const averageDebt = await debtService.calculateAverageDebt(userId);
      res.status(200).json({ averageDebt });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = debtController;
