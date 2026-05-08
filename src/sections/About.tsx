import { useEffect, useRef, useState } from "react";

export default function About() {
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
    <section
      id="about"
      ref={ref}
      className={`py-16 lg:py-28 section-transition ${visible ? "section-visible" : "section-hidden"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="bg-[#111418] border border-[#1e2530] p-5 sm:p-6 card-glow overflow-hidden">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e2530]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff4757]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffa502]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00d4aa]" />
                <span className="font-mono text-xs text-[#4a5568] ml-2">profil.json</span>
              </div>
              <pre className="font-mono text-xs leading-7 text-[#9ca3af] whitespace-pre-wrap break-words overflow-hidden max-w-full">
{`{
  `}<span className="text-[#00d4aa]">"nama"</span>{`: `}<span className="text-[#ffa502]">"Muhammad Ibrahim Hanif"</span>{`,
  `}<span className="text-[#00d4aa]">"peran"</span>{`: `}<span className="text-[#ffa502]">"Calon Network Engineer"</span>{`,
  `}<span className="text-[#00d4aa]">"lokasi"</span>{`: `}<span className="text-[#ffa502]">"Tangerang, ID"</span>{`,
  `}<span className="text-[#00d4aa]">"fokus"</span>{`: `}<span className="text-[#ffa502]">"MikroTik & Jaringan"</span>{`,
  `}<span className="text-[#00d4aa]">"status"</span>{`: `}<span className="text-[#00d4aa]">"terbuka untuk peluang"</span>{`,
  `}<span className="text-[#00d4aa]">"pengalaman"</span>{`: {
    `}<span className="text-[#00d4aa]">"tipe"</span>{`: `}<span className="text-[#ffa502]">"dunia nyata"</span>{`,
    `}<span className="text-[#00d4aa]">"lingkungan"</span>{`: `}<span className="text-[#ffa502]">"produksi"</span>
{`  }
}`}
              </pre>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#00d4aa] text-[#0a0c0f] font-mono font-bold text-xs px-4 py-2">
              TKJ · SMKS
            </div>
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#00d4aa]/40" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#00d4aa]/40" />
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#00d4aa] tracking-widest">01 /</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Tentang Saya</h2>
            </div>
            <div className="space-y-5 text-[#9ca3af] leading-relaxed text-sm sm:text-base">
              <p>
                Saya adalah siswa Teknik Komputer dan Jaringan di SMKS Binong Permai yang berfokus pada
                implementasi infrastruktur jaringan di lingkungan nyata. Ketika kebanyakan siswa masih
                bekerja di level simulasi, saya sudah membangun dan mengelola{" "}
                <span className="text-[#e2e8f0]">jaringan produksi aktif</span> — termasuk sistem yang
                saat ini digunakan di sekolah saya.
              </p>
              <p>
                Pengalaman langsung saya mencakup konfigurasi MikroTik RouterOS, deployment hotspot,
                segmentasi VLAN, dan troubleshooting multi-lokasi. Saya telah merancang dan mengimplementasikan{" "}
                <span className="text-[#00d4aa]">sistem voucher hotspot berbasis web</span> dengan integrasi
                pembayaran QRIS dan monitoring status MikroTik secara real-time — sistem yang berjalan
                dari konsep hingga produksi.
              </p>
              <p>
                Tujuan saya adalah menjadi Network Engineer profesional dengan keahlian mendalam di bidang
                infrastruktur, keamanan, dan desain jaringan yang skalabel.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {["MikroTik", "RouterOS", "VLAN", "OSPF", "Hotspot", "Troubleshooting", "Cisco"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
