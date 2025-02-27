import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = mongoose.Schema(
    {
        videoFile : {
            type : String,  //cloudinary url
            required : true
        },
        thumbnail : {
            type : String,
            required : true
        },
        owner : {  //*
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            true : true
        },
        duration : {
            type : Number, //will be given by cloudinary website only
            required: true
        },
        views : {
            type : Number,
            required : true,
            default : 0
        },
        isPublished : {
            type : Boolean,
            // required : true,
            default : true
        }
    }, 
    {timestamps : true}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)