const express = require("express"); 
const router = express.Router();
const {getAllHabbits , getPoints, getTaskNo, getParticularHabbit, increasePoinsts} = require("../controllers/UserView"); 


router.post("/get-habbits",getAllHabbits); 
router.post("/get-points",getPoints);
router.post("/get-task",getTaskNo);
router.post("/get-this-habbit",getParticularHabbit);
router.post("/increase-points",increasePoinsts);

module.exports = router;