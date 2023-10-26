const { Datos } = require("../db");

async function putSurvey(req, res) {
    const surveyID = req.params.id;
    const newData = req.body;
    // console.log('_:   ', surveyID)
    // console.log('_:   ', newData)
    try {
        const survey = await Datos.findOne({
            where: { id: surveyID }
        });

        if (!survey) {
            return res.status(404).json({ error: "Survey not Found" })
        };

        await Datos.update(newData, {
            where: { id: surveyID }
        });

        const updatedDatos = await Datos.findOne({
            where: { id: surveyID }
        });

        return res.status(200).json(updatedDatos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    putSurvey
};