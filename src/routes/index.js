const { Router } = require("express");
const { postSurvey } = require("../controllers/postSurvey");
const { getSurvey } = require("../controllers/getSurvey");
const { putSurvey } = require("../controllers/putSurvey");
const { getSurveyId } = require("../controllers/getSurveyId");
const { deleteSurvey } = require("../controllers/deleteSurvey");
const { getSurveyOrder } = require("../controllers/getSurveyOrder");

const router = Router();


router.get('/', function(req, res) {
    res.send('Backend Survey');
  })

  router.post("/survey", postSurvey);
  router.get("/survey", getSurvey);
  router.put("/survey/:id", putSurvey);
  router.get("/survey/:id", getSurveyId);
  router.delete("/survey/:id", deleteSurvey);
  router.get("/surveycontact/:id", getSurveyOrder)



module.exports = router;
