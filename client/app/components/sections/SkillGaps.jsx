"use client";

import React from "react";

import CareerHeader from "./CareerHeader";

export default function SkillGaps({ analysis }) {

  return (

    <div className="space-y-8">

      <CareerHeader
        title="Critical Skill Gaps"
        description="Industry-required competencies currently missing from your academic profile."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {analysis?.critical_gaps?.map((gap, i) => (

          <div
            key={i}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >

            {/* Header */}
            <div className="flex items-start justify-between mb-5">

              <div>

                <h2 className="text-xl font-bold text-slate-900">

                  {gap.skill}

                </h2>

                <p className="text-sm text-slate-500 mt-1">

                  {gap.category}

                </p>

              </div>

              <span className="px-4 py-2 rounded-full text-xs font-bold bg-red-100 text-red-600">

                {gap.priority} Priority

              </span>

            </div>

            {/* Why Important */}
            <div className="mb-6">

              <h3 className="font-semibold text-slate-800 mb-2">

                Why This Matters

              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">

                {gap.industry_importance}

              </p>

            </div>

            {/* Upskilling */}
            <div className="mb-6">

              <h3 className="font-semibold text-slate-800 mb-2">

                Recommended Upskilling Path

              </h3>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-blue-700">

                {gap.upskilling_path}

              </div>

            </div>

            {/* Platforms */}
            <div className="mb-6">

              <h3 className="font-semibold text-slate-800 mb-3">

                Learning Platforms

              </h3>

              <div className="flex flex-wrap gap-2">

                {gap.course_recommendations?.platforms?.map((platform, idx) => (

                  <div
                    key={idx}
                    className="px-3 py-2 bg-slate-100 rounded-xl text-sm font-medium text-slate-700"
                  >

                    {platform}

                  </div>

                ))}

              </div>

            </div>

            {/* Search */}
            <div>

              <h3 className="font-semibold text-slate-800 mb-2">

                Suggested Search Keyword

              </h3>

              <div className="bg-slate-100 rounded-2xl p-4 font-mono text-sm text-slate-700">

                {gap.course_recommendations?.search_keyword}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}