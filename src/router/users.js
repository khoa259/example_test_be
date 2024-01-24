import { Router } from "express";
import { Login, SignUp } from "../controller/users.js";

export const userRoute = Router();

userRoute.post("/signup", SignUp);
userRoute.post("/login", Login);
