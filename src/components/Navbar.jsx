import React, { useState, useEffect } from "react";

const sections = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Certifications", id: "certifications" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

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

  return (
    <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-md shadow-md">
      <ul className="flex justify-center gap-6 p-4 text-sm md:text-base text-gray-300">
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
    </nav>
  );
}
