const express = require("express"); 
const router = express.Router();
const {SignUp, logIn, loggedIn} = require("../controllers/Auth"); 


router.post("/signup",SignUp); 
router.post("/login",logIn);
router.post("/loggedIn",loggedIn);
module.exports = router;