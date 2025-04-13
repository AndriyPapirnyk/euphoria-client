import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);

    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB already connected");
      return;
    }

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URL not defined in env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw new Error("MongoDB connection failed");
  }
};

export default connect;
