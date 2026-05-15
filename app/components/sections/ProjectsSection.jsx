"use client";

import React from "react";

import {
  FolderKanban,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import CareerHeader from "./CareerHeader";

export default function ProjectsSection({ analysis }) {

  return (

    <div className="space-y-8">

      <CareerHeader
        title="Recommended Projects"
        description="AI-selected portfolio projects designed to strengthen your industry readiness and resume value."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {analysis?.recommended_projects?.map((project, i) => (

          <div
            key={i}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >

            {/* Header */}
            <div className="flex items-start justify-between mb-5">

              <div>

                <h2 className="text-xl font-bold text-slate-900">

                  {project.title}

                </h2>

                <p className="text-sm text-slate-500 mt-1">

                  {project.difficulty} Difficulty

                </p>

              </div>

              <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl">

                <FolderKanban size={20} />

              </div>

            </div>

            {/* Learning Outcome */}
            <div className="mb-6">

              <h3 className="font-semibold text-slate-800 mb-2">

                Learning Outcome

              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">

                {project.learning_outcome}

              </p>

            </div>

            {/* Resume Value */}
            <div className="mb-6">

              <h3 className="font-semibold text-slate-800 mb-2">

                Resume Value

              </h3>

              <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl p-4 text-sm">

                {project.resume_value}

              </div>

            </div>

            {/* Skills */}
            <div className="mb-6">

              <h3 className="font-semibold text-slate-800 mb-3">

                Skills Used

              </h3>

              <div className="flex flex-wrap gap-2">

                {project.skills_used?.map((skill, idx) => (

                  <div
                    key={idx}
                    className="px-3 py-2 bg-slate-100 rounded-xl text-sm font-medium"
                  >

                    {skill}

                  </div>

                ))}

              </div>

            </div>

            {/* Tools */}
            <div>

              <div className="flex items-center gap-2 mb-3">

                <Wrench size={16} className="text-amber-500" />

                <h3 className="font-semibold text-slate-800">

                  Suggested Tools

                </h3>

              </div>

              <div className="flex flex-wrap gap-2">

                {project.suggested_tools?.map((tool, idx) => (

                  <div
                    key={idx}
                    className="px-3 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium"
                  >

                    {tool}

                  </div>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}