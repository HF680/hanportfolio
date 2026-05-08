import { useEffect, useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Nav from "./components/Nav";
import "./styles/global.css";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0c0f] text-[#e2e8f0] min-h-screen font-body">
      <Nav scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-[#1e2530] py-6 text-center text-sm text-[#4a5568]">
        <span className="font-mono">
          © {new Date().getFullYear()} Muhammad Ibrahim Hanif — Dibangun dengan presisi.
        </span>
      </footer>
    </div>
  );
}
