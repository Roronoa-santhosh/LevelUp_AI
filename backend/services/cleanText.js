export function cleanText(text) {

  return text

    .replace(/Page\s+\d+\s+of\s+\d+/gi, "")

    .replace(/\|/g, " ")

    .replace(/\b[A-Z]{2,}\d+[A-Z]*\b/g, " ")

    .replace(/\b(GIR|PC|ELR|PE\/OE)\b/g, " ")

    .replace(/[^\x20-\x7E\n]/g, " ")

    .replace(/\s+/g, " ")

    .replace(/\s{2,}/g, " ")

    .trim()  
    .replace(
    /PO1 PO2 PO3 PO4 PO5 PO6 PO7 PO8 PO9 PO10 PO11 PO12/gi,
    ""
  )
.replace(
  /Mapping of Programme Outcomes with Course Outcomes/gi,
  ""
);


}