"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
        className="fixed left-0 top-0 z-[9999] h-screen w-1/2 overflow-hidden bg-[#e8d5b5] shadow-[40px_0_100px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/20" />
        <div className="absolute right-0 top-0 h-full w-[3px] bg-black/50" />

        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[11px] font-black uppercase tracking-[0.55em] text-black/55">
          MTHIMKULU
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
        className="fixed right-0 top-0 z-[9999] h-screen w-1/2 overflow-hidden bg-[#e8d5b5] shadow-[-40px_0_100px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-white/20" />
        <div className="absolute left-0 top-0 h-full w-[3px] bg-black/50" />

        <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[11px] font-black uppercase tracking-[0.55em] text-black/55">
          CONSULTING
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, filter: "blur(16px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>

    </div>
  );
}

