const express = require("express"); 
const router = express.Router();
const {addTaskToHabbbit, createHabbit, deleteTask,} = require("../controllers/AdminView"); 


router.post("/add-task",addTaskToHabbbit); 
router.post("/create-habbit",createHabbit);
router.post("/delete-task",deleteTask);
module.exports = router;