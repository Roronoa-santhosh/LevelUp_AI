"use client";

import React from "react";
import {
  Brain,
  Target,
  Wrench,
  GraduationCap,
} from "lucide-react";

export default function Sidebar({ data }) {

  const analysis = data?.analysis?.analysis;
  const metadata = data?.analysis?.metadata;

  return (

    <div className="space-y-6 sticky top-24">

      {/* Domain Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

        <div className="flex items-center gap-3 mb-4">

          <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
            <GraduationCap size={20} />
          </div>

          <div>

            <h2 className="font-bold text-lg">
              {metadata?.identified_field}
            </h2>

            <p className="text-sm text-slate-500">
              {metadata?.specialization}
            </p>

          </div>

        </div>

        <div className="mt-6">

          <div className="flex items-center justify-between mb-2">

            <span className="text-sm text-slate-500">
              Industry Readiness
            </span>

            <span className="font-bold text-blue-600">
              {analysis?.overall_readiness_score}%
            </span>

          </div>

          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">

            <div
              className="bg-blue-600 h-full rounded-full"
              style={{
                width: `${analysis?.overall_readiness_score || 0}%`,
              }}
            />

          </div>

        </div>

      </div>

      {/* Skills Breakdown */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

        <div className="flex items-center gap-2 mb-6">

          <Brain className="text-purple-500" size={20} />

          <h3 className="font-bold text-lg">
            Readiness Breakdown
          </h3>

        </div>

        <div className="space-y-5">

          {Object.entries(
            analysis?.readiness_breakdown || {}
          ).map(([key, value], i) => (

            <div key={i}>

              <div className="flex justify-between mb-2">

                <span className="text-sm capitalize text-slate-600">
                  {key.replaceAll("_", " ")}
                </span>

                <span className="text-sm font-bold">
                  {value}%
                </span>

              </div>

              <div className="w-full bg-slate-100 h-2 rounded-full">

                <div
                  className="bg-purple-500 h-full rounded-full"
                  style={{ width: `${value}%` }}
                />

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Tools */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">

        <div className="flex items-center gap-2 mb-5">

          <Wrench className="text-amber-500" size={20} />

          <h3 className="font-bold text-lg">
            Recommended Tools
          </h3>

        </div>

        <div className="flex flex-wrap gap-2">

          {analysis?.recommended_tools?.map((tool, i) => (

            <div
              key={i}
              className="px-3 py-2 bg-slate-100 rounded-xl text-sm font-medium text-slate-700"
            >

              {tool}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}