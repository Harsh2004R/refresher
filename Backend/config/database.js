import mongoose from "mongoose";
export const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Data Base...`)
  } catch (error) {
    console.log("Something went wrong in database connection", error);
  }
};
