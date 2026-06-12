"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Method", "/method"],
  ["Case Files", "/case-files"],
  ["Contact", "/contact"],
];

const words = ["Move", "the", "business", "forward."];

const credibility = [
  ["Strategic Direction", "Clarifying priorities, decisions, and growth pathways."],
  ["Operational Discipline", "Building systems, reporting structures, and accountability."],
  ["Programme Delivery", "Coordinating complex implementation across stakeholders."],
  ["Market Positioning", "Helping organisations communicate with clarity and purpose."],
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      <section className="relative h-screen w-screen overflow-hidden">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
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
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9 }}
            className="text-xs uppercase tracking-[0.5em] text-[#f5d79b]"
          >
            Business Consultancy / Operations Management / Marketing
          </motion.p>

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
              className="large-body mt-8 max-w-3xl"
            >
              Mthimkulu Consulting helps organisations move from intention to execution
              through clearer strategy, stronger systems, and sharper market presence.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.25em] text-white/65 md:gap-8 md:text-xs md:tracking-[0.35em]"
          >
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="group relative overflow-hidden transition hover:text-[#f5d79b]">
                <span>{label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#f5d79b] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </motion.div>
        </section>
      </section>

      <section className="relative z-10 bg-[#120c07] px-6 py-28 md:px-12">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label mb-8">Credibility</p>

            <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-7xl">
              From intention to execution.
            </h2>
          </div>

          <p className="large-body max-w-4xl">
            Many organisations know what they want to achieve. The harder work is
            building the rhythm, structure, communication, and operating discipline
            required to make progress visible.
          </p>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {credibility.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              className="group rounded-tr-[4rem] rounded-bl-[2rem] border border-white/15 bg-black/25 p-8 backdrop-blur-xl transition duration-500 hover:border-[#f2d18b]/70 hover:bg-[#e8d5b5] hover:text-black"
            >
              <p className="mb-10 text-xs uppercase tracking-[0.35em] text-[#f2d18b]">
                0{index + 1}
              </p>

              <h3 className="text-4xl font-black uppercase leading-tight tracking-[-0.04em]">
                {title}
              </h3>

              <p className="mt-8 text-lg leading-relaxed text-white/70 group-hover:text-black/70">
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
