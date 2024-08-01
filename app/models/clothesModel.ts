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
    size: {
      type: String,
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
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

const clothesModel = models.Clothes || model("Clothes", clothesSchema);
export default clothesModel as Model<clothesDocument>;
