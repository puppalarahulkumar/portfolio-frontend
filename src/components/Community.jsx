import React from 'react';

const Community = ({ data }) => {
  if (!data) return null;

  return (
    <section id="community" className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4 sm:px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl p-6 sm:p-10 border border-blue-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-left">
        📬 Let’s Grow Together
      </h2>



        {data.content && (
          <ul className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed list-disc list-inside">
            {data.content.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-start">
          {data.linkedin_newletter && (
            <a
              href={data.linkedin_newletter}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium shadow hover:bg-blue-700 transition duration-300 w-full sm:w-auto text-center"
            >
              Subscribe on LinkedIn
            </a>
          )}
          {data.twitter && (
            <a
              href={data.twitter}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium shadow hover:bg-black transition duration-300 w-full sm:w-auto text-center"
            >
              Follow on X
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Community;
