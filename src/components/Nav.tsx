import { useState } from "react";

interface NavProps {
  scrollY: number;
}

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Prestasi", href: "#achievements" },
  { label: "Kontak", href: "#contact" },
];

export default function Nav({ scrollY }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 60;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0c0f]/90 backdrop-blur-md border-b border-[#1e2530]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-bold tracking-wider">
          <span className="text-[#00d4aa]">HAN</span>
          <span className="text-[#4a5568]">.NET</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-mono text-xs tracking-widest text-[#6b7280] hover:text-[#00d4aa] transition-colors duration-200 uppercase">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#projects" className="hidden md:inline-flex items-center gap-2 font-mono text-xs text-[#00d4aa] border border-[#00d4aa]/30 px-4 py-2 hover:bg-[#00d4aa]/10 transition-all duration-200">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse"></span>
          Lihat Proyek
        </a>
        <button className="md:hidden text-[#6b7280] hover:text-[#00d4aa]" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-[#1e2530] px-6 py-4">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-mono text-xs tracking-widest text-[#6b7280] hover:text-[#00d4aa] uppercase" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
