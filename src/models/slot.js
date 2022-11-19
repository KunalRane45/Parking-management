import mongoose from "mongoose";

const slotsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    required: true,
  },
});

export default mongoose.models.slots || mongoose.model("slots", slotsSchema);
