import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import MySkills from '../MySkills/MySkills';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

const Navbar = () => {
  // const location = useLocation();

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/my-skills" element={<MySkills />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Navbar;
