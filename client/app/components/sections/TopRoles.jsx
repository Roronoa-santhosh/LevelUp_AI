"use client";

import {
  Briefcase,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import CareerHeader from "./CareerHeader";
export default function TopRoles({ analysis }) {

  return (

    

    <section>
        <CareerHeader
  title="AI Career Map"
  description="Roles aligned with your academic strengths, industry demand, and future career trajectory."
/>

      {/* Header */}
      <div className="mb-8">

        <div className="flex items-center gap-3 mb-3">

          <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">

            <Briefcase size={20} />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              AI Career Matches
            </h2>

            <p className="text-slate-500 text-sm mt-1">
              Roles aligned with your academic strengths and market demand.
            </p>

          </div>

        </div>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {analysis?.top_roles?.map((role, i) => (

          <div
            key={i}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            {/* Top */}
            <div className="flex items-start justify-between mb-5">

              <div>

                <h3 className="text-xl font-bold text-slate-900">

                  {role.title}

                </h3>

                <p className="text-sm text-slate-500 mt-1">

                  {role.salary_range}

                </p>

              </div>

              <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-2xl text-sm font-bold">

                {role.match_percentage}% Match

              </div>

            </div>

            {/* Demand */}
            <div className="flex items-center gap-2 mb-4">

              <TrendingUp
                size={16}
                className="text-emerald-500"
              />

              <span className="text-sm font-medium text-emerald-600">

                {role.market_demand} Demand

              </span>

            </div>

            {/* Reason */}
            <p className="text-sm leading-relaxed text-slate-600">

              {role.alignment_reason}

            </p>

            {/* Footer */}
            <div className="mt-6 pt-5 border-t border-slate-100 flex justify-between items-center">

              <span className="text-xs text-slate-400">

                AI Career Alignment

              </span>

    
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}