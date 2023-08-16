const express = require("express"); 
const app = express(); 
const dbConnect = require("./config/Connection"); 
const entryRoutes = require("./routes/entryRoutes"); 
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors")
require("dotenv").config(); 
const PORT = process.env.PORT; 
dbConnect();
app.use(cors({
 origin:"http://localhost:3000", 
 Credentials:true,
}))
app.use(express.json()); 
app.use("/api",entryRoutes);
app.use("/api",userRoutes); 
app.use("/api",adminRoutes)
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
app.get("/k",(req, res)=>{
 res.send("hellp")
})

