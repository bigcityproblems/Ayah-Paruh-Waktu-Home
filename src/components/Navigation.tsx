import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force dark navbar on pages other than Home if they don't have the orange hero
  const navbarActive = isScrolled || !isHome;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[5000] px-6 py-4 md:px-12 transition-all duration-500 ${
        navbarActive ? "bg-paper/95 backdrop-blur-md py-3 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <div 
              className={`w-40 h-10 md:w-56 md:h-14 transition-colors duration-500 ${
                navbarActive ? "bg-ink" : "bg-paper"
              }`}
              style={{
                maskImage: "url('https://res.cloudinary.com/dkhf63xbe/image/upload/v1778047461/apw-horizontal_draa4d.svg')",
                maskRepeat: "no-repeat",
                maskPosition: "left center",
                maskSize: "contain",
                WebkitMaskImage: "url('https://res.cloudinary.com/dkhf63xbe/image/upload/v1778047461/apw-horizontal_draa4d.svg')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "left center",
                WebkitMaskSize: "contain",
              }}
              role="img"
              aria-label="Ayah Paruh Waktu Logo"
            />
          </motion.div>
        </Link>
        
        <div className={`flex gap-6 items-center transition-colors duration-500 ${
          navbarActive ? "text-ink/80" : "text-paper/90"
        }`}>
           <a href="https://instagram.com/ayahparuhwaktu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
             <Instagram size={20} strokeWidth={1.5} />
           </a>
           <a href="https://www.tiktok.com/@ayahparuhwaktu" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-60 transition-opacity">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
             </svg>
           </a>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => (
  <footer className="py-16 px-6 bg-ink text-paper">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-[10px] uppercase tracking-[0.3em] text-paper/30">© 2026 Ayah Paruh Waktu. Semua Hak Dilindungi.</p>
      </div>
      
      <div className="flex gap-8 items-center">
        <a href="https://instagram.com/ayahparuhwaktu" target="_blank" rel="noopener noreferrer" className="text-paper/60 hover:text-hero transition-colors">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <a href="https://www.tiktok.com/@ayahparuhwaktu" target="_blank" rel="noopener noreferrer" className="text-paper/60 hover:text-hero transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);
