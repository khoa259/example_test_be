import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { userRoute } from "./router/users.js";
import { productRoute } from "./router/products.js";

export const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1", userRoute);
app.use("/api/v1/product", productRoute);

mongoose
  .connect(
    "mongodb+srv://khoa10688:RlZPJFLL5F7wlwS3@cluster0.mb2qvkx.mongodb.net/",
    {
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connect success port", port);
  })
  .catch(() => {
    console.log("connect failed ");
  });

app.listen(port, () => {
  console.log("server is running port", port);
});
