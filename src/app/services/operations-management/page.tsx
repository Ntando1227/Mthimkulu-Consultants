"use client";

import { motion } from "framer-motion";

const words = ["Operations", "management."];

export default function OperationsManagementPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <motion.video autoPlay muted loop playsInline preload="metadata" animate={{ scale: [1, 1.035, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/e.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[#1d140d]/74" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#1d140d]/55 to-[#1d140d]/95" />

      <section className="relative z-10 px-6 pb-24 pt-32 md:px-12">
        <p className="section-label mb-8">Service / 02</p>

        <h1 className="editorial-heading max-w-7xl text-[3.3rem] md:text-[6.8rem]">
          {words.map((word, index) => (
            <motion.span key={word} initial={{ opacity: 0, y: 100, rotateX: -80, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, delay: 0.15 + index * 0.15, ease: [0.16, 1, 0.3, 1] }} className="editorial-word origin-bottom">
              {word}
            </motion.span>
          ))}
        </h1>

        <p className="large-body mt-12 max-w-4xl">
          For businesses that need stronger workflows, reporting, coordination, process discipline, and delivery rhythm.
        </p>

        <div className="mt-24 grid gap-8 lg:grid-cols-12">
          {[
            ["01", "Workflow mapping", "We identify how work actually moves through the business and where friction slows delivery."],
            ["02", "Reporting rhythm", "We create clearer routines for tracking work, reviewing progress, and managing accountability."],
            ["03", "Process improvement", "We help simplify operations so teams know what needs to happen, when, and by whom."],
          ].map(([num, title, text]) => (
            <article key={title} className="lg:col-span-12 rounded-tl-[5rem] rounded-br-[5rem] border border-white/15 bg-black/30 p-8 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-[#f2d18b]">{num}</p>
              <h2 className="mt-12 text-4xl font-black uppercase leading-[1.05] tracking-[-0.02em] md:text-6xl">{title}</h2>
              <p className="large-body mt-8 max-w-4xl">{text}</p>
            </article>
          ))}
        </div>
              <div className="mt-20 flex flex-wrap gap-4">
          <a
            href="/services"
            className="border border-white/20 px-6 py-5 text-xs font-black uppercase tracking-[0.35em] text-white transition hover:border-[#f2d18b] hover:text-[#f2d18b]"
          >
            Back to Services
          </a>

          <a
            href="/contact"
            className="bg-[#e8d5b5] px-6 py-5 text-xs font-black uppercase tracking-[0.35em] text-black transition hover:bg-white"
          >
            Start Conversation
          </a>
        </div>
      </section>
    </main>
  );
}



