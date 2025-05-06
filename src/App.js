import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import WebDesign from './pages/services/WebDesign';
import WebDevelopment from './pages/services/WebDevelopment';
import Maintenance from './pages/services/Maintenance';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/design" element={<WebDesign />} />
        <Route path="/services/development" element={<WebDevelopment />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
