import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";
import resume from "../assets/Anupriya_Singh_cv_1856.pdf";
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
export default function Contact() {
  return (
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
  );
}
