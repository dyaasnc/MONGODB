import express from "express";
import mongoose from "mongoose";
import userRouter from "./roots/user.js";


const app = express();

app.use(userRouter);

mongoose.connect("mongodb://127.0.0.1:27017/newshop")
    .then(() => {
        console.log("connected succesfuly to database");
        app.listen(1337, () => {
            console.log("node server started")
        })
    })
    .catch(() => {
        console.log("failed to connect with database")
    });