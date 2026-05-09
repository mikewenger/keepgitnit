import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image src="/logo.png" alt="KeepGitnIt logo" width={64} height={64} className="rounded-full" />
            <span className="text-xl font-black tracking-tight">KeepGitnIt.Com</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            AI Consultant — Let&apos;s Find Your Use Case. We automate the tedious work so local service businesses can focus on growth.
          </p>
          <p className="text-slate-400 text-sm mt-4">
            <a href="mailto:mike@mikewenger.us" className="hover:text-[#F5B420] transition-colors">
              mike@mikewenger.us
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-xs uppercase tracking-widest text-slate-500">Services</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              ["Process Automation", "/services"],
              ["ROI Calculator", "/roi-calculator"],
              ["Automated Marketing", "/services#marketing"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-[#F5B420] transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-xs uppercase tracking-widest text-slate-500">Get Started</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/contact" className="hover:text-[#F5B420] transition-colors">Book a Free Call</Link></li>
            <li><Link href="/contact" className="hover:text-[#F5B420] transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-slate-600 py-4">
        &copy; {new Date().getFullYear()} KeepGitnIt.Com. All rights reserved.
      </div>
    </footer>
  );
}
