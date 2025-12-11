import express from "express";
import { hashPwd, verifyPwd } from "./utils/hash.js";

const app = express();

// middleware to parse json
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({ msg: "Auth service is running!" });
});

export default app;
