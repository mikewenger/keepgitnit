import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const YOUTUBE_VIDEO_ID = "REPLACE_WITH_YOUR_VIDEO_ID";

const painPoints = [
  { icon: "📅", title: "Manual Scheduling", desc: "Hours spent calling, texting, and rescheduling appointments that a bot could handle in seconds." },
  { icon: "📄", title: "Chasing Invoices", desc: "Following up on unpaid invoices manually instead of having automated reminders do it for you." },
  { icon: "📞", title: "Missed Follow-Ups", desc: "Leads going cold because no one had time to send a follow-up text or email after the job." },
  { icon: "📣", title: "Inconsistent Marketing", desc: "Marketing that only happens when you're not busy — which means it barely happens at all." },
  { icon: "⭐", title: "No Review Strategy", desc: "Hoping customers leave reviews instead of having an automatic ask sent right after the job." },
  { icon: "🕐", title: "Admin Eating Your Day", desc: "Spending 3–4 hours a day on tasks that don't make you money — data entry, status updates, reports." },
];

const pillars = [
  {
    icon: "⚙️",
    title: "Process Automation",
    desc: "We map your most time-consuming workflows and build AI systems that handle them automatically — from booking to billing.",
    href: "/services",
  },
  {
    icon: "📈",
    title: "Measurable ROI",
    desc: "Every system we build comes with a clear dollar value. Most clients recoup the cost within 60 days.",
    href: "/roi-calculator",
  },
  {
    icon: "📲",
    title: "Automated Marketing",
    desc: "Review requests, follow-up sequences, missed-call text-back, and Google Business updates — running 24/7 without you.",
    href: "/services#marketing",
  },
];

const stats = [
  { number: "15+", label: "Hours saved per week" },
  { number: "10×", label: "Follow-up rate" },
  { number: "60", label: "Days to break even" },
  { number: "24/7", label: "Your business, automated" },
];

const industries = ["HVAC", "Plumbing", "Landscaping", "Cleaning", "Pest Control", "Electrical", "Roofing", "Pool Service"];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-[#0a0a0a] min-h-screen overflow-hidden">
        <Navbar variant="dark" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-10 pt-12 pb-0 min-h-[calc(100vh-80px)]">
          {/* Left — headline */}
          <div className="flex-1 pt-8 lg:pt-16">
            <span className="inline-block bg-[#F5B420]/10 text-[#F5B420] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              AI Consultant · Let&apos;s Find Your Use Case
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Stop doing it manually.
              <br />
              <span className="text-[#F5B420]">Let AI keep your business running tight.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-lg mb-10 leading-relaxed">
              We find the repetitive tasks draining your time and money — then build AI systems that handle them automatically. Scheduling, follow-ups, invoicing, marketing. All of it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#F5B420] hover:bg-[#D99B10] text-black font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                Book a Free Call
              </Link>
              <Link
                href="/services"
                className="border border-white/20 text-white hover:bg-white/5 font-medium px-7 py-3.5 rounded-full transition-colors text-sm"
              >
                See Our Services →
              </Link>
            </div>
          </div>

          {/* Right — YouTube video card (portrait 9:16, overflows below fold) */}
          <div className="hidden lg:block flex-shrink-0 w-[320px] xl:w-[360px] self-start mt-8">
            <div
              className="w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/80"
              style={{ aspectRatio: "9/16" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                title="KeepGitnIt — AI Automation for Local Businesses"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#F5B420] text-sm font-bold uppercase tracking-widest text-center mb-3">Sound Familiar?</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-black text-center text-[#0a0a0a] mb-12">
            These are the problems we fix.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 PILLARS ── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#F5B420] text-sm font-bold uppercase tracking-widest text-center mb-3">What We Do</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-black text-white text-center mb-12">
            Three ways we grow your business.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 transition-all group"
              >
                <span className="text-4xl mb-5 block">{p.icon}</span>
                <h3 className="font-bold text-white text-xl mb-3 group-hover:text-[#F5B420] transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                <span className="text-[#F5B420] text-sm font-medium mt-4 block">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#F5B420] text-sm font-bold uppercase tracking-widest text-center mb-3">The Process</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-black text-center text-[#0a0a0a] mb-14">
            How it works — 3 steps.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Audit", desc: "We dig into your daily operations and identify every task costing you time and money unnecessarily." },
              { step: "02", title: "Build", desc: "We design and deploy AI automations tailored to your business — no generic templates, no cookie-cutter tools." },
              { step: "03", title: "Automate", desc: "Your systems go live and run around the clock. We monitor, tweak, and scale as you grow." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-[#F5B420] rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="font-black text-black text-sm">{s.step}</span>
                </div>
                <h3 className="font-bold text-[#0a0a0a] text-xl mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI STATS ── */}
      <section className="bg-[#F5B420] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-5xl font-black text-black mb-1">{s.number}</p>
                <p className="text-black/70 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#F5B420] text-sm font-bold uppercase tracking-widest mb-3">Who We Help</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-black text-[#0a0a0a] mb-10">
            Built for local service businesses.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="bg-slate-100 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-full">
                {ind}
              </span>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Don&apos;t see your industry? We work with any business doing repetitive admin work.
          </p>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-black text-white mb-5">
            Ready to get your time back?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Book a free 30-minute call. We&apos;ll find your use case and show you exactly what automation would save you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F5B420] hover:bg-[#D99B10] text-black font-bold px-10 py-4 rounded-full transition-colors text-base"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
