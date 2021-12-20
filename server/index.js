import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import Cards from "./models/userData.js";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieSession from "cookie-session";
import passport  from "passport";

import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieSession({
    name: "session",
    keys: "users",
    maxAge: 24 * 60 * 60 * 100,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
connectDB();

app.get("/", (req, res) => {
    res.send("API is running...");
})

// //cookie
// app.get("/api/users/cookie", (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//     res.status(202).cookie(email, password, {sameSite: "strict", path: '/', expires: new Date().getTime() + 30 * 1000}).send("cookie is initialized");
// })

// app.get("/api/users/cookieDelete", (req, res) => {
//     const email = req.body.email;
//     res.status(202).clearCookies(email).send("cookie is deleted");
// })

//post
app.post("/api/users/register", async (req, res) => {
    const username = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const pic = req.body.pic;
    const newUser = new Cards({name: username, email: email, password: password, pic: pic});

    try {
        await newUser.save();
        res.send("New User Registered");
    } catch (err) {
        console.log(err);
    }
});

//update
app.put("/api/users/profile", async (req, res) => {
    const username = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const pic = req.body.pic;
    const id = req.body.id;

    try {
        await newUser.findById(id, (err, updateUser)=>{
            updateUser.name = username;
            updateUser.email = email;
            updateUser.password = password;
            updateUser.pic = pic;
            updateUser.save();
            res.send("New User Updated");
        });
    } catch (err) {
        console.log(err);
    }
});

//getting data from db
app.get('/api/cards', (req, res) => {
    Cards.find({},(err, data) => {
        if(err)
            res.status(500).send(err);
        else 
            res.status(200).send(data);
    })
});




app.use("/api/users", cors(), userRoutes);


app.listen(3001, ()=>{
    console.log("Server Running");
});