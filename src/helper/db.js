import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
 

    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "real-state",
    });

    return connection;
  } catch (error) {
    console.log(error);
  }
};
