import { useEffect, useRef, useState } from "react";

const competitions = [
  { year: "Kelas 10", place: "1st", event: "Kompetisi S2C", color: "#00d4aa" },
  { year: "Kelas 11", place: "2nd", event: "Kompetisi S2C", color: "#ffa502" },
  { year: "Kelas 12", place: "1st", event: "Kompetisi S2C", color: "#00d4aa" },
];

const certifications = [
  { name: "Dasar Jaringan Komputer", issuer: "ID-Networkers", icon: "🌐" },
  { name: "Linux Fundamentals", issuer: "ID-Networkers", icon: "🐧" },
  { name: "Dasar MikroTik", issuer: "ID-Networkers", icon: "📡" },
  { name: "Simulasi Jaringan (PNETlab)", issuer: "ID-Networkers", icon: "🧪" },
  { name: "Dasar Cisco", issuer: "ID-Networkers", icon: "🖧" },
];

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" ref={ref} className={`py-16 lg:py-28 bg-[#0d1117] section-transition ${visible ? "section-visible" : "section-hidden"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#00d4aa] tracking-widest">04 /</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Prestasi</h2>
        </div>
        <p className="text-[#6b7280] font-body mb-10 lg:mb-14 max-w-xl text-sm sm:text-base">
          Rekam jejak kompetisi dan pelatihan yang telah diselesaikan.
        </p>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-1 h-4 bg-[#00d4aa]" />
              <h3 className="font-display text-lg font-semibold text-[#e2e8f0]">Rekam Jejak Kompetisi</h3>
            </div>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-[#1e2530]" />
              <div className="space-y-6">
                {competitions.map((comp, i) => (
                  <div key={i} className={`relative pl-14 section-transition ${visible ? "section-visible" : "section-hidden"}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                    <div className="absolute left-3 top-3 w-4 h-4 rounded-full border-2 flex items-center justify-center" style={{ borderColor: comp.color, background: "#0d1117" }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: comp.color }} />
                    </div>
                    <div className="bg-[#111418] border border-[#1e2530] p-4 sm:p-5 card-glow">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-display font-bold text-[#e2e8f0] text-base sm:text-lg">{comp.event}</p>
                          <p className="font-mono text-xs text-[#6b7280] mt-0.5">{comp.year}</p>
                        </div>
                        <div className="font-display font-black text-2xl sm:text-3xl" style={{ color: comp.color }}>
                          #{comp.place.replace("st","").replace("nd","")}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 border mt-2" style={{ color: comp.color, borderColor: `${comp.color}40` }}>
                        Juara {comp.place === "1st" ? "1" : "2"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pl-14 mt-6">
                <div className="bg-[#111418] border border-[#00d4aa]/20 p-4">
                  <p className="font-mono text-xs text-[#00d4aa] mb-1">// rekam jejak 3 tahun</p>
                  <p className="text-sm text-[#9ca3af]">
                    Meraih posisi di kompetisi S2C selama tiga tahun berturut-turut di SMK, termasuk{" "}
                    <span className="text-[#00d4aa]">juara 1 berturut-turut</span> di kelas 10 dan kelas 12.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-1 h-4 bg-[#00d4aa]" />
              <h3 className="font-display text-lg font-semibold text-[#e2e8f0]">Sertifikasi & Kursus</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={i} className={`flex items-center gap-3 sm:gap-4 bg-[#111418] border border-[#1e2530] p-3 sm:p-4 card-glow section-transition ${visible ? "section-visible" : "section-hidden"}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0a0c0f] border border-[#1e2530] flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-sm font-medium text-[#e2e8f0] truncate">{cert.name}</p>
                    <p className="font-mono text-xs text-[#4a5568] mt-0.5">{cert.issuer}</p>
                  </div>
                  <div className="ml-auto flex-shrink-0">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
