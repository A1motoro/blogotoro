import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './i18n'; // Import i18n configuration

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Category from './pages/Category';
import About from './pages/About';
import Contact from './pages/Contact';

// Page styles
import './pages/Home.css';
import './pages/BlogPost.css';
import './pages/About.css';
import './pages/Contact.css';

// Simple loading fallback
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    color: '#a6e22e'
  }}>
    <div>Loading...</div>
  </div>
);

function App() {
  return (
    <Router basename="/blogotoro">
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:slug" element={<BlogPost />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
