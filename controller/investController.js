const investService = require("../service/invest.service");

const investController = {
  getInvests: async (req, res) => {
    try {
      const invests = await investService.getInvests();
      res.status(200).json(invests);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getInvestById: async (req, res) => {
    try {
      const { idInvest } = req.params;
      const invest = await investService.getInvestById(idInvest);
      res.status(200).json(invest);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getBrokers: async (req, res) => {
    try {
      const brokers = await investService.getBrokers();
      res.status(200).json(brokers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getBrokerById: async (req, res) => {
    try {
      const { idBroker } = req.params;
      const broker = await investService.getBrokerById(idBroker);
      res.status(200).json(broker);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  calculateFinalValue: async (req, res) => {
    try {
      const { idInvest, periodicity } = req.body;
      const finalValue = await investService.calculateFinalValue(
        idInvest,
        periodicity
      );
      res.status(200).json({ finalValue });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addInvest: async (req, res) => {
    try {
      const { initialSalary, finalGain, userId } = req.body;
      const result = await investService.addInvest(
        initialSalary,
        finalGain,
        userId
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addBroker: async (req, res) => {
    try {
      const { name, serial, returnRate, investId } = req.body;
      const result = await investService.addBroker(
        name,
        serial,
        returnRate,
        investId
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = investController;
