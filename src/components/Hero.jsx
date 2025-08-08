import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Certifications from "./Certifications";
import ContactButton from "./ContactButton";

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

      <Contact />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certifications />
      <ContactButton />
      <Footer />
    </div>
  );
}
