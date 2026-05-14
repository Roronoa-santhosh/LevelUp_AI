import {
  RecursiveCharacterTextSplitter
} from "@langchain/textsplitters";

export const chunkText = async (
  text,
  metadata = {}
) => {

  const splitter =
    new RecursiveCharacterTextSplitter({

   chunkSize: 400,
chunkOverlap: 50,

    });

 const chunks =
await splitter.createDocuments(
  [text],
  [metadata]
);  

  return chunks;

};