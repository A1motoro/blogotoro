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

// Loading component
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="loading-content">
      <div className="loading-text">Initializing...</div>
      <div className="loading-dots"></div>
    </div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <div className="loading-content">
            <div className="loading-text">Something went wrong. Please refresh the page.</div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simple test component
const TestHome = () => {
  return (
    <div className="container">
      <h1>Welcome to BLOGIIIIII</h1>
      <p>This is a test to see if the app loads correctly.</p>
      <div style={{ padding: '20px', background: '#1e1e1e', borderRadius: '8px', margin: '20px 0' }}>
        <h2>Test Articles</h2>
        <div style={{ margin: '10px 0' }}>
          <h3>Hello World Article</h3>
          <p>A programming introduction article.</p>
          <a href="/blogotoro/post/hello-world" style={{ color: '#a6e22e' }}>Read Article →</a>
        </div>
        <div style={{ margin: '10px 0' }}>
          <h3>Python Syntax Sugar</h3>
          <p>Learn about Python syntax sugar features.</p>
          <a href="/blogotoro/post/syntax-candy-python" style={{ color: '#a6e22e' }}>Read Article →</a>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router basename="/blogotoro">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<TestHome />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
