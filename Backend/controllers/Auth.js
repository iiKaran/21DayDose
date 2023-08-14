const User = require("../models/User"); 

const bcrypt = require("bcrypt");

exports.SignUp = async( req , res)=>{

    try{
       const {email,password, confirmPassword} = req.body ; 
       const findUser = await User.findOne({email:email}); 
       if(findUser)
       {
        return res.status(400).json({
          success:false,
          message:"User Already Existed",
         })
       }
       if(password !== confirmPassword)
       {
        return res.status(400).json({
          success:false , 
          message:"Password doesnot match"
        })
       }
       const hashedPassword = await bcrypt.hash(password, 10);
       const userDetail = await User.create({email:email , password:hashedPassword}); 
       return res.status(200).json({
        success:true,
        message:"User Created Successfully",
        data:userDetail,
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



exports.logIn = async( req , res)=>{

  try{
     const {email,password} = req.body ; 
     const findUser = await User.findOne({email:email}); 
     if(!findUser)
     {
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
     return res.status(200).json({
      success:true,
      message:"User log in success",
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