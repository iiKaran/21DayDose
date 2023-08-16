const User = require("../models/User"); 
const Habbit = require("../models/Habbit"); 
exports.getPoints  = async(req, res)=>{
    try{
      const {email}= req.body ; 
    const userDetails = await User.findOne({email:email}); 
    
      if(!userDetails){
         return res.status(404).json({
            success:false , 
            message:"No user found"
         })
      }
      
      return res.status(200).json({
        success:true,
        message:"Points are fetched", 
        points:userDetails.points
      })
    }
    catch(err)
    {
     console.log("error while getting points"+ err);
    return res.status(500).json({
        success:false , 
        message:"Error while getting points"
     })
    }
}

exports.getAllHabbits  = async(req, res)=>{
  try{
     const habbits = await Habbit.find({}).populate("tasks");
    
    return res.status(200).json({
      success:true,
      message:"All Habbits are fetched", 
      habbits:habbits
    })
  }
  catch(err)
  {
   console.log("error while getting habbits"+ err);
  return res.status(500).json({
      success:false , 
      message:"Error while getting habbits"
   })
  }
}

exports.getParticularHabbit = async(req , res)=>{
   
  try{
    const {habbitId}= req.body; 
  console.log(habbitId)
  const foundHabbit = await Habbit.findById(habbitId).populate("tasks");
  return res.status(200).json({
    success:true , 
    message:"fetched successfully",
    foundHabbit
  })}
  catch(err){
    console.log(err); 
    return res.status(500).json({
      success:false, 
      message:" error while feteching habbit"
    })
  }
}

exports.getTaskNo = async( req, res) =>{
  try{
    const {index , habbitId} = req.body ;
    const habbit  = await Habbit.findById(habbitId).populate("tasks"); 
    
    return res.status(200).json({
      succes:true , 
      message:"result fetched success fully",
      data: habbit.tasks[index]
    })

  }
  catch(err){
    console.log(err); 
    return res.status(500).json({
      success:false , 
      message:"error while fetching tasks"
    })
  }
}
exports.increasePoinsts = async(req, res)=>{
try{
  const{email, reward} = req.body; 
  const increasedPoints = await User.findOneAndUpdate(
    {email},{$inc:{points:reward}},{new:true});
    return res.status(200).json({
      success:true,
      message:"User updated succesfully", 
      increasedPoints
    })
}
catch(err){
  console.log(err); 
  return res.status(500).json({
    success:false , 
    message:"Error while increasing the points"
  })
}
}