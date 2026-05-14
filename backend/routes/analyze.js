import express from "express";

import {
  getAllDocuments,
  searchRelevantChunks
} from "../services/chromaService.js";

import {
  generateEmbedding
} from "../services/embeddingService.js";

import {
  analyzeWithMarketData
} from "../services/ragService.js";
import { auth }
from "../middleware/auth.js";

const router = express.Router();

router.get(
  "/analyze",
    auth,

  async (req, res) => {

    try {
        const userId =
  req.user.id;
      // Get all stored docs
      const results =
        await getAllDocuments();

      // Create dynamic query
      const query =
        results.documents
          .join(" ")
          .substring(0, 1500);


      // Generate embedding
      const queryEmbedding =
        await generateEmbedding(
          query
        );

      // Semantic retrieval
      const relevantChunks =
        await searchRelevantChunks(
          queryEmbedding,
          userId
        );

      // Final context
      const context =
        relevantChunks.join("\n");

      // AI analysis
      const analysis =
        await analyzeWithMarketData(
          context
        );

      res.json({

        success: true,
        analysis,

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