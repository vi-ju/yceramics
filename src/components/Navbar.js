import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    {/* Tablet/Mobile Navbar */}
    <div className="tablet-header">
      <div className="logo-block">
        <Link to="/">
          <h1>Y Ceramics</h1>
          <h3>BY JULIANA VISLOVA</h3>
        </Link>
      </div>
      <div className="nav-block">
        <h2 style={{ margin: 0 }}><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></h2>
        <h2 style={{ margin: 0 }}><Link to="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link></h2>
        <a href="https://www.instagram.com/yceramics_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
    </div>

    {/* Desktop Sidebar */}
    <aside className="sidebar-bg">
      <div>
        <Link to="/" className="block">
          <h1>Y Ceramics</h1>
          <h3 className="pb-[3px]">BY JULIANA VISLOVA</h3>
        </Link>
      </div>
      <div className="sidebar-content">
        <div className="mb-6">
        <Link to="/about" className="about-link">
          <h3 className="mb-1">ABOUT</h3>
          <i className="fas fa-chevron-right chevron-animate"></i>
        </Link>
          <p className="sidebar-text mt-1">
          Juliana is a San Francisco based artist working across a variety of materials. Her ceramic practice centers on quiet moments of transformation
        </p>
        </div>
        <div className="mb-6">
        <h3 className="mb-1">CONTACT</h3>
          <p className="sidebar-text mt-1">
          I release the collections every 3-4 months.<br />
          Get on the list to be first to know.
        </p>
        </div>
        <div>
          <a href="https://www.instagram.com/yceramics_/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        </div>
      </div>
    </aside>
  </>
);

export default Navbar; 