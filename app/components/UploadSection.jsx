"use client";

import React, { useState } from "react";
import { Upload, FileText } from "lucide-react";

import Api from "../utils/api";

export default function UploadSection({ setData }) {

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loadingStep, setLoadingStep] = useState("");

 const handleFileChange = (e) => {

  if (e.target.files) {

    const newFiles = Array.from(e.target.files);    
     if (selectedFiles.length > 10) {
    alert("Maximum 10 PDFs allowed");
    return;
  }

    setFiles((prev) => {

      const allFiles = [...prev, ...newFiles];

      const uniqueFiles = allFiles.filter(
        (file, index, self) =>
          index === self.findIndex((f) => f.name === file.name)
      );

      return uniqueFiles;
    });
  }
};

const startAnalysis = async () => {

  if (files.length === 0) return;

  setLoading(true);

  const formData = new FormData();

  files.forEach((file) => {
    formData.append("pdfs", file);
  });

  try {

    // STEP 1
    setLoadingStep("Uploading PDFs...");

    await Api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // STEP 2
    setLoadingStep("Extracting syllabus intelligence...");

    await new Promise((r) => setTimeout(r, 1200));

    // STEP 3
    setLoadingStep("Building vector embeddings...");

    await new Promise((r) => setTimeout(r, 1200));

    // STEP 4
    setLoadingStep("Matching industry demands...");

    await new Promise((r) => setTimeout(r, 1200));

    // STEP 5
    setLoadingStep("Generating AI career roadmap...");

    const analysisRes = await Api.get("/api/analyze");

    // STEP 6
    setLoadingStep("Finalizing report...");

    await new Promise((r) => setTimeout(r, 1000));

    setData(analysisRes.data);

  } catch (err) {

    console.error(err);

    alert("Analysis failed");

  } finally {

    setLoading(false);

    setLoadingStep("");

  }
};
  return (
    <div className="max-w-2xl mx-auto mt-12 text-center">

      <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">

        Map your <span className="text-blue-600">Syllabus</span> to a{" "}
        <span className="text-blue-600">Career.</span>

      </h1>

      <p className="text-lg text-slate-600 mb-10">
        Upload your semester PDFs. Our AI analyzes market demands to find your
        perfect industry fit.
      </p>

      {/* Upload Box */}
      <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-12 transition-all hover:border-blue-400 group shadow-sm">

        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
    <div className="relative flex items-center justify-center w-20 h-10 transition cursor-pointer ">

  <Upload className="text-blue-500 w-20 h-10 " />

  <input
    type="file"
    multiple
    accept=".pdf"
    onChange={handleFileChange}
    className="absolute inset-0 opacity-0 cursor-pointer"
  />
        </div>
        </div>

        <label
          htmlFor="file-upload"
          className="cursor-pointer block"
        >

          <span className="text-lg font-semibold text-slate-700">
            Click to upload PDFs
          </span>

          <p className="text-sm text-slate-400 mt-1">
            Upload one or multiple subjects
          </p>

        </label>

        {/* File Preview */}
        {files.length > 0 && (

          <div className="mt-6 flex flex-wrap gap-2 justify-center">

            {files.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-600 border"
              >

                <FileText size={12} />

                {f.name}

              </div>
            ))}

          </div>

        )}

        {/* Button */}
        <button
          onClick={startAnalysis}
          disabled={files.length === 0 || loading}
          className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-lg shadow-blue-200"
        >

         {loading
  ? loadingStep
  : "Generate Career Map"}
        </button>

      </div>

    </div>
  );
}