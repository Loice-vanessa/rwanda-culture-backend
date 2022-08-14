import mongoose from "mongoose";

// schema of enrolement

const enrroledSchema = new mongoose.Schema({
    enrroledBy:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    },
    coursesId:{
        type:mongoose.Schema.ObjectId,
        ref:"courses"
    },
    paidAmount:String,
    status:{
        type:String,
        enum:["pending","accept","cancel"],
        default:"pending"
    },
},{timestamps:true}
);
enrroledSchema.pre(/^find/,function(next){
    this.populate({
        path:"enrroledBy",
        select:"email phone names picture"
    });
    this.populate({
        path:"coursesId",
        select:"title duration price picture"
    });
    next();
}
);
const enrroledcourses=mongoose.model('enrroled',enrroledSchema);

export default enrroledcourses;