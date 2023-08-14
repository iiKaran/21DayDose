const express = require("express"); 
const app = express(); 
const dbConnect = require("./config/Connection"); 
const entryRoutes = require("./routes/entryRoutes"); 
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
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
app.get("/k",(req, res)=>{
 res.send("hellp")
})

