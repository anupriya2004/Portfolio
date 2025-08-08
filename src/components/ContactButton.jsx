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
export default function ContactButton() {
  return (
    <motion.section
      className="py-12 px-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionAnimation}
    >
      <a
        href="mailto:singhanupriya2008@gmail.com"
        className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-6 rounded transition duration-300"
      >
        Contact Me
      </a>
    </motion.section>
  );
}
