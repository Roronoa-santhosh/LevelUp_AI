import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs/promises";

import { extractPdfText } from "../services/pdfService.js";
import { chunkText } from "../services/chunkService.js";
import { generateEmbedding } from "../services/embeddingService.js";
import { storeEmbeddings, deleteUserDocuments } from "../services/chromaService.js";
import { cleanText } from "../services/cleanText.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();


const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, path.resolve("uploads"));

  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() + "-" + file.originalname
    );

  },

});

const upload = multer({ storage });

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
  } catch (error) {
    // ignore missing or locked files
  }
}

async function cleanUploadsFolder(excludePaths = []) {
  try {
    const uploadDir = path.resolve("uploads");
    const existingFiles = await fs.readdir(uploadDir);

    await Promise.all(
      existingFiles.map(async (fileName) => {
        const fullPath = path.resolve(uploadDir, fileName);
        if (!excludePaths.includes(fullPath)) {
          await deleteFile(fullPath);
        }
      })
    );
  } catch (error) {
    // ignore if uploads folder does not exist yet
  }
}

router.post(
  "/",
    auth,
  upload.array("pdfs", 10),

  async (req, res) => {

    const processedFiles = [];

    try {

      const extractedTexts = [];
      const currentFiles = req.files.map((file) =>
        path.resolve(file.path)
      );

     const userId =
  req.user.id;

await deleteUserDocuments(
  userId
);
      await cleanUploadsFolder(currentFiles);

      for (const file of req.files) {

        const filePath =
          path.resolve(file.path);

        // Extract PDF text
       const rawText =
  await extractPdfText(filePath);

const text =
  cleanText(rawText);

        // Create chunks
        const chunks =
          await chunkText(text, {

            fileName:
              file.originalname,

          });

        // Generate embeddings
        console.log("Before embeddings");

        const embeddings =
          await Promise.all(

            chunks.map((chunk) =>
              generateEmbedding(
                chunk.pageContent
              )
            )

          );

        console.log(
          "Embeddings generated"
        );

        // Store in ChromaDB
        await storeEmbeddings(
          chunks,
          embeddings,
          userId
        );

        console.log(
          "Stored successfully in ChromaDB"
        );

        extractedTexts.push({

          fileName:
            file.originalname,

          chunks,

        });

        processedFiles.push({

          fileName:
            file.originalname,

          success: true,

        });

        await deleteFile(filePath);

      }

      console.log(extractedTexts);

      res.json({

        success: true,

        message:
          "PDFs processed and stored successfully",

        data: processedFiles,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        error: error.message,

      });

    }

  }
);

export default router;