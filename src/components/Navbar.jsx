import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let sec of sections) {
        const el = document.getElementById(sec.id);
        if (el?.offsetTop <= scrollY + 100) setActive(sec.id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base text-gray-300 justify-center mt-5 mb-5">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`transition-all px-2 py-1 rounded ${
                  active === sec.id
                    ? "text-violet-400 border-b-2 border-violet-400"
                    : "hover:text-white"
                }`}
              >
                {sec.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex left w-full ">
          <button
            className="text-white text-xl focus:outline-none cursor-pointer hover:text-violet-400"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col md:hidden gap-4 text-gray-300 bg-black bg-opacity-80 backdrop-blur-sm rounded-md p-4 mt-2 w-full items-center">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  onClick={closeMenu}
                  className={`block text-center transition-all px-2 py-1 rounded ${
                    active === sec.id
                      ? "text-violet-400 border-b border-violet-400"
                      : "hover:text-white"
                  }`}
                >
                  {sec.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
