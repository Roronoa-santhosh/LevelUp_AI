export function cleanText(text) {

  return text

    .replace(/Page\s+\d+\s+of\s+\d+/gi, "")

    .replace(/\|/g, " ")

    .replace(/\b[A-Z]{2,}\d+[A-Z]*\b/g, " ")

    .replace(/\b(GIR|PC|ELR|PE\/OE)\b/g, " ")

    .replace(/[^\x20-\x7E\n]/g, " ")

    .replace(/\s+/g, " ")

    .replace(/\s{2,}/g, " ")

    .trim();

}