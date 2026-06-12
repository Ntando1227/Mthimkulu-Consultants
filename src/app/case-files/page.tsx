"use client";

import { motion } from "framer-motion";
import { motionProfiles } from "../../components/motionProfiles";

const words = ["Case", "files."];

const files = [
  {
    number: "01",
    title: "When growth creates operational friction.",
    situation:
      "A growing organisation experiences increasing demand. Growth is positive, but internal processes have not evolved at the same pace.",
    challenge:
      "The problem is not effort. The team is working hard, but information is scattered across emails, meetings, spreadsheets, and individuals.",
    approach:
      "We focus on workflow mapping, reporting structures, accountability points, and project visibility.",
    outcome:
      "The organisation gains better delivery visibility, stronger coordination, and less dependence on informal communication.",
    outputs: ["Workflow mapping", "Reporting clarity", "Delivery visibility", "Accountability structure"],
    shape: "wide",
  },
  {
    number: "02",
    title: "When strategy exists but execution does not.",
    situation:
      "Leadership has a clear vision, but teams struggle to translate strategic objectives into everyday actions.",
    challenge:
      "People understand the destination, but priorities, milestones, ownership, and execution rhythm are unclear.",
    approach:
      "We break strategic objectives into operational milestones, practical activities, and measurable progress points.",
    outcome:
      "Decision-making becomes clearer, implementation becomes easier to track, and progress becomes more visible.",
    outputs: ["Execution rhythm", "Milestones", "Priority clarity", "Progress tracking"],
    shape: "tall",
  },
  {
    number: "03",
    title: "Marketing without market clarity.",
    situation:
      "A business is posting, promoting, and communicating, but engagement remains inconsistent.",
    challenge:
      "The issue is not visibility. The issue is positioning. The market does not clearly understand why the business matters.",
    approach:
      "We refine the business proposition, sharpen the audience focus, and align messaging around a clearer market position.",
    outcome:
      "Marketing activity becomes more coherent, easier to execute, and more relevant to the intended audience.",
    outputs: ["Positioning", "Audience clarity", "Message discipline", "Campaign direction"],
    shape: "feature",
  },
  {
    number: "04",
    title: "Coordinating complex work across stakeholders.",
    situation:
      "A programme or business operation involves multiple people, sites, suppliers, deadlines, and reporting requirements.",
    challenge:
      "Without a central operating rhythm, complexity creates delays, communication gaps, and inconsistent follow-through.",
    approach:
      "We create tracking systems, implementation schedules, reporting tools, and coordination structures.",
    outcome:
      "The work becomes easier to monitor, manage, and communicate across the people responsible for delivery.",
    outputs: ["Coordination system", "Implementation schedule", "Reporting tools", "Stakeholder visibility"],
    shape: "wide",
  },
  {
    number: "05",
    title: "Building systems before scaling.",
    situation:
      "A business wants to grow, but its current systems are already under pressure.",
    challenge:
      "Scaling weak systems does not create growth. It creates larger inefficiencies.",
    approach:
      "We review processes, identify operational risks, and strengthen the structure before expansion.",
    outcome:
      "The business enters growth with stronger foundations, clearer routines, and better operational resilience.",
    outputs: ["System review", "Growth readiness", "Process design", "Operational resilience"],
    shape: "feature",
  },
];

export default function CaseFilesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/e.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[#1d140d]/74" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#1d140d]/55 to-[#1d140d]/95" />

      <section className="relative z-10 px-6 pb-24 pt-32 md:px-12">
        <p className="section-label mb-8">Case Files</p>

        <h1 className="editorial-heading max-w-7xl text-[3.3rem] md:text-[6.8rem]">
          {words.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 100, rotateX: -80, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.15 + index * 0.15,
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
            Not generic case studies. These are the kinds of business situations
            where strategy, operations, and marketing need to work together.
          </p>

          <div className="glass rounded-tr-[4rem] rounded-bl-[4rem] p-8">
            <p className="mini-label">Operating view</p>
            <p className="mt-5 text-2xl leading-relaxed text-white/85">
              Most business problems are not isolated. They sit between direction,
              systems, people, and market clarity.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-12">
          {files.map((file, index) => {
            const shape =
              file.shape === "wide"
                ? "rounded-tr-[5rem] rounded-bl-[2rem]"
                : file.shape === "tall"
                ? "rounded-tl-[5rem] rounded-br-[5rem]"
                : "rounded-tl-[2rem] rounded-br-[6rem]";

            return (
              <motion.article
                key={file.title}
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
                      {file.number}
                    </p>

                    <p className="hidden max-w-xs text-right text-[10px] uppercase tracking-[0.3em] text-white/45 md:block">
                      Mthimkulu Consulting
                    </p>
                  </div>

                  <h2 className="mt-12 max-w-5xl text-4xl font-black uppercase leading-[1.08] tracking-[-0.02em] md:text-5xl">
                    {file.title}
                  </h2>

                  <div className="mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                    <div className="space-y-8">
                      <div>
                        <p className="mini-label">Situation</p>
                        <p className="question-text mt-4">
                          {file.situation}
                        </p>
                      </div>

                      <div>
                        <p className="mini-label">Challenge</p>
                        <p className="question-text mt-4">
                          {file.challenge}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div>
                        <p className="mini-label">Approach</p>
                        <p className="large-body mt-4 max-w-3xl">
                          {file.approach}
                        </p>
                      </div>

                      <div className="mt-10">
                        <p className="mini-label">Outcome</p>
                        <p className="large-body mt-4 max-w-3xl">
                          {file.outcome}
                        </p>
                      </div>

                      <div className="mt-10 grid gap-3 sm:grid-cols-2">
                        {file.outputs.map((output) => (
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
