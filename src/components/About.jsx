import { motion } from "framer-motion";
import React from "react";
export default function About() {
  return (
    <section id="about" className="py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-2"
        >
          <span>📂</span> About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          I'm a passionate{" "}
          <span className="text-violet-400 font-semibold">
            Computer Science student
          </span>{" "}
          with a love for crafting modern and responsive web applications...
        </motion.p>

        <div className="mt-10">
          <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse inline-block" />
        </div>
      </div>
    </section>
  );
}
