import dotenv from 'dotenv'
dotenv.config({
    path: './env'
});  //+package.json file change


import connectDB from './db/dbConnection.js';
connectDB();


/*
APPROACH I - EVERYTHING IN THE SAME FILE

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express';
const app = express();

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); //db connected
        app.on("error", (err) =>{
            console.log("Express app (server) is not able to talk to databse");
            console.log("ERROR: ", err);
            throw err;
        })

        app.listen(`${process.env.PORT}`, ()=> {
            console.log(`App is listening on port: ${process.env.PORT}`);
        })
    }
    catch (error){
        console.error("ERROR: ", error);
        throw err;
    }
})();
*/