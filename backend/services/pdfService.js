import fs from "fs";
import { extractText } from "unpdf";

export const extractPdfText = async (filePath) => {

  try {

    const buffer = fs.readFileSync(filePath);

    const uint8Array = new Uint8Array(buffer);

    const result = await extractText(uint8Array);

    // Convert array -> single string
    return result.text.join("\n");

  } catch (error) {

    console.error("PDF extraction error:", error);

    throw error;

  }

};