import { Router } from "express";
import {
  createProduct,
  getProduct,
  removeProduct,
  updateProduct,
  read,
} from "../controller/products.js";
import { uploadImages } from "../controller/upload.js";
import { upload } from "../middleware/uploadFile.js";

export const productRoute = Router();

productRoute.post("/create", createProduct);
productRoute.get("/list", getProduct);
productRoute.get("/detail/:id", read);
productRoute.put("/update/:id", updateProduct);
productRoute.delete("/delete/:id", removeProduct);
productRoute.post("/upload", upload.single("images"), uploadImages);
