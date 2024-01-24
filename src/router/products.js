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

productRoute.post("/product/create", createProduct);
productRoute.get("/product/list", getProduct);
productRoute.get("/product/detail/:id", read);
productRoute.put("/product/update/:id", updateProduct);
productRoute.delete("/product/delete/:id", removeProduct);
productRoute.post("/product/upload", upload.single("images"), uploadImages);
