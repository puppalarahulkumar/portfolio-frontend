import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Community from '../components/Community';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const Home = () => {

  const [hero, setHero] = useState(null);
  const [about, setAbout] = useState(null);
  const [community, setCommunity] = useState(null);
  const [contact, setContact] = useState(null);
  const [projects, setProjects] = useState([]); // new
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [heroRes, aboutRes, communityRes, contactRes, projectsRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/hero/1/`).then(res => res.json()),
          fetch(`${API_BASE_URL}/api/about/1/`).then(res => res.json()),
          fetch(`${API_BASE_URL}/api/community/1/`).then(res => res.json()),
          fetch(`${API_BASE_URL}/api/contact/1/`).then(res => res.json()),
          fetch(`${API_BASE_URL}/api/projects/`).then(res => res.json()) // fetch projects
        ]);

        setHero(heroRes);
        setAbout(aboutRes);
        setCommunity(communityRes);
        setContact(contactRes);
        setProjects(projectsRes); // set projects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className="home space-y-20">
      <Hero data={hero} />
      <About data={about} />

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">📁 Projects</h2>

          {projects.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <li
                  key={project.id}
                  className="bg-white shadow-md rounded-xl border border-gray-200 p-5 hover:shadow-lg transition"
                >
                  <Link
                    to={`/projects/${project.id}`}
                    className="block text-blue-700 hover:underline text-xl font-semibold mb-2"
                  >
                    {project.title}
                  </Link>
                  <p className="text-gray-600 text-sm">
                    {project.content?.[0]?.slice(0, 100)}...
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-base">No projects available.</p>
          )}
        </div>
      </section>

      <Community data={community} />
      <Contact data={contact} />
    </div>
  );
};

export default Home;
