import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import profile from "../assets/profile.jpg";

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
    // Add more projects here...
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
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          📞 Contact Information
        </h2>
        <div className="flex justify-center items-center gap-6 text-2xl mt-6">
          <a
            href="mailto:anupriya@example.com"
            className="text-violet-400 hover:text-violet-500 transition transform hover:scale-125 duration-200"
            title="Email"
          >
            <MdEmail />
          </a>
          <a
            href="https://linkedin.com/in/anupriya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition transform hover:scale-125 duration-200"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anupriya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition transform hover:scale-125 duration-200"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="/resume.pdf"
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
      </section>
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
            with a love for crafting modern and responsive web applications.
            With hands-on experience in{" "}
            <span className="text-blue-400">HTML</span>,{" "}
            <span className="text-yellow-300">CSS</span>,
            <span className="text-yellow-400"> JavaScript</span>,{" "}
            <span className="text-cyan-400">React</span>, and
            <span className="text-purple-400"> Tailwind</span>, I specialize in
            building sleek, interactive UIs that deliver both style and
            performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse" />
          </motion.div>
        </div>
      </section>
      {/* Projects */}
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
      {/* Skills */}
      <section id="skills" className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-10 flex items-center justify-center gap-2"
          >
            <span>🧠</span> Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1 text-sm text-gray-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-violet-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse" />
          </motion.div>
        </div>
      </section>
      {/* Experience & Education */}
      <section id="Education" className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          🗂️ Experience & Education
        </h2>
        <div className="text-gray-400 max-w-xl mx-auto">
          <p>
            <strong>Intern - Web Developer</strong> at ABC Solutions (2024)
          </p>
          <p>
            <strong>BCA</strong> - XYZ University, 2023 - Present
          </p>
        </div>
      </section>
      {/* Achievements & Certifications */}
      <section id="achievements" className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          🏆 Achievements & Certifications
        </h2>
        <ul className="list-disc list-inside text-gray-400 max-w-xl mx-auto text-left">
          <li>Coursera Full Stack Certificate</li>
          <li>Winner - Hackathon 2024, Lucknow</li>
        </ul>
      </section>
      {/* Hire Me Button */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          📨 Interested in working together?
        </h2>
        <a
          href="mailto:anupriya@example.com"
          className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-medium py-2 px-6 rounded transition duration-300"
        >
          Hire Me
        </a>
      </section>
      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        © 2025 Anupriya Singh. All rights reserved.
      </footer>
    </div>
  );
}
