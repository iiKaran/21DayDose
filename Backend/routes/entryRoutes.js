const express = require("express"); 
const router = express.Router();
const {SignUp, logIn} = require("../controllers/Auth"); 


router.post("/signup",SignUp); 
router.post("/login",logIn);

module.exports = router;