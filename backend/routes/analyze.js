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

const router = express.Router();

router.get(
  "/analyze",

  async (req, res) => {

    try {

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
          queryEmbedding
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