import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { StarDecor, StarField, Section, Button } from "../components/Shared";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  return (
    <div className="bg-grain min-h-screen selection:bg-terracotta/20 scroll-smooth">
      {/* 🔝 HERO */}
      <section className="min-h-screen flex flex-col items-center justify-between text-center px-6 bg-hero relative overflow-hidden">
        <StarField />
        
        {/* Side Star Decorations */}
        <StarDecor className="-left-64 md:-left-48 top-[10%] opacity-[0.14] md:opacity-[0.175] rotate-[-12deg]" />
        <StarDecor className="-right-64 md:-right-48 top-[20%] opacity-[0.175] md:opacity-[0.21] rotate-[15deg]" />

        <div className="h-36 relative z-10" />
        
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
            <Link to="/wishlist" className="w-full sm:w-auto">
              <Button variant="hero" className="w-full">
                Wishlist Buku
              </Button>
            </Link>
            <Link to="/pesantakterkirim" className="w-full sm:w-auto">
              <Button 
                variant="heroOutline" 
                className="w-full"
              >
                Tulis Pesan Tak Terkirim
              </Button>
            </Link>
          </div>
        </motion.div>
        
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
          <h2 className="text-4xl md:text-5xl font-serif">Ayah Paruh Waktu</h2>
          
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
        </motion.div>
      </Section>

      {/* TENTANG BUKU */}
      <Section id="tentang-buku" className="bg-paper flex items-center">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div {...fadeIn} className="md:col-span-8 space-y-6">
            <h2 className="text-4xl md:text-5xl leading-tight font-serif">Cerita yang Tidak Pernah Jauh</h2>
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
            <div className="relative group w-full max-w-[320px] md:max-w-none">
              <img 
                src="https://res.cloudinary.com/dkhf63xbe/image/upload/v1778144319/apwbook-buku_wu1jpd.png" 
                alt="Ayah Paruh Waktu Book Cover"
                className="w-full h-auto rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/20 blur-2xl translate-y-8 scale-90 -z-10 opacity-30" />
            </div>

            <div className="pt-10 space-y-6 flex flex-col items-center md:items-start text-center md:text-left w-full">
              <div className="flex flex-col gap-1 items-center md:items-start">
                <span className="text-xs uppercase tracking-widest text-ink/40">Tanggal Terbit</span>
                <p className="text-2xl font-serif">Rilis 22 Juni 2026.</p>
              </div>
              <Link to="/wishlist">
                <Button variant="primary">Wishlist Buku</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* PESAN TAK TERKIRIM */}
      <Section id="pesan" className="bg-ink text-paper text-center relative overflow-hidden">
        <StarDecor className="-left-80 md:-left-64 top-0 opacity-[0.105] md:opacity-[0.14] rotate-[25deg]" />
        <StarDecor className="-right-80 md:-right-64 bottom-0 opacity-[0.105] md:opacity-[0.14] rotate-[-15deg]" />
        
        <motion.div {...fadeIn} className="max-w-2xl mx-auto space-y-12 relative z-10">
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

          <h2 className="text-3xl md:text-5xl text-balance font-serif">Ada hal yang ingin kamu sampaikan — tapi tidak pernah bisa.</h2>
          
          <div className="space-y-4 text-paper/60 font-sans font-light text-base">
            <p>Kepada ayah. Kepada anak. Kepada diri sendiri yang dulu.</p>
            <p>
              Tuliskan di sini. Tidak ada yang akan menerimanya. Tapi mungkin, cukup dengan menuliskannya — sesuatu bisa mulai lepas.
            </p>
          </div>

          <div className="pt-6 space-y-4">
            <Link to="/pesantakterkirim">
              <Button 
                variant="secondary" 
                className="group"
              >
                Tulis Pesanmu <ArrowRight size={16} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-[10px] italic text-paper/30 uppercase tracking-widest leading-loose">
              Pesanmu akan tersimpan di ruang yang tenang.
            </p>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
