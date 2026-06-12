"use client";

import { motion } from "framer-motion";
import { motionProfiles } from "../../components/motionProfiles";

const words = ["Notes", "from", "the", "market."];

const articles = [
  {
    number: "01",
    title: "Busy is not the same as clear.",
    question: "Is the business moving, or just moving around?",
    description:
      "Many businesses are active every day but still unclear about priorities. We look at whether the work is connected to direction, customers, operations, and real commercial goals.",
    outputs: ["Strategic focus", "Priority clarity", "Decision discipline", "Business direction"],
    shape: "wide",
  },
  {
    number: "02",
    title: "Operations are the hidden brand.",
    question: "What does the customer experience before the marketing starts?",
    description:
      "A business can have a good brand identity and still lose trust through poor systems. Delays, confusion, weak follow-up, inconsistent service, and unclear processes all become part of the brand.",
    outputs: ["Service rhythm", "Customer experience", "Process quality", "Operational trust"],
    shape: "tall",
  },
  {
    number: "03",
    title: "Marketing needs a point of view.",
    question: "Why should the market remember this business?",
    description:
      "Marketing becomes stronger when the business knows what it stands for, who it serves, what problem it solves, and how it wants to be understood.",
    outputs: ["Positioning", "Message clarity", "Audience understanding", "Brand memory"],
    shape: "feature",
  },
];

export default function ThinkingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/d.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[#2a1d12]/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#2a1d12]/55 to-[#2a1d12]/95" />

      <section className="relative z-10 px-6 pb-24 pt-32 md:px-12">
        <p className="section-label mb-8">Thinking</p>

        <h1 className="editorial-heading max-w-7xl text-[3.3rem] md:text-[6.8rem]">
          {words.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 100, rotateX: -80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.15 + index * 0.13,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="editorial-word origin-bottom"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <div className="mt-16 grid gap-8 md:grid-cols-[0.58fr_0.42fr]">
          <p className="large-body max-w-4xl">
            Short field notes on business clarity, operations, marketing, and the systems
            that separate movement from noise.
          </p>

          <div className="glass rounded-tr-[4rem] rounded-bl-[4rem] p-8">
            <p className="mini-label">Editorial position</p>
            <p className="mt-5 text-2xl leading-relaxed text-white/85">
              Good business thinking should be useful on Monday morning.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-12">
          {articles.map((article, index) => {
            const shape =
              article.shape === "wide"
                ? "rounded-tr-[5rem] rounded-bl-[2rem]"
                : article.shape === "tall"
                ? "rounded-tl-[5rem] rounded-br-[5rem]"
                : "rounded-tl-[2rem] rounded-br-[6rem]";

            return (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 55, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: motionProfiles.thinking.item.duration, delay: index * 0.08 }}
                whileHover={motionProfiles.thinking.hover}
                className={`lg:col-span-12 ${shape} group relative overflow-hidden border border-white/15 bg-black/30 p-8 backdrop-blur-xl transition duration-500 hover:border-[#f2d18b]/70 hover:bg-black/45`}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-[#e8d5b5]/15 transition group-hover:bg-[#e8d5b5]/25" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-8">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#f2d18b]">
                      {article.number}
                    </p>

                    <p className="hidden max-w-xs text-right text-[10px] uppercase tracking-[0.3em] text-white/45 md:block">
                      Business Notes
                    </p>
                  </div>

                  <h2 className="mt-16 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
                    {article.title}
                  </h2>

                  <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <p className="mini-label">Market Question</p>
                      <p className="question-text mt-4">
                        {article.question}
                      </p>
                    </div>

                    <div>
                      <p className="large-body max-w-3xl">
                        {article.description}
                      </p>

                      <div className="mt-10 grid gap-3 sm:grid-cols-2">
                        {article.outputs.map((output) => (
                          <div
                            key={output}
                            className="border border-white/10 bg-white/10 px-5 py-4 text-xs uppercase tracking-[0.25em] text-white/75 transition group-hover:border-[#f2d18b]/50"
                          >
                            {output}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}



