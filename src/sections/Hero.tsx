import { useEffect, useState } from "react";

const typedLines = [
  "MikroTik RouterOS",
  "Implementasi Jaringan Nyata",
  "Infrastruktur Hotspot",
  "Konfigurasi VLAN & Routing",
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const current = typedLines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex((c) => c + 1); }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex((c) => c - 1); }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setLineIndex((i) => (i + 1) % typedLines.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#00d4aa]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#00d4aa]/3 blur-[80px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4aa]/40 to-transparent" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.06] hidden lg:block">
        <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
          {[[260,260,16],[130,130,10],[390,130,10],[130,390,10],[390,390,10],[200,200,7],[320,200,7],[200,320,7],[320,320,7],[65,260,6],[455,260,6],[260,65,6],[260,455,6]].map(([cx,cy,r],i)=><circle key={i} cx={cx} cy={cy} r={r} fill="#00d4aa"/>)}
          {[[260,260,130,130],[260,260,390,130],[260,260,130,390],[260,260,390,390],[260,260,200,200],[260,260,320,200],[260,260,200,320],[260,260,320,320],[130,130,65,260],[130,130,260,65],[390,130,455,260],[390,130,260,65],[130,390,65,260],[130,390,260,455],[390,390,455,260],[390,390,260,455],[200,200,130,130],[320,200,390,130],[200,320,130,390],[320,320,390,390]].map(([x1,y1,x2,y2],i)=><line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00d4aa" strokeWidth="1"/>)}
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-20 w-full">
        <div className="fade-up-1 inline-flex items-center gap-2 font-mono text-xs text-[#6b7280] mb-6 sm:mb-8 border border-[#1e2530] px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
          TERBUKA UNTUK PELUANG BARU
        </div>
        <h1 className="fade-up-2 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6">
          <span className="block text-[#e2e8f0]">Calon</span>
          <span className="block text-[#00d4aa]">Network</span>
          <span className="block text-[#e2e8f0]">Engineer</span>
        </h1>
        <div className="fade-up-3 font-mono text-sm sm:text-base text-[#6b7280] mb-4 h-6">
          <span className="text-[#00d4aa]">&gt; </span>
          <span>{displayed}</span>
          <span className="cursor-blink text-[#00d4aa]">█</span>
        </div>
        <p className="fade-up-4 max-w-xl text-[#9ca3af] text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10 font-body">
          Berpengalaman dalam implementasi jaringan nyata, konfigurasi MikroTik,
          dan deployment sistem hotspot. Membangun infrastruktur jaringan dari nol hingga produksi.
        </p>
        <div className="fade-up-5 flex flex-wrap gap-3 sm:gap-4">
          <a href="#projects" className="inline-flex items-center gap-3 bg-[#00d4aa] text-[#0a0c0f] font-display font-bold text-sm px-6 sm:px-7 py-3 sm:py-3.5 hover:bg-[#00b894] transition-colors duration-200">
            Lihat Proyek Saya
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-3 border border-[#1e2530] text-[#9ca3af] font-display font-medium text-sm px-6 sm:px-7 py-3 sm:py-3.5 hover:border-[#00d4aa]/40 hover:text-[#e2e8f0] transition-all duration-200">
            Hubungi Saya
          </a>
        </div>
        <div className="fade-up-6 flex flex-wrap gap-5 sm:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#1e2530]">
          {[{num:"3+",label:"Proyek Nyata"},{num:"3×",label:"Juara S2C"},{num:"5+",label:"Sertifikasi"},{num:"2+",label:"Sekolah Dilayani"}].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-xl sm:text-2xl font-bold text-[#00d4aa]">{stat.num}</p>
              <p className="font-mono text-xs text-[#4a5568] uppercase tracking-wider mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0c0f] to-transparent" />
    </section>
  );
}
