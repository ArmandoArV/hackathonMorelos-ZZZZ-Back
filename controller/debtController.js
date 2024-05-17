const debtService = require("../service/debtService");

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

  addDebt: async (req, res) => {
    try {
      const { amount, mounthlyOuput, userId } = req.body;
      await debtService.addDebt(amount, mounthlyOuput, userId);
      res.status(201).json({ message: "Debt added successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = debtController;