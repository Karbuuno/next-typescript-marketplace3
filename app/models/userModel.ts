import { Schema, Document, models, model, Model } from "mongoose";
// work interface
interface userDocument extends Document {
  images: string[];
}

//create user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["seller", "buyer"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = models.User || model("User", userSchema);
export default userModel as Model<userDocument>;
