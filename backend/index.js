import dotenv from "dotenv";
import express from "express";
import cors from "cors"

dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
