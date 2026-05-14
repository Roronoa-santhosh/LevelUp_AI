import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB }
from "./config/db.js";
import authRoutes
from "./routes/authRoutes.js";
import uploadRoute
from "./routes/upload.js";

import analyzeRoutes
from "./routes/analyze.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

  res.send("Backend running");

});
app.use("/auth", authRoutes);
app.use("/upload", uploadRoute);

app.use("/api", analyzeRoutes);

// Start server ONLY after DB connects
connectDB()

  .then(() => {

    console.log(
      "Database connected"
    );

    app.listen(5000, () => {

      console.log(
        "Server running on port 5000"
      );

    });

  })

  .catch((error) => {

    console.error(
      "Database connection error:",
      error
    );

  });