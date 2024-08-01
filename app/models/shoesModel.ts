import mongoose, { Schema, Document, models, model, Model } from "mongoose";
// work interface
interface shoesDocument extends Document {
  images: string[];
  name: string;
  description: string;
  price: number;
  color: string;
  brand: string;
  condition: string;
  size: string;
}

//create shoes schema
const shoesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      enum: ["37", "38", "40", "41", "42", "43"],
      required: true,
    },
    color: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    seller_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const shoesModel = models.Shoes || model("Shoes", shoesSchema);
export default shoesModel as Model<shoesDocument>;
