"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CALENDAR_EMBED_URL = "REPLACE_WITH_YOUR_CALENDLY_OR_GOOGLE_CALENDAR_URL";

const businessTypes = [
  "HVAC", "Plumbing", "Landscaping", "Cleaning / Janitorial",
  "Pest Control", "Electrical", "Roofing", "Pool Service",
  "General Contractor", "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", business: "", businessType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen">
      <div className="bg-[#0a0a0a]">
        <Navbar variant="dark" />
      </div>

      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#F5B420]/10 text-[#F5B420] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            Let&apos;s Talk
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl font-black text-white mb-4">
            Let&apos;s find your use case.
          </h1>
          <p className="text-slate-400 text-lg">
            Book a free 30-minute call or send us a message. We&apos;ll audit your operations and show you exactly what automation would save you.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h2 className="font-bold text-[#0a0a0a] text-xl mb-6">Send us a message</h2>

            {status === "success" ? (
              <div className="text-center py-12">
                <span className="text-5xl block mb-4">✅</span>
                <h3 className="font-bold text-[#0a0a0a] text-xl mb-2">Message sent!</h3>
                <p className="text-slate-500">We&apos;ll get back to you within one business day. Or book a call on the right to talk sooner.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your name</label>
                    <input
                      type="text" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B420]"
                      placeholder="Mike Johnson"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email" required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B420]"
                      placeholder="mike@yourbusiness.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Business name</label>
                  <input
                    type="text"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B420]"
                    placeholder="Johnson HVAC LLC"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Business type</label>
                  <select
                    value={form.businessType}
                    onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B420]"
                  >
                    <option value="">Select your industry</option>
                    {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">What&apos;s taking up most of your time?</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5B420] resize-none"
                    placeholder="e.g. scheduling takes 2 hours a day, we constantly miss follow-ups..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#F5B420] hover:bg-[#D99B10] disabled:opacity-60 text-black font-bold py-3 rounded-full transition-colors text-sm"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Calendar embed */}
          <div>
            <h2 className="font-bold text-[#0a0a0a] text-xl mb-6">Or book a time directly</h2>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm" style={{ minHeight: "600px" }}>
              {CALENDAR_EMBED_URL === "REPLACE_WITH_YOUR_CALENDLY_OR_GOOGLE_CALENDAR_URL" ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[600px] text-center px-8">
                  <span className="text-5xl mb-4">📅</span>
                  <h3 className="font-bold text-[#0a0a0a] text-lg mb-2">Booking calendar coming soon</h3>
                  <p className="text-slate-500 text-sm">
                    Add your Calendly or Google Calendar booking URL to{" "}
                    <code className="bg-slate-100 px-1 rounded text-xs">src/app/contact/page.tsx</code>
                  </p>
                </div>
              ) : (
                <iframe
                  src={CALENDAR_EMBED_URL}
                  className="w-full h-full"
                  style={{ minHeight: "600px", border: "none" }}
                  title="Book a call"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
