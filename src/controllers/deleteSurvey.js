const { Datos } = require("../db");

async function deleteSurvey(req, res) {
    const { id } = req.params;
  
    try {
      await Datos.destroy({ where: { id } });
      const allSurvey = await Datos.findAll();
      return res.status(200).json(allSurvey);
    } catch (error) {
      return res.status(500).json({ message: "Failed to Delete Survey", error });
    }
};

module.exports = {
    deleteSurvey
};