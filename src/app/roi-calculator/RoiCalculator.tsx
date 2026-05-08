"use client";
import { useState } from "react";
import Link from "next/link";

export default function RoiCalculator() {
  const [employees, setEmployees] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);

  const weeklyWaste = employees * hoursPerWeek * hourlyRate;
  const monthlyWaste = weeklyWaste * 4.33;
  const monthlySavings = Math.round(monthlyWaste * 0.7);
  const annualSavings = monthlySavings * 12;

  const formatDollars = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <h2 className="font-bold text-[#0a0a0a] text-xl mb-8">Tell us about your business</h2>

        <div className="space-y-8">
          {/* Employees */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-slate-700">Number of employees</label>
              <span className="text-lg font-black text-[#0a0a0a]">{employees}</span>
            </div>
            <input
              type="range" min={1} max={20} step={1}
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full accent-[#F5B420]"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span>20</span></div>
          </div>

          {/* Hours/week on admin */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-slate-700">Admin hours per employee, per week</label>
              <span className="text-lg font-black text-[#0a0a0a]">{hoursPerWeek} hrs</span>
            </div>
            <input
              type="range" min={2} max={40} step={1}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full accent-[#F5B420]"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>2 hrs</span><span>40 hrs</span></div>
          </div>

          {/* Hourly labor cost */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-slate-700">Average hourly labor cost</label>
              <span className="text-lg font-black text-[#0a0a0a]">{formatDollars(hourlyRate)}/hr</span>
            </div>
            <input
              type="range" min={15} max={100} step={5}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-[#F5B420]"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1"><span>$15/hr</span><span>$100/hr</span></div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="bg-[#0a0a0a] rounded-2xl p-8 text-white">
          <p className="text-slate-400 text-sm mb-1">What admin is currently costing you</p>
          <p className="font-serif text-4xl font-black text-white">{formatDollars(monthlyWaste)}<span className="text-lg text-slate-400 font-normal">/month</span></p>
          <p className="text-slate-500 text-xs mt-2">Based on {employees} employee{employees > 1 ? "s" : ""} × {hoursPerWeek} hrs/week × {formatDollars(hourlyRate)}/hr</p>
        </div>

        <div className="bg-[#F5B420] rounded-2xl p-8">
          <p className="text-black/70 text-sm mb-1">Estimated monthly savings with AI</p>
          <p className="font-serif text-4xl font-black text-black">{formatDollars(monthlySavings)}<span className="text-lg text-black/60 font-normal">/month</span></p>
          <p className="text-black/60 text-xs mt-2">Based on typical 70% reduction in manual admin time</p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <p className="text-slate-500 text-sm mb-1">Annual savings potential</p>
          <p className="font-serif text-4xl font-black text-[#0a0a0a]">{formatDollars(annualSavings)}</p>
          <p className="text-slate-400 text-xs mt-2">That&apos;s money going back into your business, not into manual labor.</p>
        </div>

        <div className="bg-white border-2 border-[#F5B420] rounded-2xl p-6 text-center">
          <p className="font-bold text-[#0a0a0a] mb-2">See exactly what this looks like for your business</p>
          <p className="text-slate-500 text-sm mb-4">
            Book a free call and we&apos;ll do a custom audit — specific tools, specific automations, specific savings.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F5B420] hover:bg-[#D99B10] text-black font-bold px-8 py-3 rounded-full transition-colors text-sm"
          >
            Get My Custom ROI Report
          </Link>
        </div>
      </div>
    </div>
  );
}
