import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";
import profile from "../assets/profile.jpg";
import resume from "../assets/Anupriya_BCA.pdf";
import Skills from "./Skills";

// Animation settings
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

export default function Hero() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built using React, Vite, Tailwind CSS, and Framer Motion. Live demo and GitHub code available.",
      live: "#",
      github: "#",
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
        "A full-stack e-learning platform with login, courses, and a student dashboard.",
      live: "#",
      github: "#",
    },
  ];

  const skills = [
    { name: "HTML, CSS, JavaScript", level: 90 },
    { name: "React, Tailwind CSS", level: 85 },
    { name: "Git, GitHub", level: 80 },
    { name: "Figma, VS Code", level: 75 },
    { name: "Teamwork, Communication", level: 70 },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-gray-200 min-h-screen font-sans text-center">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="py-16 px-4">
        <motion.img
          src={profile}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl font-bold text-violet-400"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Anupriya Singh
        </motion.h1>
        <p className="text-xl text-gray-400 mt-2">
          Web Developer & UI/UX Designer
        </p>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Passionate about creating seamless user experiences with modern design
          & clean code.
        </p>
      </section>

      {/* Contact Info */}
      <motion.section
        className="py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">
          📞 Contact Information
        </h2>
        <div className="flex justify-center items-center gap-6 text-2xl mt-6">
          <a
            href="mailto:singhanupriya2008@gmail.com"
            className="text-violet-400 hover:text-violet-500 transition transform hover:scale-125 duration-200"
            title="Email"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/anupriya-singh-a2434a289/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition transform hover:scale-125 duration-200"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/anupriyaasingh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition transform hover:scale-125 duration-200"
            title="Leetcode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://github.com/anupriya2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition transform hover:scale-125 duration-200"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={resume}
            download
            className="text-violet-400 hover:text-violet-300 transition transform hover:scale-125 duration-200"
            title="Download Resume"
          >
            <HiDocumentDownload />
          </a>
        </div>
        <div className="mt-10">
          <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse inline-block" />
        </div>
      </motion.section>

      {/* About Me */}
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

      <Skills />

      {/*Projects */}
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

      {/* Education */}
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
            Present (CGPA: 8.32)
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

      {/* Experience */}
      <motion.section
        id="experience"
        className="py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">
          🗂️ Experience
        </h2>
        <div className="text-gray-400 max-w-xl mx-auto">
          <p>
            <strong>Frontend Developer Intern</strong> at Meadow Agricultures
            Pvt. Ltd. (June 2025-July 2025 )
          </p>
        </div>
        <div className="mt-10">
          <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse inline-block" />
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        id="certifications"
        className="py-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">
          🏆 Certifications
        </h2>
        <ul className="list-disc list-inside text-gray-400 max-w-xl mx-auto text-left space-y-1">
          <li>AINCAT 2025</li>
          <li>JavaScript Certification</li>
        </ul>
        <div className="mt-10">
          <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse inline-block" />
        </div>
      </motion.section>

      {/* Contact Button */}
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

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        © 2025 Anupriya Singh. All rights reserved.
      </footer>
    </div>
  );
}
