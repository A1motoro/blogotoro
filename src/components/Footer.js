import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BLOGIIIIII</h3>
            <p>Exploring data structures, algorithms, and programming concepts.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="/category/programming">Programming</a></li>
              <li><a href="/category/mathematics">Mathematics</a></li>
              <li><a href="/category/personal">Personal</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:your-email@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 BLOGIIIIII. All rights reserved.</p>
          <p>Made with ❤️ and lots of coffee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
