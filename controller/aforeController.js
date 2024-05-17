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
      const aforeData = req.body;
      const id = await aforeService.addAfore(aforeData);
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
};

module.exports = aforeController;
