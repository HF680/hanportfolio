import { useEffect, useRef, useState } from "react";

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ src, label, onClose }: { src: string; label: string; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-9 right-0 font-mono text-xs text-[#6b7280] hover:text-[#00d4aa] flex items-center gap-2 transition-colors">
          ESC untuk tutup ✕
        </button>
        <img src={src} alt={label} className="w-full max-h-[82vh] object-contain border border-[#1e2530]" />
        <p className="mt-3 font-mono text-xs text-[#6b7280] text-center">{label}</p>
      </div>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const achievements = [
  {
    rank: "1",
    rankLabel: "JUARA 1",
    event: "Lomba Jaringan Dasar",
    competition: "Smart Student Competition (S2C)",
    date: "22–26 Januari 2024",
    school: "SMKS Binong Permai · TKJ",
    desc: "Meraih juara pertama dalam lomba jaringan dasar tingkat sekolah, menguji kemampuan konfigurasi jaringan, IP addressing, dan troubleshooting secara langsung.",
    image: "/achievements/trophy-jaringan-dasar.jpg",
    imageType: "trophy",
    accent: "#00d4aa",
    featured: true,
  },
  {
    rank: "1",
    rankLabel: "JUARA 1",
    event: "Lomba Web Server",
    competition: "Smart Student Competition (S2C)",
    date: "28 Januari 2026",
    school: "SMKS Binong Permai · TKJ",
    desc: "Meraih juara pertama dalam lomba web server, mendemonstrasikan kemampuan konfigurasi server dan deployment layanan jaringan berbasis web.",
    image: "/achievements/cert-juara1-web-server.jpg",
    imageType: "cert",
    accent: "#00d4aa",
    featured: false,
  },
  {
    rank: "2",
    rankLabel: "JUARA 2",
    event: "Lomba Network Configuration",
    competition: "Smart Student Competition (S2C)",
    date: "01 Februari 2025",
    school: "SMKS Binong Permai · TKJ",
    desc: "Meraih juara kedua dalam lomba konfigurasi jaringan, mencakup routing, switching, dan optimasi infrastruktur jaringan.",
    image: "/achievements/cert-juara2-network-config.jpg",
    imageType: "cert",
    accent: "#ffa502",
    featured: false,
  },
];

const certifications = [
  {
    title: "Jaringan Komputer Dasar",
    issuer: "ID-Networkers",
    certNo: "IDN-1751263609-180-60021",
    validUntil: "30-06-2028",
    image: "/certs/cert-jaringan-dasar.jpg",
    icon: "🌐",
  },
  {
    title: "Belajar Linux dari Nol+",
    issuer: "ID-Networkers",
    certNo: "IDN-1778068348-11033-60021",
    validUntil: "06-05-2029",
    image: "/certs/cert-linux.jpg",
    icon: "🐧",
  },
  {
    title: "Mikrotik Dasar",
    issuer: "ID-Networkers",
    certNo: "IDN-1751533309-182-60021",
    validUntil: "03-07-2028",
    image: "/certs/cert-mikrotik.jpg",
    icon: "📡",
  },
  {
    title: "Simulasi Jaringan dengan PNETlab",
    issuer: "ID-Networkers",
    certNo: "IDN-1778126775-4357-60021",
    validUntil: "07-05-2029",
    image: "/certs/cert-pnetlab.jpg",
    icon: "🧪",
  },
  {
    title: "Cisco Dasar",
    issuer: "ID-Networkers",
    certNo: "IDN-1752133617-184-60021",
    validUntil: "10-07-2028",
    image: "/certs/cert-cisco.jpg",
    icon: "🖧",
  },
];

// ── Achievement Card ──────────────────────────────────────────────────────────
function AchievementCard({
  item, index, visible,
}: {
  item: typeof achievements[0]; index: number; visible: boolean;
}) {
  const [lb, setLb] = useState(false);

  return (
    <>
      <div
        className={`section-transition ${visible ? "section-visible" : "section-hidden"}`}
        style={{ transitionDelay: `${index * 0.12}s` }}
      >
        {item.featured ? (
          /* ── Featured trophy card ── */
          <div className="relative border overflow-hidden group" style={{ borderColor: `${item.accent}40` }}>
            {/* Top gradient bar */}
            <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />

            <div className="grid sm:grid-cols-[1fr_1.1fr] bg-[#0d1117]">
              {/* Image side */}
              <button
                onClick={() => setLb(true)}
                className="relative overflow-hidden cursor-zoom-in aspect-square sm:aspect-auto"
              >
                <img
                  src={item.image}
                  alt={item.event}
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0d1117] opacity-60 hidden sm:block" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
                {/* FEATURED badge */}
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] px-2 py-1 bg-[#00d4aa] text-[#0a0c0f] font-bold tracking-wider">
                    UNGGULAN
                  </span>
                </div>
              </button>

              {/* Content side */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-mono text-xs tracking-widest border px-2 py-0.5"
                    style={{ color: item.accent, borderColor: `${item.accent}40` }}
                  >
                    S2C COMPETITION
                  </span>
                </div>

                <div
                  className="font-display font-black text-6xl sm:text-7xl leading-none mb-2"
                  style={{ color: item.accent }}
                >
                  #1
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e2e8f0] mb-1">{item.event}</h3>
                <p className="font-mono text-xs text-[#6b7280] mb-4">{item.competition}</p>
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-5">{item.desc}</p>

                <div className="flex flex-col gap-1.5 mb-5">
                  {[
                    { icon: "📅", text: item.date },
                    { icon: "🏫", text: item.school },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-2 font-mono text-xs text-[#6b7280]">
                      <span>{row.icon}</span>
                      <span>{row.text}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setLb(true)}
                  className="inline-flex items-center gap-2 font-mono text-xs self-start border px-4 py-2 transition-all hover:bg-[#00d4aa]/10"
                  style={{ color: item.accent, borderColor: `${item.accent}30` }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 6s4-2 11-2 11 2 11 2-4 2-11 2S1 6 1 6z"/><path d="M1 6v8s4 2 11 2 11-2 11-2V6"/></svg>
                  Lihat Bukti Fisik →
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ── Regular cert card ── */
          <button
            onClick={() => setLb(true)}
            className="w-full text-left group relative border border-[#1e2530] bg-[#0d1117] overflow-hidden hover:border-opacity-60 transition-all duration-300"
            style={{ ['--hover-color' as string]: item.accent }}
          >
            <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${item.accent}80, transparent)` }} />

            {/* Certificate image preview */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={item.image}
                alt={item.event}
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/40 to-transparent" />

              {/* Rank badge overlay */}
              <div className="absolute top-3 right-3">
                <div
                  className="font-display font-black text-3xl leading-none w-12 h-12 flex items-center justify-center border-2"
                  style={{ color: item.accent, borderColor: `${item.accent}60`, background: "#0a0c0f" }}
                >
                  #{item.rank}
                </div>
              </div>

              {/* Zoom hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#0a0c0f]/80 border border-[#1e2530] px-3 py-2 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  <span className="font-mono text-[10px] text-[#00d4aa]">Perbesar</span>
                </div>
              </div>
            </div>

            {/* Card info */}
            <div className="p-4 sm:p-5">
              <span
                className="font-mono text-[10px] tracking-widest border px-2 py-0.5 mb-3 inline-block"
                style={{ color: item.accent, borderColor: `${item.accent}30` }}
              >
                {item.rankLabel}
              </span>
              <h3 className="font-display text-base font-bold text-[#e2e8f0] mb-1">{item.event}</h3>
              <p className="font-mono text-xs text-[#6b7280] mb-2">{item.competition}</p>
              <p className="text-xs text-[#6b7280]">{item.date}</p>
            </div>
          </button>
        )}
      </div>

      {lb && <Lightbox src={item.image} label={`${item.rankLabel} — ${item.event}`} onClose={() => setLb(false)} />}
    </>
  );
}

// ── Cert Card ─────────────────────────────────────────────────────────────────
function CertCard({ cert, index, visible }: { cert: typeof certifications[0]; index: number; visible: boolean }) {
  const [lb, setLb] = useState(false);

  return (
    <>
      <div
        className={`section-transition ${visible ? "section-visible" : "section-hidden"}`}
        style={{ transitionDelay: `${index * 0.08}s` }}
      >
        <button
          onClick={() => setLb(true)}
          className="w-full text-left group border border-[#1e2530] bg-[#111418] overflow-hidden hover:border-[#00d4aa]/35 transition-all duration-300 hover:-translate-y-0.5 block"
        >
          {/* Certificate image strip */}
          <div className="h-28 overflow-hidden relative bg-[#0a0c0f]">
            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111418]/80" />
            {/* Zoom hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">{cert.icon}</span>
              <div className="min-w-0">
                <p className="font-display text-sm font-semibold text-[#e2e8f0] leading-snug mb-1">{cert.title}</p>
                <p className="font-mono text-[10px] text-[#6b7280]">{cert.issuer}</p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-[#1e2530] flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] flex-shrink-0" />
                <span className="font-mono text-[10px] text-[#00d4aa]">Selesai</span>
              </div>
              <span className="font-mono text-[10px] text-[#4a5568] truncate">s/d {cert.validUntil}</span>
            </div>

            <p className="font-mono text-[9px] text-[#4a5568] mt-2 truncate">{cert.certNo}</p>
          </div>
        </button>
      </div>

      {lb && <Lightbox src={cert.image} label={cert.title} onClose={() => setLb(false)} />}
    </>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
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
    <section
      id="achievements"
      ref={ref}
      className={`py-16 lg:py-28 bg-[#0d1117] section-transition ${visible ? "section-visible" : "section-hidden"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#00d4aa] tracking-widest">04 /</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Prestasi</h2>
        </div>
        <p className="text-[#6b7280] font-body mb-12 lg:mb-16 max-w-xl text-sm sm:text-base">
          Rekam jejak kompetisi dan sertifikasi yang terverifikasi.
        </p>

        {/* ── Competition achievements ── */}
        <div className="mb-14 lg:mb-20">
          <div className="flex items-center gap-2 mb-7">
            <div className="w-1 h-4 bg-[#00d4aa]" />
            <h3 className="font-display text-lg font-semibold text-[#e2e8f0]">Kompetisi</h3>
            <span className="font-mono text-xs text-[#4a5568] ml-2">// Smart Student Competition (S2C)</span>
          </div>

          {/* Featured card full-width */}
          <div className="mb-5">
            <AchievementCard item={achievements[0]} index={0} visible={visible} />
          </div>

          {/* Two regular cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            <AchievementCard item={achievements[1]} index={1} visible={visible} />
            <AchievementCard item={achievements[2]} index={2} visible={visible} />
          </div>
        </div>

        {/* ── Certifications ── */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-[#00d4aa]" />
            <h3 className="font-display text-lg font-semibold text-[#e2e8f0]">Sertifikasi & Kursus</h3>
          </div>
          <p className="font-mono text-xs text-[#4a5568] mb-7">// Diterbitkan oleh ID-Networkers (IDN.ID) · Klik untuk melihat sertifikat</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {certifications.map((cert, i) => (
              <CertCard key={cert.certNo} cert={cert} index={i} visible={visible} />
            ))}
          </div>

          {/* Verification note */}
          <div className="mt-6 flex items-center gap-3 bg-[#111418] border border-[#1e2530] px-4 py-3 w-fit max-w-full">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span className="font-mono text-xs text-[#6b7280]">
              Semua sertifikat dapat diverifikasi di{" "}
              <a href="https://lms.idn.id/cert-verification" target="_blank" rel="noopener noreferrer"
                className="text-[#00d4aa] hover:underline">
                lms.idn.id/cert-verification
              </a>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
