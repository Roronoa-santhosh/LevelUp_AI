import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";



// Single query (for search)
export const generateEmbedding = async (text) => {

  const config = {
  apiKey: process.env.GEMINI_API_KEY,
  modelName: "gemini-embedding-001",
};
  const embeddings = new GoogleGenerativeAIEmbeddings(config);
  return await embeddings.embedQuery(text);
};

// Batch query (for storing syllabus) - PREVENTS 429 ERRORS
export const generateEmbeddingsBatch = async (texts) => {
  const embeddings = new GoogleGenerativeAIEmbeddings(config);
  return await embeddings.embedDocuments(texts);
};