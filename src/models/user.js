import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please provide username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },

  userType: {
    type: String,
    default: "user",
  },
  mobileNumber: {
    type: Number,
  },
});

export const userSetup =
  mongoose.models.user || mongoose.model("user", userSchema);
