"use client";

import { motion } from "framer-motion";

export default function Atmosphere() {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0.18, 0.32, 0.18],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed left-[-20%] top-[-20%] z-[2] h-[700px] w-[700px] rounded-full bg-[#f2d18b]/10 blur-[120px]"
      />

      <motion.div
        animate={{
          opacity: [0.12, 0.22, 0.12],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed bottom-[-20%] right-[-10%] z-[2] h-[600px] w-[600px] rounded-full bg-[#c08a44]/10 blur-[120px]"
      />

      <div
        className="pointer-events-none fixed inset-0 z-[3] opacity-[0.04]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </>
  );
}
