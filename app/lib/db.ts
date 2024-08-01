import mongoose from "mongoose";
//connect to db
let connection: typeof mongoose;
const url = process.env.MONGO_URI as string;

const connectToDB = async () => {
  try {
    if (!connection) {
      connection = await mongoose.connect(url);
    }
    return connection;
  } catch (error) {
    throw new Error(error as any).message;
  }
};
export default connectToDB;
