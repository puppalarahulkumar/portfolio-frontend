import React from 'react';

const About = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Title */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            👋 About Me
          </h2>
          <p className="mt-4 text-xl text-gray-600 leading-relaxed max-w-3xl">
            {data.bio}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">📌 Current Focus</h3>
            <p className="text-gray-700 text-base leading-relaxed">{data.current_focus}</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">🎯 Hobbies</h3>
            <p className="text-gray-700 text-base leading-relaxed">{data.hobbies}</p>
          </div>
        </div>

        {/* Philosophy / Content List */}
        {data.content?.length > 0 && (
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">
✨ My Philosophy
</h4>
            <ul className="space-y-5 list-disc list-inside text-gray-700 leading-relaxed">
              {data.content.map((point, idx) => (
                <li key={idx} className="text-base md:text-lg">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
