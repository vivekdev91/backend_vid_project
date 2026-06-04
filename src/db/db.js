import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {

    // const connectionInstance = await mongoose.connect(
    //   "mongodb+srv://vivek:pass123@cluster0.o8sf39m.mongodb.net/?appName=Cluster0"
    // );

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection Faild !!!");
    console.log(error);
    
    process.exit(1);
  }
};

// console.log(process.env.MONGODB_URI);


export default connectDB;
