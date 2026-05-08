import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const automations = [
  { icon: "📅", title: "Appointment Scheduling", desc: "AI books, confirms, and reschedules jobs automatically. Customers self-book 24/7 without calling your office." },
  { icon: "📱", title: "Missed-Call Text-Back", desc: "Every missed call gets an instant automated text response — so you never lose a lead to a competitor who picked up." },
  { icon: "📄", title: "Invoice Follow-Up", desc: "Automated payment reminders via text and email — escalating until paid, without anyone on your team lifting a finger." },
  { icon: "✅", title: "Job Status Updates", desc: "Customers get automatic updates when a tech is on the way, job is complete, and follow-up is scheduled." },
  { icon: "📋", title: "New Lead Intake", desc: "AI captures, qualifies, and routes new leads from your website and social media automatically." },
  { icon: "📊", title: "Reporting & Dashboards", desc: "Weekly summaries of jobs, revenue, and leads — delivered automatically without you pulling reports." },
];

const marketingItems = [
  { icon: "⭐", title: "Review Request Automation", desc: "Text and email every customer after job completion with a one-tap link to leave a Google review. Most clients 3× their review count in 90 days." },
  { icon: "📧", title: "Email Drip Campaigns", desc: "Automated email sequences that nurture leads over days and weeks — keeping your business top-of-mind without manual effort." },
  { icon: "📍", title: "Google Business Updates", desc: "Weekly posts to your Google Business profile, scheduled and published automatically to boost local SEO." },
  { icon: "🔄", title: "Referral Follow-Up", desc: "Automated messages to past customers asking for referrals — with a built-in incentive flow that tracks who referred who." },
  { icon: "💬", title: "Social Media Scheduling", desc: "AI-generated posts scheduled and published across your social channels consistently, even when you're on a job." },
  { icon: "🎯", title: "Re-Engagement Campaigns", desc: "Automated sequences targeting customers who haven't booked in 6+ months — turning dormant contacts into repeat business." },
];

const beforeAfter = [
  { task: "Appointment scheduling", before: "2–3 hrs/day on calls", after: "Fully automated" },
  { task: "Invoice follow-ups", before: "Manual calls & emails", after: "Auto-escalating reminders" },
  { task: "Review requests", before: "Rarely asked", after: "100% of customers asked" },
  { task: "Lead response time", before: "Hours to days", after: "Under 2 minutes" },
  { task: "Marketing posts", before: "Inconsistent, sporadic", after: "Automated weekly cadence" },
  { task: "Status updates", before: "Customers call to check in", after: "Auto-sent at each stage" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#0a0a0a]">
        <Navbar variant="dark" />
      </div>

      {/* Hero */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#F5B420]/10 text-[#F5B420] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            What We Do
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl font-black text-white mb-6">
            AI automation built for your business.
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don&apos;t sell software. We build custom AI systems that plug into how your business already works — and handle the tedious stuff automatically.
          </p>
        </div>
      </section>

      {/* Process Automation */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#F5B420] text-sm font-bold uppercase tracking-widest mb-3">Process Automation</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-black text-[#0a0a0a] mb-4">
            Automate the work that slows you down.
          </h2>
          <p className="text-slate-500 text-lg mb-12 max-w-2xl">
            Every hour your team spends on admin is an hour not spent on billable work. We eliminate that waste.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((a) => (
              <div key={a.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <span className="text-3xl mb-4 block">{a.icon}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2">{a.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#F5B420] text-sm font-bold uppercase tracking-widest mb-3 text-center">The Difference</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-black text-white mb-12 text-center">
            Before vs. After automation.
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left text-slate-400 font-medium px-6 py-4">Task</th>
                  <th className="text-left text-red-400 font-medium px-6 py-4">Before</th>
                  <th className="text-left text-[#F5B420] font-medium px-6 py-4">After KeepGitnIt</th>
                </tr>
              </thead>
              <tbody>
                {beforeAfter.map((row, i) => (
                  <tr key={row.task} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                    <td className="text-white font-medium px-6 py-4">{row.task}</td>
                    <td className="text-slate-500 px-6 py-4">{row.before}</td>
                    <td className="text-[#F5B420] font-semibold px-6 py-4">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROI callout */}
      <section className="bg-[#F5B420] py-14 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-3xl font-black text-black">A 3-person HVAC company saves an estimated</p>
            <p className="font-serif text-5xl font-black text-black">$2,400 / month</p>
            <p className="text-black/70 mt-1">by automating scheduling, follow-ups, and review collection.</p>
          </div>
          <Link
            href="/roi-calculator"
            className="flex-shrink-0 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-[#111] transition-colors"
          >
            Calculate Your ROI →
          </Link>
        </div>
      </section>

      {/* Automated Marketing */}
      <section id="marketing" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#F5B420] text-sm font-bold uppercase tracking-widest mb-3">Automated Marketing</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-black text-[#0a0a0a] mb-4">
            Marketing that runs while you work.
          </h2>
          <p className="text-slate-500 text-lg mb-12 max-w-2xl">
            Stop letting your marketing go quiet when you get busy. We build systems that keep your brand active 24/7.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingItems.map((m) => (
              <div key={m.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <span className="text-3xl mb-4 block">{m.icon}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-black text-white mb-5">
            Let&apos;s find your use case.
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Book a free call. We&apos;ll audit your operations and tell you exactly which automations would have the biggest impact.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F5B420] hover:bg-[#D99B10] text-black font-bold px-10 py-4 rounded-full transition-colors"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
