import mongoose, { Schema, Document, models, model, Model } from "mongoose";
// work interface
interface bagsDocument extends Document {
  images: string[];
  name: string;
  description: string;
  price: number;
  color: string;
  brand: string;
}

//create bags schema
const bagsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
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

const bagsModel = models.Bags || model("Bags", bagsSchema);
export default bagsModel as Model<bagsDocument>;
