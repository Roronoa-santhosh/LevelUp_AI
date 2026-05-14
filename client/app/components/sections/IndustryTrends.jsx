"use client";

import React from "react";
import { TrendingUp, Sparkles, AlertTriangle } from "lucide-react";

import CareerHeader from "./CareerHeader";

export default function IndustryTrends({ analysis }) {

  const trends = analysis?.industry_trends;

  return (

    <div className="space-y-10">

      <CareerHeader
        title="Industry Intelligence"
        description="AI-powered analysis of emerging technologies, high-value domains, and declining practices shaping the future industry landscape."
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* High Value Topics */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl">

              <TrendingUp size={20} />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                High Value Topics
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Areas with strong market demand.
              </p>

            </div>

          </div>

          <div className="space-y-3">

            {trends?.high_value_topics?.map((topic, i) => (

              <div
                key={i}
                className="bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-4 rounded-2xl text-sm font-medium"
              >

                {topic}

              </div>

            ))}

          </div>

        </div>

        {/* Emerging Skills */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">

              <Sparkles size={20} />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                Emerging Skills
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Future-focused technologies and capabilities.
              </p>

            </div>

          </div>

          <div className="space-y-3">

            {trends?.emerging_skills?.map((skill, i) => (

              <div
                key={i}
                className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-4 rounded-2xl text-sm font-medium"
              >

                {skill}

              </div>

            ))}

          </div>

        </div>

        {/* Declining Topics */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-red-100 text-red-600 p-3 rounded-2xl">

              <AlertTriangle size={20} />

            </div>

            <div>

              <h2 className="text-xl font-bold">
                Declining Practices
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Legacy approaches losing industry relevance.
              </p>

            </div>

          </div>

          <div className="space-y-3">

            {trends?.outdated_topics?.map((topic, i) => (

              <div
                key={i}
                className="bg-red-50 border border-red-100 text-red-700 px-4 py-4 rounded-2xl text-sm font-medium"
              >

                {topic}

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}