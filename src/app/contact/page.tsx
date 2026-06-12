"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { motionProfiles } from "../../components/motionProfiles";

const words = ["Start", "the", "right", "conversation."];

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        organisation: formData.get("organisation"),
        service: formData.get("service"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Your enquiry has been received.");
      form.reset();
    } else {
      setStatus(result.message || "Something went wrong.");
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/f.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[#1f1710]/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#1f1710]/50 to-[#1f1710]/95" />

      <section className="relative z-10 px-6 pb-24 pt-32 md:px-12">
        <p className="section-label mb-8">Contact</p>

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

        <p className="large-body mt-10 max-w-4xl">
          Tell us where the business is, what feels unclear, and what needs to move.
          The first step is not a sales pitch. It is understanding the terrain.
        </p>

        <div className="mt-24 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            {[
              ["01", "You need business clarity.", "What is the real problem beneath the pressure?"],
              ["02", "Your operations need structure.", "Where is the work getting stuck?"],
              ["03", "Your market presence needs focus.", "Is the business being understood correctly?"],
            ].map(([number, title, question]) => (
              <article
                key={title}
                className="group border border-white/15 bg-black/25 p-7 backdrop-blur-xl transition duration-500 hover:border-[#f2d18b]/60"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[#f2d18b]">
                  {number}
                </p>

                <h2 className="mt-8 text-3xl font-black uppercase leading-tight">
                  {title}
                </h2>

                <p className="mt-5 text-xl font-semibold leading-tight text-white/85">
                  {question}
                </p>
              </article>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 45, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: motionProfiles.contact.item.duration, delay: 0.15 }}
            className="glass h-fit p-8 md:p-10"
          >
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#f2d18b]">
              Enquiry Form
            </p>

            <div className="grid gap-5">
              <input name="name" required className="border border-white/20 bg-black/35 px-5 py-4 text-white placeholder:text-white/55 focus:border-[#f2d18b]" placeholder="Your name" />

              <input name="email" required type="email" className="border border-white/20 bg-black/35 px-5 py-4 text-white placeholder:text-white/55 focus:border-[#f2d18b]" placeholder="Email address" />

              <input name="organisation" className="border border-white/20 bg-black/35 px-5 py-4 text-white placeholder:text-white/55 focus:border-[#f2d18b]" placeholder="Business or organisation" />

              <select name="service" className="border border-white/20 bg-black/35 px-5 py-4 text-white focus:border-[#f2d18b]">
                <option>What do you need help with?</option>
                <option>Business consultancy</option>
                <option>Operations management</option>
                <option>Marketing</option>
                <option>Not sure yet</option>
              </select>

              <textarea name="message" required rows={6} className="border border-white/20 bg-black/35 px-5 py-4 text-white placeholder:text-white/55 focus:border-[#f2d18b]" placeholder="Briefly describe the situation, challenge, or opportunity..." />

              <button type="submit" className="mt-3 bg-[#e8d5b5] px-6 py-5 text-xs font-black uppercase tracking-[0.35em] text-black transition hover:bg-white">
                Send Enquiry
              </button>

              {status && (
                <p className="text-sm leading-relaxed text-[#f2d18b]">
                  {status}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
