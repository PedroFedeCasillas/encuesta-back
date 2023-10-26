const { Datos } = require("../db");

async function getSurveyId(req, res) {
    try {
        const { id } = req.params;
        const surveyID = await Datos.findByPk(id);
        // console.log(surveyID)
        
        return res.status(200).json(surveyID);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getSurveyId
};