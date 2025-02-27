import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

const userSchema =  mongoose.Schema(
    {
        // id : auto-generated
        watchHistory : [{
            type: mongoose.Schema.Types.ObjectId,
            ref : "Video"    
        }], 
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true,   //*
            index : true 
        },
        email : {
            type: String,
            required : true,
            unique : true,
            lowercase: true,
            trim : true
        },
        fullName: {
            type : String,
            required : true,
            trim : true,
            index : true //iss project me rkha gya h - HS
        },
        avatar : {
            type : string, //string of url from multer  -- image 
            required : true
        },
        coverImage : {
            type : String,  //string of url from multer  -- image   [cloudinary url]
        },
        password : {
            type : String,
            required : [true, "Password is required"],
            unique : true
        },
        refreshToken : { //? 
            type : string,
            unique : true
        }
    }, 
    {timestamps : true}
)

//password encription
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next(); //hash pass only when password is modified - created, reset

    this.password = bcrypt.hash(this.password, 10);
    next();
})

//checking whether the user's entered password is matching with the encrypted password or not
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id : this._id,
            email: this.email,
            username: this.username,
            fullName : this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function (){
    return jwt.sign(
        {
            _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)