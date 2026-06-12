"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Thinking", "/thinking"],
  ["Case Files", "/case-files"],
  ["Contact", "/contact"],
];

const words = ["Move", "the", "business", "forward."];

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">

      <motion.video
        autoPlay
        muted
        loop
        playsInline
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/a.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      <section className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-10 pt-28 md:h-screen md:px-14">

        <div>
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9 }}
            className="text-xs uppercase tracking-[0.5em] text-[#f5d79b]"
          >
            Business Consultancy / Operations Management / Marketing
          </motion.p>
        </div>

        <div>
          <h1 className="editorial-heading max-w-7xl text-[3.3rem] md:text-[6.8rem]">
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 120, rotateX: -85, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1,
                  delay: 0.2 + index * 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="editorial-word origin-bottom"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.05 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/82 md:text-xl"
          >
            Strategy, operations, and marketing for businesses
            that need practical movement.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.25em] text-white/65 md:gap-8 md:text-xs md:tracking-[0.35em]"
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="group relative overflow-hidden transition hover:text-[#f5d79b]"
            >
              <span>{label}</span>

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#f5d79b] transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </motion.div>

      </section>
    </main>
  );
}






