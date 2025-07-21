export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
        <p className="mb-6">Want to work together or have a question?</p>
        <a
          href="mailto:anupriya@example.com"
          className="px-6 py-3 bg-secondary text-white font-semibold rounded-full shadow-md hover:shadow-lg transition hover:scale-105"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
