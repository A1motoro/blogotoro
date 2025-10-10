import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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
            {t('nav.home')}
          </Link>
          <Link
            to="/category/programming"
            className={location.pathname.startsWith('/category') ? 'active' : ''}
            onClick={closeMenu}
          >
            {t('nav.blog')}
          </Link>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={closeMenu}
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
            onClick={closeMenu}
          >
            {t('nav.contact')}
          </Link>
          <LanguageSwitcher />
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
