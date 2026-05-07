import { motion } from "motion/react";
import { StarField, Section } from "../components/Shared";

export default function Pesan() {
  return (
    <div className="bg-grain min-h-screen selection:bg-terracotta/20">
      <Section className="pt-40">
        <StarField />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl mb-8 font-serif">Pesan Tak Terkirim</h1>
          <p className="text-ink/60 max-w-xl mx-auto font-sans font-light">
            Ruang untuk menuliskan hal-hal yang tersimpan. Halaman ini akan segera diintegrasikan dengan sistem pesan tak terkirim keduamu.
          </p>
        </motion.div>
      </Section>
    </div>
  );
}
