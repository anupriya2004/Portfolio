import React from "react";
import { motion } from "framer-motion";
const sectionAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};
export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionAnimation}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">🗂️ Experience</h2>
      <div className="text-gray-400 max-w-xl mx-auto">
        <p>
          <strong>Data Engineer Intern</strong> at Coding Blocks (August
          2025-October 2025 )
        </p>
      </div>
      <div className="mt-10">
        <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse inline-block" />
      </div>
    </motion.section>
  );
}
