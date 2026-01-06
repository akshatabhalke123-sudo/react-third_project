import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-10 py-6 border-b border-gray-200">
      <h1 className="font-semibold text-lg">
        Nicol Rider <span className="text-sm text-gray-500">Editor</span>
      </h1>

      <nav className="space-x-6 text-sm">
        <Link to="/" className="hover:underline">Resume</Link>
        <Link to="/#projects" className="hover:underline">Projects</Link>
        <Link to="/Contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
