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
export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionAnimation}
    >
      <h2 className="text-2xl font-semibold mb-4 text-white">🗂️ Education</h2>
      <div className="text-gray-400 max-w-xl mx-auto space-y-3">
        <p>
          <strong>BCA</strong> – SHRI RAMSWAROOP MEMORIAL UNIVERSITY, 2023 –
          Present (CGPA: 8.49)
        </p>
        <p>
          <strong>Intermediate</strong> – LUCKNOW PUBLIC SCHOOL, 2023 (90.8%)
        </p>
        <p>
          <strong>High School</strong> – LUCKNOW PUBLIC SCHOOL, 2021 (90.2%)
        </p>
      </div>
      <div className="mt-10">
        <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse inline-block" />
      </div>
    </motion.section>
  );
}
