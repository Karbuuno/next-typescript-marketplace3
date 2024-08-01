import mongoose, { Schema, Document, models, model, Model } from "mongoose";
// work interface
interface tablewareDocument extends Document {
  images: string[];
  name: string;
  description: string;
  price: number;
  size: string;
  color: string;
  brand: string;
  condition: string;
}

//create tableware schema
const tablewareSchema = new Schema(
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

    brand: {
      type: String,
    },
    dimensions: {
      type: String,
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

const tablewareModel = models.Tableware || model("Tableware", tablewareSchema);
export default tablewareModel as Model<tablewareDocument>;
