import { motion, useScroll, useTransform } from "motion/react";
import React from "react";

export const StarDecor = ({ className = "" }: { className?: string }) => (
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

export const StarField = () => {
  const { scrollY } = useScroll();
  const yBack = useTransform(scrollY, [0, 1000], [0, 200]);
  const yFront = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d67011]/20" />
    </div>
  );
};

export const Section = ({ 
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

export const Button = ({ 
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
