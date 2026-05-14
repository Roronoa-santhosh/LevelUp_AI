// chromaService.js

import { ChromaClient }
from "chromadb";

// ======================================
// CHROMA CLIENT
// ======================================

const client =
  new ChromaClient({

    host: "localhost",

    port: 8000,

    ssl: false,

  });

// ======================================
// CREATE / GET COLLECTION
// ======================================

async function getCollection() {

  const collection =
    await client.getOrCreateCollection({

      name: "my_collection",

      embeddingFunction: null,

    });

  return collection;

}

// ======================================
// STORE EMBEDDINGS
// ======================================

export async function
storeEmbeddings(

  docs,
  embeddings,
  userId

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

        (doc) =>
          doc.pageContent

      ),

      embeddings,

      metadatas: docs.map(

        (doc) => ({

          source:
            doc.metadata.fileName,

          userId: userId,

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

// ======================================
// DELETE USER DOCUMENTS
// ======================================

export async function
deleteUserDocuments(userId) {

  try {

    const collection =
      await getCollection();

    await collection.delete({

      where: {
        userId: userId
      }

    });

    console.log(
      "Old user vectors deleted"
    );

  } catch (error) {

    console.error(

      "Delete User Docs Error:",

      error

    );

  }

}

// ======================================
// GET ALL DOCUMENTS
// ======================================

export async function
getAllDocuments() {

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

export async function
searchRelevantChunks(

  queryEmbedding,
  userId

) {

  try {

    const collection =
      await getCollection();

    const results =
      await collection.query({

        queryEmbeddings: [
          queryEmbedding
        ],

        where: {
          userId: userId
        },

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