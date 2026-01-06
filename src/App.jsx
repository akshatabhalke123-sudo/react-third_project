import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Create from "./pages/Create";
import Contact from "./pages/Contact"; // ← ADD THIS
import Navbar from "./Component/Navbar";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/contact" element={<Contact />} /> {/* ← ADD THIS */}
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
