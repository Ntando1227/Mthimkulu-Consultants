"use client";

import { motion } from "framer-motion";

export default function AmbientEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[40] overflow-hidden">

      <motion.div
        animate={{ x: ["-30%", "130%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 h-full w-[18%] skew-x-[-14deg] bg-gradient-to-r from-transparent via-[#f5d79b]/10 to-transparent blur-2xl"
      />

      <motion.div
        animate={{ y: ["-100%", "120%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 top-0 h-44 w-full bg-gradient-to-b from-transparent via-white/6 to-transparent"
      />

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
        className="absolute right-[8%] top-[18%] h-80 w-80 rounded-full border border-[#f5d79b]/20"
      />

      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-[10%] left-[8%] h-72 w-72 rounded-full bg-[#f5d79b]/20 blur-[110px]"
      />

      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:4px_4px]" />

      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />

    </div>
  );
}
