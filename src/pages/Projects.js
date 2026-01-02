import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-backend-project.vercel.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="min-h-screen p-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-3">{project.description}</p>

            <p className="text-sm text-gray-500 mb-2">
              <strong>Tech:</strong> {project.tech}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              <strong>Duration:</strong> {project.duration}
            </p>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
