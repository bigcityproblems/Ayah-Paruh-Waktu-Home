/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Instagram, Send, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import React from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Custom components
const StarDecor = ({ className = "" }: { className?: string }) => (
  <div 
    className={`absolute w-[32rem] h-[32rem] bg-paper pointer-events-none select-none z-0 ${className}`}
    style={{
      maskImage: "url('https://res.cloudinary.com/dkhf63xbe/image/upload/v1778057561/stars_dlvhj3.svg')",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      maskSize: "contain",
      WebkitMaskImage: "url('https://res.cloudinary.com/dkhf63xbe/image/upload/v1778057561/stars_dlvhj3.svg')",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      WebkitMaskSize: "contain",
    }}
  />
);

const StarField = () => {
  const { scrollY } = useScroll();
  
  // Back layer: moves slowly
  const yBack = useTransform(scrollY, [0, 1000], [0, 200]);
  // Front layer: moves faster
  const yFront = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Back Layer (Small Stars) */}
      <motion.div 
        style={{ y: yBack }}
        className="absolute inset-x-0 -top-20 -bottom-20 opacity-20"
      >
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(1px 1px at 20px 30px, white, rgba(0,0,0,0)), 
                           radial-gradient(1px 1px at 40px 70px, white, rgba(0,0,0,0)), 
                           radial-gradient(1px 1px at 50px 160px, white, rgba(0,0,0,0)), 
                           radial-gradient(1px 1px at 80px 120px, white, rgba(0,0,0,0)), 
                           radial-gradient(1px 1px at 110px 10px, white, rgba(0,0,0,0)), 
                           radial-gradient(1px 1px at 150px 150px, white, rgba(0,0,0,0))`,
          backgroundSize: '250px 250px'
        }} />
      </motion.div>

      {/* Front Layer (Larger Stars) */}
      <motion.div 
        style={{ y: yFront }}
        className="absolute inset-x-0 -top-40 -bottom-40 opacity-40"
      >
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(1.5px 1.5px at 100px 100px, white, rgba(0,0,0,0)), 
                           radial-gradient(2px 2px at 300px 400px, white, rgba(0,0,0,0)), 
                           radial-gradient(1.5px 1.5px at 500px 200px, white, rgba(0,0,0,0)), 
                           radial-gradient(1.5px 1.5px at 700px 500px, white, rgba(0,0,0,0)), 
                           radial-gradient(2px 2px at 900px 300px, white, rgba(0,0,0,0))`,
          backgroundSize: '800px 600px'
        }} />
      </motion.div>
      
      {/* Subtle Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d67011]/20" />
    </div>
  );
};

const Section = ({ 
  children, 
  className = "", 
  id = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
}) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-4xl mx-auto w-full">
      {children}
    </div>
  </section>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = "",
  onClick
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'hero' | 'heroOutline';
  className?: string;
  onClick?: () => void;
}) => {
  const baseStyles = "px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 whitespace-nowrap";
  const variants = {
    primary: "bg-terracotta text-paper hover:bg-terracotta/90 shadow-sm",
    secondary: "bg-sand text-ink hover:bg-ink hover:text-paper shadow-sm",
    outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5 focus:bg-white/10",
    hero: "bg-paper text-[#d67011] hover:bg-sand transition-colors shadow-sm",
    heroOutline: "border border-paper/40 text-paper hover:bg-paper/10 transition-colors"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll for navbar color change
  useEffect(() => {
    const handleScroll = () => {
      // Threshold can be adjusted (e.g., when it leaves the orange hero)
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  return (
    <div className="bg-grain min-h-screen selection:bg-terracotta/20 scroll-smooth">
      {/* 🧭 NAVIGATION */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[5000] px-6 py-4 md:px-12 transition-all duration-500 ${
          isScrolled ? "bg-paper/95 backdrop-blur-md py-3 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            {/* Logo as a Mask to allow easy color changing via background-color */}
            <div 
              className={`w-40 h-10 md:w-56 md:h-14 transition-colors duration-500 ${
                isScrolled ? "bg-ink" : "bg-paper"
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
          
          <div className={`flex gap-6 items-center transition-colors duration-500 ${
            isScrolled ? "text-ink/80" : "text-paper/90"
          }`}>
             <a href="https://instagram.com/ayahparuhwaktu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-60 transition-opacity">
               <Instagram size={20} strokeWidth={1.5} />
             </a>
             <a href="https://www.tiktok.com/@ayahparuhwaktu" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-60 transition-opacity">
               <svg 
                 width="18" 
                 height="18" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="2" 
                 strokeLinecap="round" 
                 strokeLinejoin="round"
               >
                 <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
               </svg>
             </a>
          </div>
        </div>
      </nav>

      {/* 🔝 HERO */}
      <section className="min-h-screen flex flex-col items-center justify-between text-center px-6 bg-hero relative overflow-hidden">
        <StarField />
        
        {/* Side Star Decorations */}
        <StarDecor className="-left-64 md:-left-48 top-[10%] opacity-[0.14] md:opacity-[0.175] rotate-[-12deg]" />
        <StarDecor className="-right-64 md:-right-48 top-[20%] opacity-[0.175] md:opacity-[0.21] rotate-[15deg]" />

        <div className="h-36 relative z-10" /> {/* Bumped up further by 30px */}
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl pt-8 md:pt-0 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight leading-[0.95] text-balance text-paper">
            Separuh Waktu, <br />
            <span className="italic font-light">Sepenuh Hati.</span>
          </h1>
          <p className="text-lg md:text-xl text-paper/80 mb-12 font-hand max-w-xl mx-auto text-balance">
            Tentang ayah yang hadir — meski tidak selalu utuh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" className="w-full sm:w-auto">
              Wishlist Buku
            </Button>
            <Button 
              variant="heroOutline" 
              className="w-full sm:w-auto"
            >
              Tulis Pesan Tak Terkirim
            </Button>
          </div>
        </motion.div>
        
        {/* Subtle scroll indicator */}
        <div className="pb-12 mt-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-paper/40 pointer-events-none"
          >
            <div className="w-[1px] h-8 bg-paper/20 mx-auto mb-4 animate-bounce" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-light">GULIR</span>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" className="bg-sand/20 border-y border-ink/5">
        <motion.div {...fadeIn} className="text-center space-y-10 py-12">
          <h2 className="text-4xl md:text-5xl">Ayah Paruh Waktu</h2>
          
          <div className="space-y-8 text-ink/80 leading-relaxed max-w-2xl mx-auto font-sans font-light text-base md:text-lg">
            <p>
              Ruang bagi mereka yang mencintai dengan cara yang tidak selalu sempurna — tapi selalu sungguh-sungguh.
            </p>
            <p>
              Kami percaya bahwa kehadiran bukan soal jam. Bahwa luka bisa jadi warisan, tapi bisa juga jadi pelajaran. Dan bahwa cerita-cerita kecil yang tidak pernah diceritakan, justru yang paling banyak menanggung beban.
            </p>
            <p className="font-hand text-2xl text-terracotta">
              Di sini, cerita itu akhirnya punya tempat.
            </p>
          </div>

          <div className="pt-12 flex justify-center gap-10">
            <a href="https://www.tiktok.com/@ayahparuhwaktu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink/50 hover:text-terracotta transition-colors group">
               <svg 
                 width="24" 
                 height="24" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="1.5" 
                 strokeLinecap="round" 
                 strokeLinejoin="round"
                 className="group-hover:scale-110 transition-transform opacity-60"
               >
                 <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
               </svg>
               <span className="text-xs uppercase tracking-[0.2em] font-medium">TikTok</span>
            </a>
            <a href="https://instagram.com/ayahparuhwaktu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink/50 hover:text-terracotta transition-colors group">
               <Instagram size={24} className="group-hover:scale-110 transition-transform opacity-60" />
               <span className="text-xs uppercase tracking-[0.2em] font-medium">Instagram</span>
            </a>
          </div>
        </motion.div>
      </Section>


      {/* TENTANG BUKU */}
      <Section id="tentang-buku" className="bg-paper flex items-center">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div {...fadeIn} className="md:col-span-8 space-y-6">
            <h2 className="text-4xl md:text-5xl leading-tight">Cerita yang Tidak Pernah Jauh</h2>
            <div className="space-y-6 text-ink/70 leading-relaxed font-sans font-light text-base">
              <p>
                Buku ini lahir dari kisah-kisah nyata tentang ayah dan keluarga yang mencintainya — dari percakapan yang canggung, ingatan yang membekas, pengakuan yang akhirnya berani diucapkan.
              </p>
              <p>
                Di dalamnya ada perjuangan yang tidak selalu terlihat, rasa bersalah yang disimpan rapat, dan pertanyaan yang terus menghantui: apakah separuh waktu bisa cukup?
              </p>
              <div className="space-y-8">
                <p className="font-hand text-2xl text-terracotta pt-4">
                  Yang diingat anak bukan jadwalmu. Tapi bagaimana rasanya berada di dekatmu.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-4 flex flex-col items-center md:items-start"
          >
            {/* Book Image */}
            <div className="relative group w-full max-w-[320px] md:max-w-none">
              <img 
                src="https://res.cloudinary.com/dkhf63xbe/image/upload/v1778053561/apwbook_chr7lq.png" 
                alt="Ayah Paruh Waktu Book Cover"
                className="w-full h-auto rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/20 blur-2xl translate-y-8 scale-90 -z-10 opacity-30" />
            </div>

            {/* Release Info & Button */}
            <div className="pt-10 space-y-6 flex flex-col items-center md:items-start text-center md:text-left w-full">
              <div className="flex flex-col gap-1 items-center md:items-start">
                <span className="text-xs uppercase tracking-widest text-ink/40">Tanggal Terbit</span>
                <p className="text-2xl font-serif">Rilis 22 Juni 2026.</p>
              </div>
              <Button variant="primary">Wishlist Buku</Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* PESAN TAK TERKIRIM */}
      <Section id="pesan" className="bg-ink text-paper text-center relative overflow-hidden">
        {/* Background Decorations */}
        <StarDecor className="-left-80 md:-left-64 top-0 opacity-[0.105] md:opacity-[0.14] rotate-[25deg]" />
        <StarDecor className="-right-80 md:-right-64 bottom-0 opacity-[0.105] md:opacity-[0.14] rotate-[-15deg]" />
        
        <motion.div {...fadeIn} className="max-w-2xl mx-auto space-y-12 relative z-10">
          {/* Section Logo */}
          <div className="flex justify-center">
            <div 
              className="w-[576px] h-[144px] bg-paper opacity-90"
              style={{
                maskImage: "url('https://res.cloudinary.com/dkhf63xbe/image/upload/v1778050290/apwhug_txmpek.svg')",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
                WebkitMaskImage: "url('https://res.cloudinary.com/dkhf63xbe/image/upload/v1778050290/apwhug_txmpek.svg')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
              }}
            />
          </div>

          <h2 className="text-3xl md:text-5xl text-balance">Ada hal yang ingin kamu sampaikan — tapi tidak pernah bisa.</h2>
          
          <div className="space-y-4 text-paper/60 font-sans font-light text-base">
            <p>Kepada ayah. Kepada anak. Kepada diri sendiri yang dulu.</p>
            <p>
              Tuliskan di sini. Tidak ada yang akan menerimanya. Tapi mungkin, cukup dengan menuliskannya — sesuatu bisa mulai lepas.
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <Button 
              variant="secondary" 
              className="group"
            >
              Tulis Pesanmu <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-[10px] italic text-paper/30 uppercase tracking-widest leading-loose">
              Pesanmu akan tersimpan di ruang yang tenang.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* FOOTER */}
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
              <svg 
                 width="20" 
                 height="20" 
                 viewBox="0 0 24 24" 
                 fill="none" 
                 stroke="currentColor" 
                 strokeWidth="2" 
                 strokeLinecap="round" 
                 strokeLinejoin="round"
               >
                 <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
               </svg>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
