const user = require("../models/User"); 
const Habbit = require("../models/Habbit"); 
const Task = require("../models/Task"); 


exports.createHabbit = async( req , res)=>{
    try{
      const {title, description, url} = req.body; 

      if(!title|| !description)
      {
        return res.status(404).json({
            success: false , 
            message:"credential not found", 
        })
      }
      const createdHabbit =  await Habbit.create({title, description, url});

      return res.status(200).json({
        success: true ,
        message:"Added Successfullly", 
        HabbitId:createdHabbit._id
      })
    }
    catch(err){
       console.log(err); 
       return res.status(500).json({
        success:false , 
        message:"error while creating the habbit"
       })   
    }
}
exports.addTaskToHabbbit = async( req , res)=>{
    try{
    const {habbitId , title , description , points} = req.body ; 
    
    if(!habbitId|| !title || !description || !points)
    {
        return res.status(404).json({
            success: false , 
            message:"credential not found", 
        })
    }
    const createdTask = await Task.create({title , description , reward:points})
    const updateHabbit = await Habbit.findByIdAndUpdate(habbitId,{
        $push:{tasks:createdTask._id}
    },{new:true});

    return res.status(200).json({
        success: true , 
        message:"added task", 
        updateHabbit
    })
    }
    catch(err){
        console.log(err); 
        return res.status(500).json({
            success:false ,
            message:"error while adding task"
        })
    }
}
exports.deleteTask = async( req , res)=>{
    try{
     const {taskId , habbitId } = req.body; 
     const updatedHabbit = await Habbit.findByIdAndUpdate(habbitId,{
        $pull:{tasks:taskId}
     },{new: true});
     const deletedTask = await Task.findByIdAndRemove({taskId}); 
     
   

     return res.status(200).json({
        succes: false, 
        message:"DeletedTask", 
        updatedHabbit
     })
    }
    catch(err){
         console.log(err); 
         return res.status(500).json({
            success: false , 
            message:"error while deleting task"
         })
    }
}
