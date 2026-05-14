"use client";

import React, { useState, useEffect } from "react";
import { Target } from "lucide-react";


import UploadSection from "./components/UploadSection";
import Sidebar from "./components/Sidebar";
import CareerResults from "./components/CareerResults";

export default function CareerMapper() {
  const [activePage, setActivePage] = useState("career");
  const [data, setData] = useState(null);
  useEffect(() => {

  const handleBeforeUnload = (e) => {

    e.preventDefault();

    e.returnValue = "";

  };

  window.addEventListener(
    "beforeunload",
    handleBeforeUnload
  );

  return () => {

    window.removeEventListener(
      "beforeunload",
      handleBeforeUnload
    );

  };

}, []);

  return (
    <div className="min-h-screen bg-[#F6F8FC] text-slate-900">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200">

              <Target size={20} />

            </div>
            

            <div>

              <h1 className="font-bold text-xl tracking-tight">
                LevelUp AI
              </h1>

              <p className="text-xs text-slate-500">
                AI Career Intelligence
              </p>

            </div>
            <div className="flex items-center gap-3 pl-30 border-l border-slate-20">

  {[
    { id: "career", label: "AI Career Map" },
    { id: "gaps", label: "Skill Gaps" },
    { id: "trends", label: "Industry Trends" },
    { id: "projects", label: "Projects" },
    { id: "roadmap", label: "Roadmap" },
  ].map((item) => (

    <button
      key={item.id}
      onClick={() => setActivePage(item.id)}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
      ${
        activePage === item.id
          ? "bg-blue-600 text-white"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >

      {item.label}

    </button>

  ))}

</div>

          </div>

        </div>

      </nav>

      {/* Page */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {!data ? (

          <UploadSection setData={setData} />

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* LEFT */}
            <div className="lg:col-span-4">

              <Sidebar data={data} />

            </div>

            {/* RIGHT */}
            <div className="lg:col-span-8">

              <CareerResults
                  data={data}
                  activePage={activePage}
                />

            </div>

          </div>

        )}

      </main>

    </div>
  );
}