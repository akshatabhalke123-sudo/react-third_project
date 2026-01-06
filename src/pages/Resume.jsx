import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-6">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">My Resume</h1>

        <p className="text-lg mb-8 text-gray-300">
          Here is my resume. You can view it or download it below.
        </p>

        <div className="bg-gray-700 p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-3">Akshata Bhalke</h2>
          <p className="text-gray-300">Frontend Developer</p>
          <p className="text-gray-300">React | Tailwind CSS | JavaScript</p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white text-lg font-medium"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
