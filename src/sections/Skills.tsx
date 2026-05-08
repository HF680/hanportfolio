import { useEffect, useRef, useState } from "react";

const networkingSkills = [
  { name: "IP Addressing & Subnetting", level: 90 },
  { name: "MikroTik RouterOS", level: 88 },
  { name: "Sistem Hotspot & Autentikasi", level: 85 },
  { name: "Routing Statis & Dinamis (OSPF)", level: 80 },
  { name: "Konfigurasi VLAN", level: 78 },
  { name: "Web Proxy & Filtering", level: 75 },
  { name: "Troubleshooting Jaringan", level: 85 },
];

const tools = [
  { name: "Winbox", icon: "🔧" },
  { name: "MikroTik RouterOS", icon: "📡" },
  { name: "Cisco Packet Tracer", icon: "🖧" },
  { name: "VirtualBox", icon: "💻" },
  { name: "PNETlab", icon: "🧪" },
  { name: "GitHub Pages", icon: "⚡" },
  { name: "Cloudflare Workers", icon: "☁️" },
];

function SkillBar({ name, level, visible }: { name: string; level: number; visible: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-[#9ca3af] group-hover:text-[#e2e8f0] transition-colors">{name}</span>
        <span className="font-mono text-xs text-[#00d4aa] ml-2 flex-shrink-0">{level}%</span>
      </div>
      <div className="h-1 bg-[#1e2530] rounded-none overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#00d4aa] to-[#00b894] transition-all duration-1000 ease-out" style={{ width: visible ? `${level}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className={`py-16 lg:py-28 bg-[#0d1117] section-transition ${visible ? "section-visible" : "section-hidden"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#00d4aa] tracking-widest">02 /</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Keahlian Teknis</h2>
        </div>
        <p className="text-[#6b7280] font-body mb-10 lg:mb-14 max-w-xl text-sm sm:text-base">
          Dibangun melalui implementasi langsung di lapangan, bukan sekadar teori.
        </p>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-1 h-4 bg-[#00d4aa]" />
              <h3 className="font-display text-lg font-semibold text-[#e2e8f0]">Jaringan</h3>
            </div>
            <div className="space-y-5">
              {networkingSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} visible={visible} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-1 h-4 bg-[#00d4aa]" />
              <h3 className="font-display text-lg font-semibold text-[#e2e8f0]">Tools & Platform</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-3 bg-[#111418] border border-[#1e2530] px-4 py-3 card-glow min-w-0">
                  <span className="text-lg flex-shrink-0">{tool.icon}</span>
                  <span className="font-body text-sm text-[#9ca3af] truncate">{tool.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 sm:mt-8 bg-[#111418] border border-[#1e2530] p-4 sm:p-5">
              <p className="font-mono text-xs text-[#4a5568] mb-4 tracking-widest uppercase">Kursus Selesai</p>
              <div className="flex flex-wrap gap-2">
                {["Dasar Jaringan", "Linux Fundamentals", "Dasar MikroTik", "Simulasi PNETlab", "Dasar Cisco"].map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
