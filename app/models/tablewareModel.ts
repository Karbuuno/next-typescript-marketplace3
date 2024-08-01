import mongoose, { Schema, Document, models, model, Model } from "mongoose";
// work interface
interface clothesDocument extends Document {
  images: string[];
}

//create clothes schema
const clothesSchema = new Schema(
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
    color: {
      type: String,
    },
    material: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    dimensions: {
      type: String,
    },
    weight: {
      type: Number,
    },
    condition: {
      type: String,
      required: true,
      enum: ["New", "Very Good", "Good"],
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

const clothesModel = models.Clothes || model("Clothes", clothesSchema);
export default clothesModel as Model<clothesDocument>;
