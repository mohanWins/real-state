import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: "string",
    required: [true, "email required"],
  },
  password:String ,
});

export const userSetup =mongoose.models.user || mongoose.model("user", userSchema);
