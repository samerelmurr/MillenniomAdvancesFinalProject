import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
const app = express();
import connectDB from "./config/db.js";
import Cors from "cors";

app.use(express.json());
app.use(Cors());
connectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
})

//pushing data to db
app.post('/api/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if(err)
            res.status(500).send(err);
        else 
            res.status(201).send(data);
    })
});

//getting data from db
app.get('/api/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err)
            res.status(500).send(err);
        else 
            res.status(200).send(data);
    })
});

app.use("/api/users", userRoutes);

app.listen(3001, ()=>{
    console.log("Server Running");
});