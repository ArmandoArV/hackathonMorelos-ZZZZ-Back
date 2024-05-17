const aforeService = require("../service/afore.service");

const aforeController = {
  getAfores: async (req, res) => {
    try {
      const afores = await aforeService.getAfores();
      res.status(200).json(afores);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAforeById: async (req, res) => {
    try {
      const { idAfore } = req.params;
      const afore = await aforeService.getAforeById(idAfore);
      res.status(200).json(afore);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addAfore: async (req, res) => {
    try {
      const { typeAfore, comission, initialSalary, monthsNumber, userId } =
        req.body;
      const result = await aforeService.addAfore(
        typeAfore,
        comission,
        initialSalary,
        monthsNumber,
        userId
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  calculateRetirementSavingsBalance: async (req, res) => {
    try {
      const { idAfore } = req.params;
      const result = await aforeService.calculateRetirementSavingsBalance(
        idAfore
      );
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = aforeController;
