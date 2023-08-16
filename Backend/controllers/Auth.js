const User = require("../models/User"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.SignUp = async( req , res)=>{

    try{
       const {email,password, confirmPassword} = req.body ; 
       const findUser = await User.findOne({email:email}); 
       console.log(findUser);
       if(findUser)
       {
        return res.status(400).json({
          success:false,
          message:"User Already Existed",
         })
       }
       if(password !== confirmPassword)
       {
        return res.status(404).json({
          success:false , 
          message:"Password doesnot match"
        })
       }
      

       const hashedPassword = await bcrypt.hash(password, 10);
       const userDetail = await User.create({email:email , password:hashedPassword}); 
       const payload = {email:email, id:userDetail._id}; 
       console.log(payload)
       require("dotenv").config();
       const token = jwt.sign(payload,process.env.SECRET_KEY,{
        expiresIn:"7D"
       });
       return res.status(200).json({
        success:true,
        message:"User Created Successfully",
        data:userDetail,
        token
       })
    }
    catch(err){
      console.log("error", err);     
      res.status(500).json({
       success:false ,
       message:"Error While creating user"
      })
    }
}
exports.loggedIn = async(req, res)=>{
  try{
   console.log("loogoj hsdn")
     const{token} = req.body; 
     if(!token){
      return res.status(404).json({
        success:false , 
        message:"Not found token"
      })
    }
      console.log("here os the ",token);
      require("dotenv").config();
      const user = jwt.decode(token,process.env.SECRET_KEY);
       console.log("the user i", user)
       const points = await User.findById({_id:user.id}).points;
  
      return res.status(200).json({
        success:true , 
        message:"USER IS LOGGED IN",
        user, 
      })
    }

  catch(err){
    console.log(err); 
    return res.status(500).json({
      success:false , 
      message:"error while logged in"
    })
  }
}

exports.logIn = async( req , res)=>{

  try{
     const {email,password} = req.body ; 
     const findUser = await User.findOne({email:email}); 
     if(!findUser)
     {
      console.log("no user present");
      return res.status(404).json({
        success:false,
        message:"No User with Email",
       })
     }
     console.log(findUser)
     const matchedPsw = await bcrypt.compare(password, findUser.password);
     console.log(matchedPsw)
     if(!matchedPsw)
     {
      return res.status(400).json({
        success:false,
        message:"wrong password entered",
       })
     }
       const payload = {email:email, id:findUser._id}; 
       console.log(payload)
       require("dotenv").config();
       const token = jwt.sign(payload,process.env.SECRET_KEY,{
        expiresIn:"7D"
       });
     return res.status(200).json({
      success:true,
      message:"User log in success",
      token 
     })
  }
  catch(err){
    console.log("error", err);     
    res.status(500).json({
     success:false ,
     message:"Error While creating user"
    })
  }
}