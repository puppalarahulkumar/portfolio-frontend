import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!project) return <div className="text-center mt-10 text-red-500">Project not found.</div>;
  console.log(project.title)
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">{project.title}</h1>

      {project.image && (
        <img
          src={`https://res.cloudinary.com/ddvpkg9d4/${project.image}`}
          alt={project.title}
          className="w-full rounded-xl shadow-lg"
        />
      )}

      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📄 Description</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {Array.isArray(project.content) &&
            project.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🛠️ Technologies</h2>
        <ul className="flex flex-wrap gap-2">
          {Array.isArray(project.tech) &&
            project.tech.map((techItem, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {techItem}
              </li>
            ))}
        </ul>
      </div>

      {project.giturl && (
        <a
          href={project.giturl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          🔗 View on GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectDetails;
