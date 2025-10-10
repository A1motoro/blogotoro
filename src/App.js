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

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Router basename="/blogotoro">
          <div className="App">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:slug" element={<BlogPost />} />
                <Route path="/category/:category" element={<Category />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
