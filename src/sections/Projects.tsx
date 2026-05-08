import { useEffect, useRef, useState } from "react";

// ── Screenshot gallery data ──────────────────────────────────────────────────
const screenshots = [
  {
    src: "/screenshots/hero-desktop.png",
    label: "Tampilan Utama — Desktop",
    type: "desktop",
    desc: "Landing page sistem voucher hotspot dengan status MikroTik real-time",
  },
  {
    src: "/screenshots/voucher-desktop.png",
    label: "Paket Voucher — Desktop",
    type: "desktop",
    desc: "Halaman pemilihan paket voucher dengan harga dan durasi akses",
  },
  {
    src: "/screenshots/mikrotik-status.png",
    label: "Status Jaringan MikroTik",
    type: "desktop",
    desc: "Monitor heartbeat MikroTik real-time sebelum transaksi",
  },
  {
    src: "/screenshots/mikrotik-status-mobile.png",
    label: "Status Jaringan MikroTik — Mobile",
    type: "mobile",
    desc: "Monitor heartbeat MikroTik real-time di tampilan smartphone",
  },
  {
    src: "/screenshots/hero-mobile.png",
    label: "Tampilan Utama — Mobile",
    type: "mobile",
    desc: "Antarmuka responsif untuk pengguna smartphone",
  },
  {
    src: "/screenshots/voucher-mobile.png",
    label: "Paket Voucher — Mobile",
    type: "mobile",
    desc: "Tampilan paket voucher yang dioptimalkan untuk layar kecil",
  },
];

// ── Workflow steps ────────────────────────────────────────────────────────────
const workflowSteps = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "Buka Website",
    desc: "Pengguna mengakses portal voucher hotspot sekolah",
    tech: "GitHub Pages",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Pilih Paket",
    desc: "Pilih durasi voucher sesuai kebutuhan (1–3 hari)",
    tech: "JavaScript UI",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>
      </svg>
    ),
    title: "Bayar QRIS",
    desc: "Pembayaran via QRIS atau saldo, diproses oleh beliwifi",
    tech: "QRIS · beliwifi",
  },
  {
    num: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Voucher Digenerate",
    desc: "Sistem otomatis membuat & mengirim kode voucher MikroTik",
    tech: "Integrasi mikbills",
  },
  {
    num: "05",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Login Hotspot",
    desc: "Masukkan kode voucher di halaman login MikroTik",
    tech: "MikroTik RouterOS",
  },
  {
    num: "06",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Internet Aktif",
    desc: "Akses internet langsung aktif sesuai paket yang dibeli",
    tech: "Akses Terverifikasi",
  },
];

// ── Tech stack data ───────────────────────────────────────────────────────────
const techStack = [
  { name: "MikroTik RouterOS", category: "Jaringan", color: "#00d4aa" },
  { name: "Cloudflare Workers", category: "Backend", color: "#ffa502" },
  { name: "GitHub Pages", category: "Hosting", color: "#9ca3af" },
  { name: "JavaScript", category: "Frontend", color: "#ffd700" },
  { name: "HTML / CSS", category: "Frontend", color: "#9ca3af" },
  { name: "QRIS Payment", category: "Pembayaran", color: "#00d4aa" },
  { name: "beliwifi", category: "Integrasi", color: "#ffa502" },
];

// ── Impact stats ──────────────────────────────────────────────────────────────
const impactStats = [
  { value: "200+", label: "Siswa terlayani" },
  { value: "0", label: "Intervensi admin manual" },
  { value: "Real-time", label: "Monitoring MikroTik" },
  { value: "100%", label: "Otomatis end-to-end" },
];

// ── Lightbox component ────────────────────────────────────────────────────────
function Lightbox({ src, label, onClose }: { src: string; label: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 font-mono text-xs text-[#6b7280] hover:text-[#00d4aa] flex items-center gap-2"
        >
          ESC untuk tutup ✕
        </button>
        <img src={src} alt={label} className="w-full max-h-[80vh] object-contain border border-[#1e2530]" />
        <p className="mt-3 font-mono text-xs text-[#6b7280] text-center">{label}</p>
      </div>
    </div>
  );
}

// ── Screenshot gallery ────────────────────────────────────────────────────────
function ScreenshotGallery() {
  const [active, setActive] = useState<null | typeof screenshots[0]>(null);
  const [filter, setFilter] = useState<"semua" | "desktop" | "mobile">("semua");

  const filtered = filter === "semua" ? screenshots : screenshots.filter((s) => s.type === filter);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex items-center gap-3 mb-6">
        {(["semua", "desktop", "mobile"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-mono text-xs px-3 py-1.5 border transition-all capitalize ${
              filter === f
                ? "border-[#00d4aa]/50 text-[#00d4aa] bg-[#00d4aa]/10"
                : "border-[#1e2530] text-[#6b7280] hover:border-[#00d4aa]/30 hover:text-[#9ca3af]"
            }`}
          >
            {f === "semua" ? "Semua" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filtered.map((shot, i) => (
          <button
            key={i}
            onClick={() => setActive(shot)}
            className={`group relative overflow-hidden border border-[#1e2530] hover:border-[#00d4aa]/40 transition-all duration-300 bg-[#111418] text-left ${
              shot.type === "mobile" ? "row-span-1" : ""
            }`}
          >
            {/* Screenshot image */}
            <div className={`overflow-hidden ${shot.type === "mobile" ? "aspect-[9/16]" : "aspect-video"}`}>
              <img
                src={shot.src}
                alt={shot.label}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#0a0c0f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              <p className="font-mono text-xs text-[#00d4aa] text-center">{shot.label}</p>
            </div>
            {/* Type badge */}
            <div className="absolute top-2 left-2">
              <span className={`font-mono text-[10px] px-2 py-0.5 ${
                shot.type === "mobile"
                  ? "bg-[#ffa502]/20 text-[#ffa502] border border-[#ffa502]/30"
                  : "bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20"
              }`}>
                {shot.type}
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && <Lightbox src={active.src} label={active.label} onClose={() => setActive(null)} />}
    </div>
  );
}

// ── Workflow visualizer ───────────────────────────────────────────────────────
function WorkflowVisual() {
  const ref = useRef<HTMLDivElement>(null);
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
    <div ref={ref} className="mt-10">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-1 h-4 bg-[#00d4aa]" />
        <h4 className="font-display text-base font-semibold text-[#e2e8f0]">Alur Sistem</h4>
      </div>
      <p className="font-mono text-xs text-[#4a5568] mb-6">// Visualisasi proses end-to-end</p>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-stretch gap-0 overflow-x-auto pb-2">
        {workflowSteps.map((step, i) => (
          <div key={i} className="flex items-stretch flex-shrink-0">
            <div
              className={`bg-[#111418] border border-[#1e2530] p-4 w-36 flex flex-col gap-2 transition-all duration-500 hover:border-[#00d4aa]/40 hover:bg-[#111418]`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ${i * 0.08}s, transform 0.5s ${i * 0.08}s, border-color 0.3s`,
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] text-[#00d4aa]">{step.num}</span>
                <span className="text-[#00d4aa]">{step.icon}</span>
              </div>
              <p className="font-display text-xs font-bold text-[#e2e8f0] leading-tight">{step.title}</p>
              <p className="font-body text-[11px] text-[#6b7280] leading-relaxed flex-grow">{step.desc}</p>
              <span className="tag text-[10px] mt-auto self-start">{step.tech}</span>
            </div>
            {/* Arrow connector */}
            {i < workflowSteps.length - 1 && (
              <div
                className="flex items-center px-1 flex-shrink-0"
                style={{ opacity: visible ? 1 : 0, transition: `opacity 0.5s ${i * 0.08 + 0.3}s` }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-6 h-px bg-[#00d4aa]/40" />
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M0 4h6M4 1l3 3-3 3" stroke="#00d4aa" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden space-y-2">
        {workflowSteps.map((step, i) => (
          <div key={i}>
            <div
              className="bg-[#111418] border border-[#1e2530] p-4 flex items-start gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.5s ${i * 0.07}s, transform 0.5s ${i * 0.07}s`,
              }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center text-[#00d4aa]">
                {step.icon}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] text-[#00d4aa]">{step.num}</span>
                  <p className="font-display text-sm font-bold text-[#e2e8f0]">{step.title}</p>
                </div>
                <p className="font-body text-xs text-[#6b7280]">{step.desc}</p>
                <span className="tag text-[10px] mt-2 inline-block">{step.tech}</span>
              </div>
            </div>
            {i < workflowSteps.length - 1 && (
              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-px h-3 bg-[#00d4aa]/30" />
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M4 6L0 0h8z" fill="#00d4aa" fillOpacity="0.4"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



// ── Reusable doc photo card ───────────────────────────────────────────────────
function DocPhoto({
  src, caption, aspect = "video", priority = false,
}: {
  src: string; caption: string; aspect?: "video" | "portrait" | "square"; priority?: boolean;
}) {
  const [lb, setLb] = useState(false);
  const aspectClass = aspect === "portrait" ? "aspect-[3/4]" : aspect === "square" ? "aspect-square" : "aspect-video";

  return (
    <>
      <button
        onClick={() => setLb(true)}
        className="group relative overflow-hidden border border-[#1e2530] hover:border-[#00d4aa]/40 transition-all duration-300 w-full block bg-[#0a0c0f]"
      >
        <div className={`${aspectClass} overflow-hidden`}>
          <img
            src={src}
            alt={caption}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0a0c0f]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
          <p className="font-mono text-[11px] text-[#00d4aa] text-center leading-snug">{caption}</p>
        </div>
        {/* Caption bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0c0f]/90 to-transparent px-3 py-2">
          <p className="font-mono text-[10px] text-[#6b7280] truncate">{caption}</p>
        </div>
      </button>
      {lb && <Lightbox src={src} label={caption} onClose={() => setLb(false)} />}
    </>
  );
}

// ── PROJECT 2 CARD ─────────────────────────────────────────────────────────────
function Project2Card() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-[#1e2530] bg-[#0d1117] overflow-hidden mb-5 sm:mb-6 section-transition ${visible ? "section-visible" : "section-hidden"}`}
    >
      {/* Top accent line — orange for project 2 */}
      <div className="h-0.5 bg-gradient-to-r from-[#ffa502] via-[#ff6b35] to-transparent" />

      <div className="p-5 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[#ffa502] tracking-widest border border-[#ffa502]/30 px-2 py-0.5">INFRASTRUKTUR</span>
          <span className="w-6 h-px bg-[#1e2530]" />
          <span className="font-mono text-xs text-[#4a5568]">02</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e2e8f0] mb-1 leading-tight">
          Implementasi Infrastruktur Jaringan & Sistem Hotspot MikroTik
        </h3>
        <p className="font-mono text-xs text-[#6b7280] mb-6">Topologi · MikroTik · Captive Portal · Wi-Fi Roaming</p>

        {/* Description + impact */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 mb-8">
          <div>
            <p className="text-[#9ca3af] leading-relaxed text-sm mb-5">
              Merancang dan mengimplementasikan jaringan topologi bintang untuk lingkungan sekolah.
              MikroTik berfungsi sebagai router inti yang mengelola DHCP, firewall, dan manajemen user hotspot.
              Sistem captive portal berbasis voucher diterapkan untuk autentikasi seluruh pengguna, dengan
              Wi-Fi roaming seamless antar access point di setiap ruangan.
            </p>
            <div className="bg-[#111418] border-l-2 border-[#ffa502]/50 px-4 py-3 mb-5">
              <p className="font-mono text-xs text-[#ffa502]/80 mb-1 tracking-wider">MASALAH</p>
              <p className="text-sm text-[#9ca3af]">
                Jaringan tanpa autentikasi menyebabkan penyalahgunaan bandwidth dan koneksi tidak stabil
                antar gedung, sehingga aktivitas belajar-mengajar terganggu.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["MikroTik RouterOS", "Winbox", "Switch", "Access Point", "Hotspot Auth", "Captive Portal"].map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-[#4a5568] tracking-widest uppercase mb-4">Hasil Implementasi</p>
            <ul className="space-y-3">
              {[
                "Topologi bintang terstruktur dengan inti MikroTik",
                "Autentikasi hotspot berbasis voucher untuk semua pengguna",
                "Wi-Fi roaming seamless antar access point",
                "Manajemen bandwidth & user terpusat via Winbox",
                "Captive portal aktif & termonitoring real-time",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                  <span className="text-[#ffa502] mt-0.5 flex-shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Documentation gallery ── */}
        <div className="pt-6 border-t border-[#1e2530]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-[#ffa502]" />
            <h4 className="font-display text-base font-semibold text-[#e2e8f0]">Dokumentasi Implementasi</h4>
          </div>
          <p className="font-mono text-xs text-[#4a5568] mb-5">// Bukti kerja nyata di lingkungan sekolah</p>

          {/* 2-up dominant + 1 supporting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <DocPhoto
              src="/screenshots/project2-winbox.jpg"
              caption="Manajemen User Hotspot MikroTik"
              aspect="video"
              priority
            />
            <DocPhoto
              src="/screenshots/project2-captive.jpg"
              caption="Implementasi Captive Portal Voucher"
              aspect="video"
            />
          </div>
          {/* Supporting: speedtest — narrower strip */}
          <div className="sm:w-1/2">
            <DocPhoto
              src="/screenshots/project2-speedtest.jpg"
              caption="Pengujian Koneksi dan Stabilitas"
              aspect="portrait"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── PROJECT 3 CARD ─────────────────────────────────────────────────────────────
function Project3Card() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-[#1e2530] bg-[#0d1117] overflow-hidden mb-5 sm:mb-6 section-transition ${visible ? "section-visible" : "section-hidden"}`}
    >
      {/* Top accent line — cyan for project 3 */}
      <div className="h-0.5 bg-gradient-to-r from-[#00d4aa] via-[#0099cc] to-transparent" />

      <div className="p-5 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-[#00d4aa] tracking-widest border border-[#00d4aa]/30 px-2 py-0.5">MULTI-LOKASI</span>
          <span className="w-6 h-px bg-[#1e2530]" />
          <span className="font-mono text-xs text-[#4a5568]">03</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#e2e8f0] mb-1 leading-tight">
          Deployment Jaringan & Troubleshooting Multi-Lokasi
        </h3>
        <p className="font-mono text-xs text-[#6b7280] mb-6">Multi-Sekolah · Instalasi AP · Fiber Optic · Troubleshooting Lapangan</p>

        {/* ── HERO IMAGE — full width cinematic ── */}
        <div className="mb-6 relative overflow-hidden border border-[#1e2530] group cursor-pointer"
          onClick={() => window.open("/screenshots/project3-hero.jpg", "_blank")}
        >
          <div className="aspect-video sm:aspect-[21/9] overflow-hidden">
            <img
              src="/screenshots/project3-hero.jpg"
              alt="Instalasi dan Konfigurasi Access Point"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0f]/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-[#00d4aa] tracking-widest block mb-1">DOKUMENTASI LAPANGAN</span>
                <p className="font-display text-base sm:text-lg font-bold text-[#e2e8f0]">
                  Instalasi dan Konfigurasi Access Point
                </p>
              </div>
              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </div>
          </div>
          {/* Corner bracket decoration */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#00d4aa]/60" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#00d4aa]/60" />
        </div>

        {/* Description + impact */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 mb-8">
          <div>
            <p className="text-[#9ca3af] leading-relaxed text-sm mb-5">
              Mendiagnosis dan menyelesaikan kegagalan distribusi internet di sebuah SMP. Melakukan audit
              jaringan menyeluruh, mengidentifikasi bottleneck dan perangkat yang salah konfigurasi, lalu
              memasang dan mengoptimalkan access point untuk memulihkan konektivitas stabil di seluruh
              ruang kelas. Termasuk penanganan komponen backbone fiber optic transceiver.
            </p>
            <div className="bg-[#111418] border-l-2 border-[#00d4aa]/40 px-4 py-3 mb-5">
              <p className="font-mono text-xs text-[#00d4aa]/80 mb-1 tracking-wider">MASALAH</p>
              <p className="text-sm text-[#9ca3af]">
                Distribusi internet yang tidak stabil menyebabkan koneksi terputus dan jangkauan sinyal
                buruk di beberapa zona, mengganggu kegiatan belajar-mengajar secara signifikan.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["MikroTik", "Instalasi AP", "TP-Link", "Fiber Optic", "Audit Jaringan", "Pengkabelan", "Site Survey"].map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-[#4a5568] tracking-widest uppercase mb-4">Hasil Lapangan</p>
            <ul className="space-y-3">
              {[
                "Konektivitas pulih di seluruh zona sekolah",
                "Pemasangan & optimasi beberapa access point",
                "Konfigurasi fiber optic transceiver backbone",
                "Stabilitas jaringan meningkat signifikan",
                "Keluhan guru & siswa berkurang drastis",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                  <span className="text-[#00d4aa] mt-0.5 flex-shrink-0">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Supporting photo grid (3 photos) ── */}
        <div className="pt-6 border-t border-[#1e2530]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-4 bg-[#00d4aa]" />
            <h4 className="font-display text-base font-semibold text-[#e2e8f0]">Dokumentasi Infrastruktur</h4>
          </div>
          <p className="font-mono text-xs text-[#4a5568] mb-5">// Klik gambar untuk memperbesar</p>
          <div className="grid grid-cols-3 gap-3">
            <DocPhoto
              src="/screenshots/project3-ap.jpg"
              caption="Deployment Infrastruktur Jaringan"
              aspect="square"
            />
            <DocPhoto
              src="/screenshots/project3-fiber.jpg"
              caption="Perangkat Fiber Optic Transceiver"
              aspect="square"
            />
            <DocPhoto
              src="/screenshots/project3-laptop.jpg"
              caption="Troubleshooting dan Konfigurasi Jaringan"
              aspect="square"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Projects component ───────────────────────────────────────────────────
export default function Projects() {
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
    <section id="projects" ref={ref} className={`py-16 lg:py-28 section-transition ${visible ? "section-visible" : "section-hidden"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#00d4aa] tracking-widest">03 /</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Proyek</h2>
        </div>
        <p className="text-[#6b7280] font-body mb-10 lg:mb-14 max-w-xl text-sm sm:text-base">
          Implementasi nyata di lingkungan produksi — bukan sekadar simulasi lab.
        </p>

        {/* ── FEATURED PROJECT ─────────────────────────────────────── */}
        <div className="relative border border-[#00d4aa]/25 bg-[#0d1117] overflow-hidden mb-5 sm:mb-6">
          <div className="h-0.5 bg-gradient-to-r from-[#00d4aa] via-[#00b894] to-transparent" />

          {/* Header bar */}
          <div className="px-5 sm:px-8 lg:px-10 pt-6 sm:pt-8 pb-5 border-b border-[#1e2530]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="font-mono text-xs text-[#00d4aa] tracking-widest border border-[#00d4aa]/30 px-2 py-0.5">
                    PROYEK UTAMA
                  </span>
                  <span className="w-6 h-px bg-[#1e2530]" />
                  <span className="font-mono text-xs text-[#4a5568]">01</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#e2e8f0] mb-1 leading-tight">
                  Website Pembelian Voucher Hotspot MikroTik
                </h3>
                <p className="font-mono text-xs text-[#6b7280]">MikroTik · Cloudflare Workers · QRIS · GitHub Pages</p>
              </div>
              <a
                href="https://unprotkj.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#00d4aa] border border-[#00d4aa]/30 px-4 py-2 hover:bg-[#00d4aa]/10 transition-all flex-shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
                Live Demo →
              </a>
            </div>
          </div>

          {/* Body */}
          <div className="px-5 sm:px-8 lg:px-10 py-6 sm:py-8">

            {/* Description + problem + stack */}
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 mb-10">
              <div>
                <p className="text-[#9ca3af] leading-relaxed text-sm sm:text-base mb-5">
                  Sistem otomasi pembelian voucher hotspot berbasis web yang menggantikan alur kerja manual.
                  Terintegrasi dengan QRIS untuk pembayaran, menghasilkan voucher secara otomatis setelah
                  pembayaran berhasil, dan memonitor status router MikroTik secara real-time melalui
                  heartbeat API via Cloudflare Workers.
                </p>
                <div className="bg-[#111418] border-l-2 border-[#ff4757]/50 px-4 py-3 mb-5">
                  <p className="font-mono text-xs text-[#ff4757]/80 mb-1 tracking-wider">MASALAH</p>
                  <p className="text-sm text-[#9ca3af]">
                    Distribusi voucher manual menimbulkan bottleneck administrasi, keterlambatan akses siswa,
                    dan tidak ada skalabilitas untuk kebutuhan yang berkembang.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["HTML/CSS", "JavaScript", "Cloudflare Workers", "GitHub Pages", "MikroTik RouterOS", "QRIS API", "beliwifi"].map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>

              {/* Impact stats */}
              <div>
                <p className="font-mono text-xs text-[#4a5568] tracking-widest uppercase mb-5">Dampak & Hasil</p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {impactStats.map((stat) => (
                    <div key={stat.label} className="bg-[#111418] border border-[#1e2530] p-4">
                      <p className="font-display text-xl sm:text-2xl font-bold text-[#00d4aa] mb-1">{stat.value}</p>
                      <p className="font-mono text-xs text-[#6b7280] leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
                {/* Terminal mock */}
                <div className="bg-[#0a0c0f] border border-[#1e2530] p-4 font-mono text-xs">
                  <p className="text-[#4a5568] mb-2"># status sistem</p>
                  <p className="text-[#00d4aa]">✓ router.heartbeat → <span className="text-[#9ca3af]">ONLINE</span></p>
                  <p className="text-[#00d4aa]">✓ voucher.engine → <span className="text-[#9ca3af]">AKTIF</span></p>
                  <p className="text-[#00d4aa]">✓ qris.gateway → <span className="text-[#9ca3af]">TERHUBUNG</span></p>
                  <p className="text-[#ffa502]">~ users.active → <span className="text-[#9ca3af]">247</span></p>
                </div>
              </div>
            </div>

            {/* ── Screenshot gallery ── */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-4 bg-[#00d4aa]" />
                <h4 className="font-display text-base font-semibold text-[#e2e8f0]">Screenshot Proyek</h4>
              </div>
              <p className="font-mono text-xs text-[#4a5568] mb-5">// Klik gambar untuk memperbesar</p>
              <ScreenshotGallery />
            </div>

            {/* ── Workflow visualizer ── */}
            <WorkflowVisual />

            {/* ── Tech & infrastructure ── */}
            <div className="mt-10 pt-8 border-t border-[#1e2530]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-4 bg-[#00d4aa]" />
                <h4 className="font-display text-base font-semibold text-[#e2e8f0]">Teknologi & Infrastruktur</h4>
              </div>
              <p className="font-mono text-xs text-[#4a5568] mb-6">// Stack yang digunakan dalam sistem ini</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-[#111418] border border-[#1e2530] px-3 py-2 hover:border-[#00d4aa]/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: tech.color }} />
                    <span className="font-body text-xs text-[#9ca3af]">{tech.name}</span>
                    <span className="font-mono text-[10px] text-[#4a5568]">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── PROJECT 2: MikroTik Hotspot Infrastructure ── */}
        <Project2Card />

        {/* ── PROJECT 3: Network Deployment & Troubleshooting ── */}
        <Project3Card />

      </div>
    </section>
  );
}
