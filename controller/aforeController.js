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
      const {
        initialSalary,
        monthsNumber,
        User_idUser,
        AforeBank_idBank,
        AforeType_idAforeType,
      } = req.body;
      const id = await aforeService.addAfore(
        initialSalary,
        monthsNumber,
        User_idUser,
        AforeBank_idBank,
        AforeType_idAforeType
      );
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAforesType: async (req, res) => {
    try {
      const aforesType = await aforeService.getAforesType();
      res.status(200).json(aforesType);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAforeBanksByAforeType: async (req, res) => {
    try {
      const { aforeTypeId } = req.params;
      const aforeBanks = await aforeService.getAforeBanksByAforeType(
        aforeTypeId
      );
      res.status(200).json(aforeBanks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  calculateRetirementSavingsBalance: async (req, res) => {
    try {
      const { AforeType_idAforeType } = req.params;
      const retirementSavingsBalance =
        await aforeService.calculateRetirementSavingsBalance(
          AforeType_idAforeType
        );
      res.status(200).json({ retirementSavingsBalance });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = aforeController;
