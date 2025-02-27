import dotenv from 'dotenv'
dotenv.config({
    path: './env'
});  //+package.json file change


import connectDB from './db/dbConnection.js';
import app from './app.js';
const PORT = process.env.PORT||8000;  //port le liya
connectDB()
.then(() => {
    //ERROR PART - APP NOT ABLE TO CONNECT WITH DB
    app.on("error", (err)=> {
        console.log(`App not able to talk to database! ERROR: ${err}`);
        throw err;
    })
    app.listen(PORT, ()=>{
        console.log(`App is listening on PORT: ${PORT}`)
    })
})
.catch((err)=>{
    console.log("RUKOOOOOOOOOO.........MongoDB connection failed  !!!!!!", err);
})


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