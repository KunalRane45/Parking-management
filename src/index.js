import express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
import SlotRouter from "./routes/slot.js";

config();

const app =express();
const PORT = process.env.PORT || 6969;

const MONGODB_URI = process.env.MONGODB_URI;


console.log(MONGODB_URI);

app.use(cors());
app.use(express.json());

app.get("/",(req, res)=> res.json({ message:"Hello World"}));

app.use("/api/slots", SlotRouter);

mongoose
.connect(MONGODB_URI)
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));
}).catch((error)=> {
    console.log(err);
});
