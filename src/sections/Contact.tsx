import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("muhamadhanif680@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className={`py-16 lg:py-28 section-transition ${visible ? "section-visible" : "section-hidden"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#00d4aa] tracking-widest">05 /</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Kontak</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-8 sm:mt-14">
          <div>
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#e2e8f0] mb-4 sm:mb-5 leading-tight">
              Mari bicara tentang<br />
              <span className="text-[#00d4aa]">infrastruktur jaringan.</span>
            </h3>
            <p className="text-[#9ca3af] leading-relaxed mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
              Saya terbuka untuk peluang beasiswa, magang, dan kolaborasi proyek jaringan.
              Hubungi via GitHub atau email — saya merespons dalam 24 jam.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#111418] border border-[#1e2530] px-4 sm:px-5 py-3 sm:py-4 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse flex-shrink-0" />
              <span className="font-mono text-xs text-[#9ca3af]">Sedang terbuka untuk peluang baru</span>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <a href="https://github.com/HF680" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 bg-[#111418] border border-[#1e2530] p-4 sm:p-5 card-glow group block min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0a0c0f] border border-[#1e2530] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#9ca3af] group-hover:text-[#00d4aa] transition-colors">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-body text-sm font-medium text-[#e2e8f0]">GitHub</p>
                <p className="font-mono text-xs text-[#6b7280] truncate">github.com/HF680</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-auto flex-shrink-0 text-[#4a5568] group-hover:text-[#00d4aa] transition-colors">
                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <button onClick={handleCopyEmail}
              className="flex items-center gap-3 sm:gap-4 bg-[#111418] border border-[#1e2530] p-4 sm:p-5 card-glow group w-full text-left min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0a0c0f] border border-[#1e2530] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#9ca3af] group-hover:text-[#00d4aa] transition-colors">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-body text-sm font-medium text-[#e2e8f0]">Email</p>
                <p className="font-mono text-xs text-[#6b7280] truncate">muhamadhanif680@gmail.com</p>
              </div>
              <span className="ml-auto font-mono text-xs text-[#4a5568] group-hover:text-[#00d4aa] transition-colors flex-shrink-0">
                {copied ? "Disalin!" : "Salin"}
              </span>
            </button>
            <div className="flex items-center gap-3 sm:gap-4 bg-[#111418] border border-[#1e2530] p-4 sm:p-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0a0c0f] border border-[#1e2530] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#9ca3af]">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <p className="font-body text-sm font-medium text-[#e2e8f0]">Lokasi</p>
                <p className="font-mono text-xs text-[#6b7280]">Tangerang, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
