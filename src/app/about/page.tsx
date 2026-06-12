"use client";

import { motion } from "framer-motion";
import { motionProfiles } from "../../components/motionProfiles";

const words = ["Built", "for", "business", "movement."];

const sections = [
  {
    number: "01",
    title: "Business clarity",
    question: "What is the business really trying to become?",
    description: "We help businesses understand where they are, where they are trying to go, and what needs to change in order to move with more confidence.",
    outputs: ["Direction", "Priorities", "Decision support", "Growth thinking"],
    shape: "wide",
  },
  {
    number: "02",
    title: "Operational control",
    question: "What is slowing the work down?",
    description: "We look at the systems behind delivery: workflows, reporting, team coordination, customer handling, service routines, and the practical details that shape performance.",
    outputs: ["Workflows", "Reporting", "Coordination", "Performance rhythm"],
    shape: "tall",
  },
  {
    number: "03",
    title: "Market presence",
    question: "Does the market understand the value?",
    description: "We help businesses sharpen how they show up: positioning, messaging, marketing direction, audience clarity, and communication that supports real business goals.",
    outputs: ["Positioning", "Messaging", "Marketing direction", "Audience clarity"],
    shape: "feature",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <motion.video autoPlay muted loop playsInline preload="metadata" animate={{ scale: [1, 1.035, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/b.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[#1d140d]/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#1d140d]/55 to-[#1d140d]/95" />

      <section className="relative z-10 px-6 pb-24 pt-32 md:px-12">
        <p className="section-label mb-8">About</p>

        <h1 className="editorial-heading max-w-7xl text-[3.3rem] md:text-[6.8rem]">
          {words.map((word, index) => (
            <motion.span key={word} initial={{ opacity: 0, y: 100, rotateX: -80, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, delay: 0.15 + index * 0.15, ease: [0.16, 1, 0.3, 1] }} className="editorial-word origin-bottom">
              {word}
            </motion.span>
          ))}
        </h1>

        <div className="mt-16 grid gap-8 md:grid-cols-[0.6fr_0.4fr]">
          <p className="large-body max-w-4xl">
            Mthimkulu Consulting supports businesses that need clearer strategy,
            stronger operations, and sharper marketing direction.
          </p>

          <div className="glass rounded-tl-[4rem] rounded-br-[4rem] p-8">
            <p className="mini-label">Company position</p>
            <p className="mt-5 text-2xl leading-relaxed text-white/85">
              We are interested in what actually makes a business move.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-12">
          {sections.map((section, index) => {
            const shape =
              section.shape === "wide"
                ? "rounded-tr-[5rem] rounded-bl-[2rem]"
                : section.shape === "tall"
                ? "rounded-tl-[5rem] rounded-br-[5rem]"
                : "rounded-tl-[2rem] rounded-br-[6rem]";

            return (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 55, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: motionProfiles.about.item.duration, delay: index * 0.08 }}
                whileHover={motionProfiles.about.hover}
                className={`lg:col-span-12 ${shape} group relative overflow-hidden border border-white/15 bg-black/30 p-8 backdrop-blur-xl transition duration-500 hover:border-[#f2d18b]/70 hover:bg-black/45`}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-[#e8d5b5]/15 transition group-hover:bg-[#e8d5b5]/25" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-8">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#f2d18b]">{section.number}</p>
                    <p className="hidden max-w-xs text-right text-[10px] uppercase tracking-[0.3em] text-white/45 md:block">Mthimkulu Consulting</p>
                  </div>

                  <h2 className="mt-16 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
                    {section.title}
                  </h2>

                  <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <p className="mini-label">Business Question</p>
                      <p className="question-text mt-4">{section.question}</p>
                    </div>

                    <div>
                      <p className="large-body max-w-3xl">{section.description}</p>

                      <div className="mt-10 grid gap-3 sm:grid-cols-2">
                        {section.outputs.map((output) => (
                          <div key={output} className="border border-white/10 bg-white/10 px-5 py-4 text-xs uppercase tracking-[0.25em] text-white/75 transition group-hover:border-[#f2d18b]/50">
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



