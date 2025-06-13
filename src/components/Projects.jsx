import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow">
            <img src={project.image} alt={project.title} className="rounded-md mb-3" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <ul className="text-sm my-2 list-disc pl-4">
              {project.content.map((pt, i) => <li key={i}>{pt}</li>)}
            </ul>
            <p className="text-sm text-gray-600">🔧 {project.tech.join(', ')}</p>
            <a href={project.giturl} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm mt-2 inline-block">GitHub ↗</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
