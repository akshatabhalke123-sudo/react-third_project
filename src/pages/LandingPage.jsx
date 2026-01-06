import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-900 font-sans">

      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 px-12 py-24">

        {/* Profile Image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-2xl opacity-40"></div>

          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&s"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-7xl font-extrabold mb-3 tracking-tight drop-shadow-sm">
            Hello,
          </h1>

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            A Bit About Me
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            I'm a paragraph. Click here to add your own text and edit me.
            I'm a great place for you to tell a story and let your users
            know a little more about you.
          </p>

          {/* Buttons */}
          <div className="flex gap-8">

            {/* Contact */}
            <a
              href="/contact"
              className="w-32 h-32 rounded-full bg-cyan-400 text-white shadow-xl flex items-center justify-center 
              font-semibold text-sm hover:scale-110 hover:bg-cyan-500 transition-transform duration-300"
            >
              Contact
            </a>

            {/* Projects */}
            <Link
              to="/HomePage"
              className="w-32 h-32 rounded-full bg-red-500 text-white shadow-xl flex items-center justify-center 
              font-semibold text-sm hover:scale-110 hover:bg-red-600 transition-transform duration-300"
            >
              Projects
            </Link>

            {/* Resume */}
            <a
              href="/resume"
              className="w-32 h-32 rounded-full bg-yellow-500 text-black shadow-xl flex items-center justify-center 
              font-semibold text-sm hover:scale-110 hover:bg-yellow-400 transition-transform duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-12 py-20 bg-white rounded-t-3xl shadow-inner">

        <h2 className="text-4xl font-extrabold mb-16 text-center tracking-tight">
          My Projects
        </h2>

        {/* Project 01 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 mb-24">
          <div>
            <h3 className="text-2xl font-bold mb-3">Project Name 01</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c"
              className="w-full"
            />
          </div>
        </div>

        {/* Project 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          <div>
            <h3 className="text-2xl font-bold mb-3">Project Name 02</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
