import { Schema, Document, models, model, Model } from "mongoose";
// work interface
interface workDocument extends Document {
  images: string[];
}

//create work schema
const workSchema = new Schema(
  {
    images: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const workModel = models.Work || model("Work", workSchema);
export default workModel as Model<workDocument>;
