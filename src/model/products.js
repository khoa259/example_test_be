import mongoose, { ObjectId } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    imageproduct: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
