// chromaService.js

import { ChromaClient } from "chromadb";

const client = new ChromaClient({
  host: "localhost",
  port: 8000,
  ssl: false,
});
// ======================================
// OPTIONAL: RUN THIS ONLY ONCE
// DELETE OLD BROKEN COLLECTION
// ======================================

// await client.deleteCollection({
//   name: "resumes",
// });

// ======================================
// CREATE / GET COLLECTION
// ======================================

async function getCollection() {

 const collection = await client.getOrCreateCollection({
  name: "my_collection",
  embeddingFunction: null,
});

  return collection;
}

// ======================================
// STORE EMBEDDINGS
// ======================================

export async function storeEmbeddings(
  docs,
  embeddings
) {

  try {

    const collection =
      await getCollection();

  await collection.add({

  ids: docs.map(
    (_, i) =>
      `doc-${Date.now()}-${i}`
  ),

  documents: docs.map(
    (doc) => doc.pageContent
  ),

  embeddings: embeddings,

  metadatas: docs.map(
    (doc) => ({
      source:
        doc.metadata.fileName || "unknown",
    })
  ),

});

    console.log(
      "Stored in ChromaDB"
    );

  } catch (error) {

    console.error(
      "Store Embedding Error:",
      error
    );

  }
}
export async function resetCollection() {

  try {

    await client.deleteCollection({
      name: "my_collection",
    });

    console.log(
      "Old collection deleted"
    );

  } catch (error) {

    console.log(
      "Collection not found"
    );

  }

}

// ======================================
// GET ALL DOCUMENTS
// ======================================

export async function getAllDocuments() {

  try {

    const collection =
      await getCollection();

    const results =
      await collection.get();

    return results;

  } catch (error) {

    console.error(
      "Get Documents Error:",
      error
    );

    throw error;
  }
}

// ======================================
// SEMANTIC SEARCH
// ======================================

export async function searchRelevantChunks(
  queryEmbedding
) {

  try {

    const collection =
      await getCollection();

    const results =
      await collection.query({

        queryEmbeddings: [
          queryEmbedding
        ],

        nResults: 5,

      });

    return results.documents[0];

  } catch (error) {

    console.error(
      "Semantic Search Error:",
      error
    );

    throw error;
  }
}