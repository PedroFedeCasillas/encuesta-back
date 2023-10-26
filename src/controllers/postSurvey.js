const { Datos } = require("../db");

async function postSurvey(req, res){   
    // console.log(req.body)

    try {
        const { 
            full_name, 
            how_found, 
            newsletter_subscription, 
            phone_number, 
            preferred_language,
            start_date } = req.body; 

            const startDateValue = start_date || null;
            const preferredLanguageValue = preferred_language || 'english';
            

            if (
                !full_name || 
                !how_found || 
                // !newsletter_subscription || 
                !phone_number || 
                !preferred_language 
                // !start_date 
            ){
                return res.status(401).send('Missing Data');
            } 
            const newPostSurvey = await Datos.create({
            full_name, 
            phone_number, 
            start_date: startDateValue,
            preferred_language,
            how_found, 
            newsletter_subscription, 
            });

            return res.status(201).json(newPostSurvey);       

    } catch (error) {
         return res.status(500).json({ message: "Error interno del servidor" });
        
    }
}
module.exports = {
    postSurvey
};