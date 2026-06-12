"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Method", "/method"],
  ["Thinking", "/thinking"],
  ["Files", "/case-files"],
  ["Contact", "/contact"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-[100] text-[10px] uppercase tracking-[0.35em] text-[#f2d18b]"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div className="fixed inset-0 z-[90] flex flex-col justify-end bg-[#120c07]/96 px-6 pb-10 pt-28 backdrop-blur-xl">
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#f2d18b]">
              Mthimkulu Consulting
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Business consultancy, operations management, and marketing.
            </p>
          </div>

          <div className="grid gap-4">
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-4 text-4xl font-black uppercase leading-none tracking-[-0.05em] text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
