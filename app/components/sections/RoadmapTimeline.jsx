"use client";

import React from "react";

import {
  Calendar,
  GraduationCap,
  Briefcase,
} from "lucide-react";

import CareerHeader from "./CareerHeader";

export default function RoadmapTimeline({ analysis }) {

  return (

    <div className="space-y-10">

      <CareerHeader
        title="Career Roadmap"
        description="A year-by-year AI-generated trajectory to maximize your industry readiness and career growth."
      />

      <div className="relative border-l-2 border-blue-200 ml-4 space-y-10">

        {analysis?.career_trajectory?.map((year, i) => (

          <div
            key={i}
            className="relative pl-10"
          >

            {/* Timeline Dot */}
            <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md" />

            {/* Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">

              {/* Header */}
              <div className="flex items-start justify-between mb-6">

                <div>

                  <h2 className="text-2xl font-bold text-slate-900">

                    {year.year}

                  </h2>

                  <p className="text-slate-500 mt-1">

                    {year.focus}

                  </p>

                </div>

                <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl">

                  <Calendar size={20} />

                </div>

              </div>

              {/* Milestones */}
              <div className="mb-6">

                <h3 className="font-semibold mb-3 text-slate-800">

                  Milestones

                </h3>

                <div className="space-y-2">

                  {year.milestones?.map((item, idx) => (

                    <div
                      key={idx}
                      className="bg-slate-50 rounded-xl px-4 py-3 text-sm text-slate-700"
                    >

                      {item}

                    </div>

                  ))}

                </div>

              </div>

              {/* Certifications */}
              <div className="mb-6">

                <div className="flex items-center gap-2 mb-3">

                  <GraduationCap
                    size={16}
                    className="text-purple-500"
                  />

                  <h3 className="font-semibold text-slate-800">

                    Certifications

                  </h3>

                </div>

                <div className="flex flex-wrap gap-2">

                  {year.certifications?.map((cert, idx) => (

                    <div
                      key={idx}
                      className="px-3 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium"
                    >

                      {cert}

                    </div>

                  ))}

                </div>

              </div>

              {/* Tool Mastery */}
              <div className="mb-6">

                <h3 className="font-semibold mb-3 text-slate-800">

                  Tool Mastery

                </h3>

                <div className="flex flex-wrap gap-2">

                  {year.tool_mastery?.map((tool, idx) => (

                    <div
                      key={idx}
                      className="px-3 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium"
                    >

                      {tool}

                    </div>

                  ))}

                </div>

              </div>

              {/* Placement Strategy */}
              <div>

                <div className="flex items-center gap-2 mb-3">

                  <Briefcase
                    size={16}
                    className="text-emerald-500"
                  />

                  <h3 className="font-semibold text-slate-800">

                    Placement Strategy

                  </h3>

                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-sm text-emerald-700">

                  {year.placement_strategy}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}   