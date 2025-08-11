import React from 'react';

const Hero = ({ data }) => {
  if (!data) return null;

  return (
  <>
  <div className="bg-[#f0f7ff]">
    <p className="text-center text-pink-600 font-medium text-xs pt-2">
      🌸 Radhe Radhe 🌸
    </p>
    </div>

  <section className="bg-[#f0f7ff] min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-10 md:pt-16 pb-20 font-sans" style={{marginTop:0}}>

    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-10">

      {/* Left Content */}
      <div className="flex-1 space-y-6">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight ">
          Hey,<br/> I’m <span className="text-blue-700">{data.name || "Rahul Puppala"}</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-blue-700">
          {data.title}
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
          {data.intro}
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
  {/* Resume Button */}
  <a
    href="#contact" // replace with your actual link
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
  >
   💬 Contact Me
  </a>

  {/* Community Button */}
  <a
    href="#community"
    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-xl shadow-md transition"
  >
    👥 Join Community
  </a>
</div>


      </div>

      {/* Right Content - Key Highlights */}
      <div className="flex-1 space-y-4 bg-gray-50 py-8 px-6 rounded-2xl border border-gray-100 shadow-sm w-full">
        <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2">🚀 What I Do</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {data.content.map((line, idx) => (
            <li key={idx} className="text-sm md:text-base leading-relaxed">{line}</li>
          ))}
        </ul>
      </div>

    </div>
  </section>
</>
  );
};

export default Hero;
