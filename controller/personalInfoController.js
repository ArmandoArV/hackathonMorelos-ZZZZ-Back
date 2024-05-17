const personalInfoService = require("../service/personalInfoService");

const personalInfoController = {
  getPersonalInfos: async (req, res) => {
    try {
      const personalInfos = await personalInfoService.getPersonalInfos();
      res.status(200).json(personalInfos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getPersonalInfoById: async (req, res) => {
    try {
      const { idPersonalInfo } = req.params;
      const personalInfo = await personalInfoService.getPersonalInfoById(idPersonalInfo);
      if (personalInfo) {
        res.status(200).json(personalInfo);
      } else {
        res.status(404).json({ message: "Personal info not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addPersonalInfo: async (req, res) => {
    try {
      const { income, outcome, debt, userId } = req.body;
      await personalInfoService.addPersonalInfo(income, outcome, debt, userId);
      res.status(201).json({ message: "Personal info added successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updatePersonalInfo: async (req, res) => {
    try {
      const { idPersonalInfo } = req.params;
      const { income, outcome, debt } = req.body;
      const personalInfo = await personalInfoService.getPersonalInfoById(idPersonalInfo);
      if (!personalInfo) {
        return res.status(404).json({ message: "Personal info not found" });
      }
      await personalInfoService.updatePersonalInfo(idPersonalInfo, income, outcome, debt);
      res.status(200).json({ message: "Personal info updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deletePersonalInfo: async (req, res) => {
    try {
      const { idPersonalInfo } = req.params;
      const personalInfo = await personalInfoService.getPersonalInfoById(idPersonalInfo);
      if (!personalInfo) {
        return res.status(404).json({ message: "Personal info not found" });
      }
      await personalInfoService.deletePersonalInfo(idPersonalInfo);
      res.status(200).json({ message: "Personal info deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = personalInfoController;
