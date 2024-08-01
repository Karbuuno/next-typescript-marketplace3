import { Schema, Document, models, model, Model } from "mongoose";
// work interface
interface categoryDocument extends Document {
  name: string[];
}

//create category schema
const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const categoryModel = models.Category || model("Category", categorySchema);
export default categoryModel as Model<categoryDocument>;
