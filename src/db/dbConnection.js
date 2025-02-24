import mongoose from "mongoose"; //1
import { DB_NAME } from "../constants.js";

//connectDB function
const connectDB = async ()=>{
    try{
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected successfully!!! DB HOST : ${(await connectionInstance).Connection.host}`)
        console.log(`\n MongoDB connected successfully!!! ConnectionState : ${(await connectionInstance).ConnectionStates.connected}`)
        // console.log(connectionInstance) //returns a promise
    }
    catch(error){
        console.log("(Mera errorrr....)MONGODB CONNECTION ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB;