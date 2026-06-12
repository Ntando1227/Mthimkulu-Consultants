"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    damping: 30,
    stiffness: 180,
  });

  const smoothY = useSpring(mouseY, {
    damping: 30,
    stiffness: 180,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 180);
      mouseY.set(e.clientY - 180);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[999] h-[360px] w-[360px] rounded-full bg-[#f5d79b]/12 blur-[120px]"
    />
  );
}
