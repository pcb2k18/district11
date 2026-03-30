"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-1"
          >
            <span
              className="text-white text-2xl tracking-[0.25em] uppercase font-light"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              district{" "}
              <span className="bg-white text-[#0a0a0a] px-2 py-0.5 font-semibold">
                eleven
              </span>
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
