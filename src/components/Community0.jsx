import React from 'react';

const Community = ({ data }) => {
  if (!data) return null;

  return (
    <section className="p-10 bg-blue-50 rounded-xl shadow-md max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">📬 Let’s Grow Together</h2>
      {data.content && (
        <ul className="list-disc list-inside space-y-2 text-blue-800">
          {data.content.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
      <div className="mt-6 space-x-4">
        {data.linkedin_newsletter && (
          <a
            href={data.linkedin_newsletter}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Subscribe on LinkedIn
          </a>
        )}
        {data.twitter && (
          <a
            href={data.twitter}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-black transition"
          >
            Follow on X
          </a>
        )}
      </div>
    </section>
  );
};

export default Community;
