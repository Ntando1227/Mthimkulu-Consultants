import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import CursorGlow from "../components/CursorGlow";
import AmbientEffects from "../components/AmbientEffects";
import MobileMenu from "../components/MobileMenu";
import ScrollProgress from "../components/ScrollProgress";
import Atmosphere from "../components/Atmosphere";

export const metadata = {
  title: "Mthimkulu Consulting",
  description: "Business consultancy, operations management, and marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <CursorGlow />
        <AmbientEffects />
        <Atmosphere />

        <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-5">

            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/FullLogo.jpg"
                alt="Mthimkulu Consulting"
                width={46}
                height={46}
                className="rounded-full border border-white/10 object-cover"
              />

              <div>
                <p className="text-xs font-black uppercase tracking-[0.45em] text-[#f2d18b]">
                  MTHIMKULU
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/45">
                  Consulting
                </p>
              </div>
            </Link>

            <div className="hidden gap-6 text-[10px] uppercase tracking-[0.3em] text-white/70 md:flex">
              <Link href="/about" className="transition hover:text-[#f2d18b]">About</Link>
              <Link href="/services" className="transition hover:text-[#f2d18b]">Services</Link>
              <Link href="/method" className="transition hover:text-[#f2d18b]">Method</Link>
              <Link href="/thinking" className="transition hover:text-[#f2d18b]">Thinking</Link>
              <Link href="/case-files" className="transition hover:text-[#f2d18b]">Files</Link>
              <Link href="/contact" className="transition hover:text-[#f2d18b]">Contact</Link>
            </div>

            <MobileMenu />

          </div>
        </nav>

        {children}

        <footer className="relative z-40 border-t border-white/10 bg-[#120c07] px-6 py-12 text-white md:px-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.45em] text-[#f2d18b]">
                Mthimkulu Consulting
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
                Business consultancy, operations management, and marketing for businesses that need practical movement.
              </p>
            </div>

            <div className="grid gap-3 text-xs uppercase tracking-[0.3em] text-white/55 md:text-right">
              <Link href="/services" className="hover:text-[#f2d18b]">Services</Link>
              <Link href="/method" className="hover:text-[#f2d18b]">Method</Link>
              <Link href="/thinking" className="hover:text-[#f2d18b]">Thinking</Link>
              <Link href="/contact" className="hover:text-[#f2d18b]">Contact</Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.3em] text-white/35 md:flex-row">
            <p>© 2026 Mthimkulu Consulting</p>
            <p>South Africa</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
