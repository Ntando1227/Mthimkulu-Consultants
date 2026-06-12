"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { motionProfiles } from "../../components/motionProfiles";

const words = ["Work", "that", "moves", "business."];

const services = [
  {
    number: "01",
    title: "Business Consultancy",
    question: "Where is the business trying to go, and what is getting in the way?",
    description:
      "We help businesses clarify direction, assess opportunities, identify pressure points, and turn ambition into a practical route forward.",
    outputs: ["Business diagnosis", "Growth direction", "Decision support", "Practical action plan"],
    shape: "wide",
    href: "/services/business-consultancy",
  },
  {
    number: "02",
    title: "Operations Management",
    question: "What needs to change behind the scenes for the work to move properly?",
    description:
      "We improve the operating engine of the business: workflows, reporting, team coordination, delivery routines, service standards, and performance discipline.",
    outputs: ["Workflow mapping", "Reporting rhythm", "Process improvement", "Team coordination"],
    shape: "tall",
    href: "/services/operations-management",
  },
  {
    number: "03",
    title: "Marketing",
    question: "Why should people care, trust, remember, and choose this business?",
    description:
      "We sharpen market presence through positioning, messaging, audience understanding, campaign direction, and brand communication.",
    outputs: ["Brand positioning", "Messaging strategy", "Campaign direction", "Audience clarity"],
    shape: "feature",
    href: "/services/marketing",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/c.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[#2a1f15]/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#2a1f15]/55 to-[#2a1f15]/95" />

      <section className="relative z-10 px-6 pb-24 pt-32 md:px-12">
        <p className="section-label mb-8">Services</p>

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

        <div className="mt-16 grid gap-8 md:grid-cols-[0.6fr_0.4fr]">
          <p className="large-body max-w-4xl">
            Three practical pillars for businesses that need sharper thinking,
            cleaner execution, and stronger visibility.
          </p>

          <div className="glass rounded-tl-[4rem] rounded-br-[4rem] p-8">
            <p className="mini-label">Operating belief</p>
            <p className="mt-5 text-2xl leading-relaxed text-white/85">
              A business moves properly when direction, systems, and visibility work together.
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-12">
          {services.map((service, index) => {
            const shape =
              service.shape === "wide"
                ? "rounded-tr-[5rem] rounded-bl-[2rem]"
                : service.shape === "tall"
                ? "rounded-tl-[5rem] rounded-br-[5rem]"
                : "rounded-tl-[2rem] rounded-br-[6rem]";

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 55, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: motionProfiles.services.item.duration, delay: index * 0.08 }}
                whileHover={motionProfiles.services.hover}
                className={`${shape} group relative overflow-hidden border border-white/15 bg-black/30 p-8 backdrop-blur-xl transition duration-500 hover:border-[#f2d18b]/70 hover:bg-black/45 lg:col-span-12`}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[5rem] bg-[#e8d5b5]/15 transition group-hover:bg-[#e8d5b5]/25" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-8">
                    <p className="text-xs uppercase tracking-[0.4em] text-[#f2d18b]">
                      {service.number}
                    </p>

                    <p className="hidden max-w-xs text-right text-[10px] uppercase tracking-[0.3em] text-white/45 md:block">
                      Mthimkulu Consulting
                    </p>
                  </div>

                  <h2 className="mt-16 max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
                    {service.title}
                  </h2>

                  <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <p className="mini-label">Diagnostic Question</p>
                      <p className="question-text mt-4">
                        {service.question}
                      </p>
                    </div>

                    <div>
                      <p className="large-body max-w-3xl">
                        {service.description}
                      </p>

                      <div className="mt-10 grid gap-3 sm:grid-cols-2">
                        {service.outputs.map((output) => (
                          <div
                            key={output}
                            className="border border-white/10 bg-white/10 px-5 py-4 text-xs uppercase tracking-[0.25em] text-white/75 transition group-hover:border-[#f2d18b]/50"
                          >
                            {output}
                          </div>
                        ))}
                      </div>

                      <Link
                        href={service.href}
                        className="mt-10 inline-block bg-[#e8d5b5] px-6 py-5 text-xs font-black uppercase tracking-[0.35em] text-black transition hover:bg-white"
                      >
                        View Service
                      </Link>
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
