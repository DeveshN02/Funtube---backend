// this is connecting db by second method

// one syntax
// require("dotenv").config({ path: "./env" });

// another syntax
import dotenv from "dotenv";
import connectDb from "./db/index.js";

// db successfully connect ho gya hai
// but or advance or efficient code likne k liye donenv ko config krenge ye ek optional method hai

dotenv.config({
    path: "./env",
});

// yaha be connetion ke liye execute kr denge
connectDb();

// ab package.json me jake scripts me jake "dev" : "nodemon -r dotenv/config --experimental-json-modules src index.js "  esa add krenge

// method 1

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// here we are connecting mongodb atlas to our mern project

// this is IIFes function it always starts with semicolon

// import express from "express";
// const app = express();

// (async () => {
//     try {
//         // isko connect krne k liye url or db ka nam dono use krna hota h
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//         // yaha pe app run kr rhe h agr error aaya to ye code run hoga ni ho listen wala run hoga
//         app.on("error", (error) => {
//             console.log(error, "error");
//             throw error;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(
//                 `the server is successfully start at port ${process.env.PORT}`
//             );
//         });
//     } catch (error) {
//         console.log(error, "error");
//         throw error;
//     }
// })();
