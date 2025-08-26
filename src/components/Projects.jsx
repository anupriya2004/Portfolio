import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React, Vite, Tailwind CSS, and Framer Motion. Live demo and GitHub code available.",
      live: "https://portfolio-self-nine-39.vercel.app/",
      github: "https://github.com/anupriya2004/Portfolio",
    },
    {
      title: "Bank Management System",
      description:
        "A Python and Tkinter based GUI for managing customer banking activities securely.",
      live: "#",
      github: "#",
    },
    {
      title: "Learnify LMS",
      description:
        "The frontend of an e-learning platform with various static pages made with React,.",
      live: "https://learnify-ruby.vercel.app",
      github: "https://github.com/anupriya2004/Learnify",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 via-gray-800 to-gray-900 text-center"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span>💼</span> Projects
        </motion.h2>

        {/* Scrolling Project Cards */}
        <div className="overflow-hidden mt-10 relative">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 40, // Controls scroll speed (slow)
              ease: "linear",
            }}
          >
            {[...projects, { spacer: true }, ...projects].map(
              (project, index) => {
                if (project.spacer) {
                  return <div key={index} className="w-48" />; // ⬅️ gap between loops
                }

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-gray-800 rounded-xl shadow-xl p-6 w-80 flex-shrink-0 transition duration-300"
                  >
                    <h3 className="text-xl font-semibold text-violet-400 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-4 mt-2">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <FaExternalLinkAlt /> Live
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:underline flex items-center gap-1"
                      >
                        <FaGithub /> Code
                      </a>
                    </div>
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>

        <div className="mt-10">
          <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse inline-block" />
        </div>
      </motion.div>
    </section>
  );
}
