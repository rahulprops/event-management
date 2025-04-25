// models/Event.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  location: String,
  date: {
    type: Date,
    required: true,
  },
  image: String, 
  attendees:{
     type:[String],
     default:[],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);
