const personalInfoService = require("../service/personalInfo.service");

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
      const personalInfo = await personalInfoService.getPersonalInfoById(
        idPersonalInfo
      );
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
      const { userId, income, outcome, debt, startDate, endDate } = req.body;
      const newPersonalInfoId = await personalInfoService.addPersonalInfo(
        userId,
        income,
        outcome,
        debt,
        startDate,
        endDate
      );
      res.status(201).json({
        idPersonalInfo: newPersonalInfoId,
        message: "Personal info added successfully",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getMonthlyPersonalInfo: async (req, res) => {
    try {
      const { userId } = req.params;
      const monthlyPersonalInfo =
        await personalInfoService.getMonthlyPersonalInfo(userId);
      res.status(200).json(monthlyPersonalInfo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAverageIncomeOutcome: async (req, res) => {
    try {
      const { userId } = req.params;
      const { averageIncome, averageOutcome } =
        await personalInfoService.getAverageIncomeOutcome(userId);

      res.status(200).json({ averageIncome, averageOutcome });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = personalInfoController;
