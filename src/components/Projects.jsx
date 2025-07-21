export default function Projects() {
  const projects = [
    {
      title: "Learnify Platform",
      description: "An online learning platform using React and Node.js.",
    },
    {
      title: "Bank Management System",
      description: "Built with Python and Tkinter.",
    },
    {
      title: "Spin Wheel App",
      description: "A fun game that selects Indian dishes randomly.",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <h4 className="text-xl font-semibold mb-2 text-primary">
                {proj.title}
              </h4>
              <p className="text-gray-600">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
