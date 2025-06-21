import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ItemPage from './pages/ItemPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/:id" element={<ItemPage />} />
        </Routes>
      </Router>
      <div className="grain-overlay"></div>
    </>
  );
}

export default App; 