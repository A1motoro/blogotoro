import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="container">
        <div className="nav-brand">
          <Link to="/" className="logo" onClick={closeMenu}>
            <i className="fas fa-code"></i>
            BLOGIIIIII
          </Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/category/programming"
            className={location.pathname.startsWith('/category') ? 'active' : ''}
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link to="/portfolio.html" onClick={closeMenu}>
            Portfolio
          </Link>
        </div>

        <div className="mobile-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
