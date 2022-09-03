import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema(
  {
    title: String,
    duration: {
      startAt: Date,
      EndAt: Date,
    },
    description: String,
    price: String,
    // phone: String,
    picture: String,
    rate: Number,

    dateScheduled: Date,
    dueDate: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);
coursesSchema.pre(/^find/, function(next) {
  this.populate({ 
    path:"createdBy",
    select:"email phone names picture"
  });
  next();
});

const Courses = mongoose.model("Course", coursesSchema);

export default Courses;
