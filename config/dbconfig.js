import mongoose, { mongo } from "mongoose";
import "dotenv/config";

const dbUrl = 'mongodb+srv://passwordadmin:dgrVGiyi3bohYxkf@cluster0.mxcry06.mongodb.net/?retryWrites=true&w=majority';//`${process.env.DATABASE_URL}`;///${process.env.DATABASE}

mongoose.connect(dbUrl).catch((error) => {
  console.log("failed to initial db connection ", error);
});

const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("MongoDb connection successful: ", dbUrl);
});

conn.on("disconnected", () => {
  console.log(" db connection disconnected!");
});

conn.on("error", (err) => {
  console.log("MongoDb connection error: ", err);
});

process.on("SIGINT", () => {
  mongoose.disconnect(() => {
    console.log("MongoDb connections closed!");
    process.exit(0);
  });
});

export default mongoose;
