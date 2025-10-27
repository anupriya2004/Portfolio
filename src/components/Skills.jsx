import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiMysql,
  SiFigma,
  SiCanva,
  SiApachespark,
} from "react-icons/si";
import { DiPython } from "react-icons/di";

const techLogos = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, level: 90 },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" />, level: 85 },
  {
    name: "CSS",
    icon: <SiApachespark className="text-orange-500" />,
    level: 85,
  },

  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-cyan-400" />,
    level: 75,
  },
  { name: "React", icon: <SiReact className="text-cyan-300" />, level: 70 },

  { name: "Git", icon: <SiGit className="text-red-500" />, level: 85 },
  { name: "GitHub", icon: <SiGithub className="text-white" />, level: 90 },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" />, level: 80 },
  { name: "Python", icon: <DiPython className="text-yellow-400" />, level: 90 },
  { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 85 },
  { name: "Canva", icon: <SiCanva className="text-sky-500" />, level: 75 },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white mb-10 flex items-center justify-center gap-2"
        >
          <span>🧠</span> Skills
        </motion.h2>

        {/* Horizontal scrolling logos */}
        <div className="overflow-hidden relative h-20">
          <motion.div
            className="flex gap-10 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...techLogos, ...techLogos].map((logo, index) => (
              <button
                key={index}
                className="flex-shrink-0 focus:outline-none cursor-pointer"
                onClick={() => setSelectedSkill(logo)}
              >
                <div className="w-16 h-16 flex items-center justify-center text-4xl hover:scale-110 transition-transform duration-300">
                  {logo.icon}
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Modal for skill progress */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50">
            <div className="bg-gray-900 text-white rounded-lg p-6 w-80 relative">
              <button
                className="absolute top-2 right-2 text-white hover:text-red-500 bold cursor-pointer"
                onClick={() => setSelectedSkill(null)}
              >
                <FaTimes />
              </button>
              <h3 className="text-xl font-bold mb-4">{selectedSkill.name}</h3>
              <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-violet-500 rounded-full cursor-pointer"
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
              <p className="text-sm text-gray-300 mt-2">
                {selectedSkill.level}% Proficiency
              </p>
            </div>
          </div>
        )}

        <div className="mt-10">
          <span className="w-20 h-1 bg-violet-500 rounded-full animate-pulse inline-block" />
        </div>
      </div>
    </section>
  );
}
