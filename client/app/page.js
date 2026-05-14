"use client";

import React, { useState, useEffect } from "react";
import { Target } from "lucide-react";
import { useRouter } from "next/navigation";

import UploadSection from "./components/UploadSection";
import Sidebar from "./components/Sidebar";
import CareerResults from "./components/CareerResults";

export default function CareerMapper() {
  const router = useRouter();

  const [activePage, setActivePage] = useState("career");
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check login token
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    // Prevent accidental refresh close
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

  const handleLogout = () => {
    localStorage.removeItem("token");

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] text-slate-900">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Left */}
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

            {/* Navigation */}
            <div className="flex items-center gap-3 pl-10">

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

          {/* Right */}
          <div>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-medium transition"
            >
              Logout
            </button>

          </div>

        </div>

      </nav>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {!data ? (

          <UploadSection setData={setData} />

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <Sidebar data={data} />
            </div>

            {/* Results */}
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