import React from 'react';

const ProfileCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hi, I’m Your Name</h1>
        <h2 className="text-lg font-medium text-gray-700">AI Engineer | Full Stack Developer <br />Tech Educator</h2>
        <p className="mt-4 text-gray-600">
          I help companies build smart, scalable products with modern tech—and I love connecting with people who are equally passionate about learning, building, and creating impact.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700">Hire Me</button>
          <button className="border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-blue-50">Let’s Connect</button>
        </div>

        {/* Section: What I Do */}
        <div className="mt-10 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold flex items-center gap-2">🚀 What I Do</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>AI & Machine Learning solutions</li>
            <li>Full Stack Web Apps (React, Django, REST APIs)</li>
            <li>Clean, maintainable code and solid backend logic</li>
          </ul>
        </div>

        {/* Section: Work With Me */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold flex items-center gap-2">🧪 Work With Me</h3>
          <p className="mt-2 text-gray-700">
            Looking for someone who understands both business value and deep tech?
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Rapid prototyping & MVPs</li>
            <li>Scalable AI & backend architectures</li>
            <li>Clean, well-documented frontend code</li>
          </ul>
        </div>

        {/* Section: Let’s Collaborate */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold flex items-center gap-2">💻 Let’s Collaborate</h3>
          <p className="mt-2 text-gray-700">
            I’m always open to new projects, ideas, and meaningful conversations. Let’s build something great together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
