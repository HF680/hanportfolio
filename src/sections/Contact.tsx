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
              Hubungi via WhatsApp atau email — saya merespons dalam 24 jam.
            </p>
            <div className="inline-flex items-center gap-3 bg-[#111418] border border-[#1e2530] px-4 sm:px-5 py-3 sm:py-4 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse flex-shrink-0" />
              <span className="font-mono text-xs text-[#9ca3af]">Sedang terbuka untuk peluang baru</span>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <a href="https://api.whatsapp.com/send/?phone=6285692214982" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 bg-[#111418] border border-[#1e2530] p-4 sm:p-5 card-glow group block min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#0a0c0f] border border-[#1e2530] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#9ca3af] group-hover:text-[#00d4aa] transition-colors">
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.93L0 24l6.39-1.67a11.8 11.8 0 0 0 5.65 1.44h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.39-8.43ZM12.05 21.7h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.79.99 1.01-3.69-.24-.38a9.77 9.77 0 0 1-1.5-5.19c0-5.41 4.4-9.81 9.82-9.81 2.62 0 5.08 1.02 6.93 2.87a9.72 9.72 0 0 1 2.88 6.94c0 5.41-4.41 9.81-9.81 9.81Zm5.38-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.45-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.03 1.01-1.03 2.46s1.06 2.85 1.21 3.05c.15.2 2.08 3.18 5.03 4.46.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.72-.7 1.96-1.37.24-.66.24-1.23.17-1.37-.07-.15-.27-.22-.56-.37Z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-body text-sm font-medium text-[#e2e8f0]">WhatsApp</p>
                <p className="font-mono text-xs text-[#6b7280] truncate">Hubungi saya langsung</p>
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
