import mongoose from "mongoose";
import { userSetup } from "@/models/user";
export const ConnectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    const user = new userSetup({
      name: "tester",
      email: "mohansharma121@gmail.com",
      password: "2345",
    });
    await user.save();

    const newUser = console.log("connected");
    console.log("user is created");
  } catch (error) {
    console.log(error);
  }
};
