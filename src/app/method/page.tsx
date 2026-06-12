"use client";

import { motion } from "framer-motion";

const words = ["The", "Mthimkulu", "Method."];

const stages = [
  {
    number: "01",
    title: "Understand reality.",
    text: "Before recommendations, we seek to understand what is actually happening. Goals, stakeholders, workflows, communication patterns, reporting structures, and constraints are examined to establish a clear picture of reality.",
  },
  {
    number: "02",
    title: "Identify leverage.",
    text: "Most organisations do not have ten major problems. They have a small number of root issues creating many visible symptoms. We identify the areas where focused intervention can create disproportionate impact.",
  },
  {
    number: "03",
    title: "Design the system.",
    text: "Solutions should survive beyond meetings and presentations. We design structures, processes, reporting rhythms, accountability mechanisms, and operating frameworks that support consistent execution.",
  },
  {
    number: "04",
    title: "Embed execution.",
    text: "Strategy becomes valuable only when it changes behaviour. Plans are translated into practical actions, responsibilities, timelines, and measurable progress indicators.",
  },
  {
    number: "05",
    title: "Review and adapt.",
    text: "Markets change. Teams evolve. Circumstances shift. Effective organisations continuously learn, adapt, and improve without losing strategic direction.",
  },
];

export default function MethodPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/b.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[#18120c]/78" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#18120c]/55 to-[#18120c]/96" />

      <section className="relative z-10 px-6 pb-24 pt-32 md:px-12">
        <p className="section-label mb-8">
          Methodology
        </p>

        <h1 className="editorial-heading max-w-7xl text-[3.3rem] md:text-[6.8rem]">
          {words.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 100, rotateX: -80 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="editorial-word"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <div className="mt-16 grid gap-8 md:grid-cols-[0.6fr_0.4fr]">
          <p className="large-body max-w-4xl">
            The Mthimkulu Method is built on a simple belief:
            organisations improve when direction, systems, and execution
            work together. This framework guides every engagement.
          </p>

          <div className="glass rounded-tr-[4rem] rounded-bl-[4rem] p-8">
            <p className="mini-label">
              Core principle
            </p>

            <p className="mt-5 text-2xl leading-relaxed text-white/85">
              Sustainable improvement comes from understanding reality,
              creating structure, and embedding disciplined execution.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-8">
          {stages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-tr-[5rem] rounded-bl-[2rem] border border-white/15 bg-black/30 p-8 backdrop-blur-xl transition hover:border-[#f2d18b]/60"
            >
              <div className="flex flex-col gap-10 md:grid md:grid-cols-[180px_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-[#f2d18b]">
                    {stage.number}
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">
                    {stage.title}
                  </h2>

                  <p className="large-body mt-8 max-w-4xl">
                    {stage.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
