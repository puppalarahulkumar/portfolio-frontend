import React from 'react';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Contact = ({ data }) => {
  if (!data) return null;

  return (
    <section  id="contact" className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* Section Title */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            📞 Contact Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            I'd love to connect! Reach out to me on any of the platforms below.
          </p>
        </div>

        {/* Contact Box */}
        <div className="bg-gray-50 border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6 w-full max-w-3xl">
          {data.email && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-800">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Email:</span>
              </div>
              <a href={`mailto:${data.email}`} className="hover:underline text-blue-700 break-all">
                {data.email}
              </a>
            </div>
          )}

          {data.phone && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-800">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Phone:</span>
              </div>
              <span>{data.phone}</span>
            </div>
          )}

          {data.linkedin && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-800">
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-blue-800" />
                <span className="font-semibold">LinkedIn:</span>
              </div>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-blue-800 break-all">
                {data.linkedin}
              </a>
            </div>
          )}

          {data.twitter && (
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-gray-800">
              <div className="flex items-center gap-2">
                <Twitter className="w-5 h-5 text-black" />
                <span className="font-semibold">Twitter:</span>
              </div>
              <a href={data.twitter} target="_blank" rel="noreferrer" className="hover:underline text-black break-all">
                {data.twitter}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
