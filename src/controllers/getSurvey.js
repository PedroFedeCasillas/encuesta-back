const { Datos } = require("../db");

async function getSurvey(req, res) {
    try {
        const survey = await Datos.findAll({
            attributes: [
            'id',
            'full_name', 
            'how_found', 
            'newsletter_subscription', 
            'phone_number', 
            'preferred_language',
            'start_date'
        ],
        });
        
        return res.status(200).json(survey);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getSurvey
};