import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import uploadRoute from "./routes/upload.js";
import analyzeRoutes
from "./routes/analyze.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});


app.use("/upload", uploadRoute);
app.use("/api", analyzeRoutes);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});