import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Mock data for blog posts (in a real app, this would come from an API or CMS)
const featuredPosts = [
  {
    id: 'modification-for-chained-list',
    title: 'Modification for Chained List',
    excerpt: 'Chainedlist is a data structure that allows for efficient insertion, deletion, and traversal of elements. It is particularly useful in scenarios where frequent modifications to the list are required.',
    date: 'December 20, 2024',
    readTime: '8 min read',
    category: 'Programming',
    icon: 'fas fa-code'
  }
];

const recentPosts = [
  {
    id: 'mat1001-1',
    title: 'MAT1001_1',
    excerpt: 'Published: September 8, 2025',
    date: 'September 8, 2025',
    readTime: 'TBD min read',
    category: 'Mathematics',
    icon: 'fas fa-file-alt'
  },
  {
    id: 'practice-of-chained-lists',
    title: 'CF1154E (Two Teams)',
    excerpt: 'In the Modification for Chained List blog, we talked about the theoretic modification for chained lists, including skip lists, adding a variable named freelast to mark the first available memory and a lot.',
    date: 'September 8, 2024',
    readTime: '10 min read',
    category: 'Programming',
    icon: 'fas fa-laptop-code'
  },
  {
    id: 'welcome-to-my-blog',
    title: 'Welcome to My Blog',
    excerpt: 'Welcome to my personal blog! I\'m excited to share my journey, thoughts, and experiences with you.',
    date: 'September 5, 2025',
    readTime: '3 min read',
    category: 'Personal',
    icon: 'fas fa-file-alt'
  },
  {
    id: 'modification-for-chained-list',
    title: 'Modification for Chained List',
    excerpt: 'Chainedlist is a data structure that allows for efficient insertion, deletion, and traversal of elements. It is particularly useful in scenarios where frequent modifications to the list are required.',
    date: 'December 20, 2024',
    readTime: '8 min read',
    category: 'Programming',
    icon: 'fas fa-laptop-code'
  },
  {
    id: 'test-post-1',
    title: 'Test Post 1',
    excerpt: 'This is the first test post to demonstrate the blog functionality.',
    date: 'December 20, 2024',
    readTime: '2 min read',
    category: 'Test',
    icon: 'fas fa-file-alt'
  },
  {
    id: 'test-post-2',
    title: 'Test Post 2',
    excerpt: 'This is the second test post to verify the blog system.',
    date: 'December 20, 2024',
    readTime: '2 min read',
    category: 'Test',
    icon: 'fas fa-file-alt'
  }
];

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="diagonal-lines">
          {/* Diagonal lines for background effect */}
          <div className="diagonal-line line-1"></div>
          <div className="diagonal-line line-2"></div>
          <div className="diagonal-line line-3"></div>
          <div className="diagonal-line line-4"></div>
          <div className="diagonal-line line-5"></div>
          <div className="diagonal-line line-6"></div>
          <div className="diagonal-line line-7"></div>
          <div className="diagonal-line line-8"></div>
          <div className="diagonal-line line-9"></div>
          <div className="diagonal-line line-10"></div>
          <div className="diagonal-line line-11"></div>
          <div className="diagonal-line line-12"></div>
        </div>

        <div className="hero-gradient-overlay"></div>

        <div className="container hero-content">
          <div className="hero-icon">
            <i className="fas fa-code"></i>
          </div>

          <h1 className="hero-title">
            <span className="hero-subtitle">Welcome to</span>
            <span className="hero-main-title gradient-text">BLOGIIIIII</span>
          </h1>

          <p className="hero-description">
            Exploring{' '}
            <span className="highlight">data structures</span>,{' '}
            <span className="highlight">algorithms</span>, and{' '}
            <span className="highlight">programming concepts</span>
          </p>

          <div className="hero-cta-container">
            <button
              className="btn primary"
              onClick={() => scrollToSection('featured')}
            >
              <i className="fas fa-star"></i> Read Featured Post
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('blog')}
            >
              <i className="fas fa-blog"></i> View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section id="featured" className="featured-posts">
        <div className="container">
          <h2 className="section-title">Featured Posts</h2>
          <div className="featured-grid">
            {featuredPosts.map(post => (
              <Link
                key={post.id}
                to={`/post/${post.id}`}
                className="featured-card main-featured card"
              >
                <div className="blog-image">
                  <i className={post.icon}></i>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <div className="blog-meta">
                    Published on {post.date} • {post.readTime} • {post.category}
                  </div>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="read-more">Read Full Post →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section id="blog" className="main-content">
        <div className="container">
          <h2 className="section-title">Recent Posts</h2>
          <div className="blog-grid grid grid-2">
            {recentPosts.map(post => (
              <Link
                key={post.id}
                to={`/post/${post.id}`}
                className="blog-card card"
              >
                <div className="blog-image">
                  <i className={post.icon}></i>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <div className="blog-meta">
                    Published on {post.date} • {post.readTime}
                  </div>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="read-more">Read More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <i className="fas fa-user"></i>
            </div>
            <div className="about-text">
              <h3>Hello, I'm A1m</h3>
              <p>I'm a passionate writer, developer, and lifelong learner who loves sharing knowledge and experiences through this blog. With a background in technology and a curiosity for the world around us, I write about everything from coding tutorials to personal reflections.</p>
              <p>When I'm not writing or coding, you can find me exploring new places, reading books, or experimenting with new technologies. I believe in continuous learning and sharing that knowledge with others.</p>
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
        </div>
      </section>
    </div>
  );
};

export default Home;
