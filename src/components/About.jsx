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
            Full Stack Developer(MERN)
          </span>{" "}
          with a strong foundation in building dynamic, user-friendly web
          applications. Skilled in frontend and backend technologies, I enjoy
          creating seamless digital experiences from concept to deployment.
          Alongside development, I am actively learning Data Structures and
          Algorithms (DSA) to enhance my problem-solving abilities and write
          efficient, scalable code. With a keen eye for aesthetics, I also work
          as a UI/UX Designer, crafting intuitive interfaces that blend
          functionality with visual appeal. I am driven by curiosity,
          creativity, and a commitment to continuous learning, always seeking
          opportunities to innovate and deliver impactful solutions.
        </motion.p>

        <div className="mt-10">
          <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse inline-block" />
        </div>
      </div>
    </section>
  );
}
