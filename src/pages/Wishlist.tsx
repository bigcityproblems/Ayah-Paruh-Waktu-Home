import { motion } from "motion/react";
import { StarField, Section } from "../components/Shared";

export default function Wishlist() {
  return (
    <div className="bg-grain min-h-screen selection:bg-terracotta/20">
      <Section className="pt-40">
        <StarField />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl md:text-7xl mb-8 font-serif">Wishlist Buku</h1>
          <p className="text-ink/60 max-w-xl mx-auto font-sans font-light">
            Simpan buku-buku yang ingin kamu baca di sini. Halaman ini akan segera hadir dengan fitur lengkap dari wishlist keduamu.
          </p>
        </motion.div>
      </Section>
    </div>
  );
}
