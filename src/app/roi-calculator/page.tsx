import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoiCalculator from "./RoiCalculator";

export const metadata = {
  title: "ROI Calculator — KeepGitnIt",
  description: "Calculate how much money AI automation could save your local service business every month.",
};

export default function RoiCalculatorPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#0a0a0a]">
        <Navbar variant="dark" />
      </div>

      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#F5B420]/10 text-[#F5B420] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            ROI Calculator
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl font-black text-white mb-4">
            How much is manual work costing you?
          </h1>
          <p className="text-slate-400 text-lg">
            Move the sliders to see your estimated savings. Most clients break even within 60 days.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <RoiCalculator />
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-black text-[#0a0a0a] mb-8 text-center">What our numbers are based on</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📊", title: "Industry data", desc: "Automation benchmarks from HVAC, plumbing, landscaping, and cleaning businesses of 1–20 employees." },
              { icon: "🔧", title: "Real implementations", desc: "Numbers based on actual systems we've built — not marketing estimates." },
              { icon: "🎯", title: "Conservative estimates", desc: "We use 70% reduction in manual time. Many clients see 85%+." },
            ].map((c) => (
              <div key={c.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
