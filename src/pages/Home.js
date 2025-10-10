import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useArticles } from '../utils/articleLoader';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  const { featuredPosts, recentPosts } = useArticles();

  return (
    <div className="home">
      {/* Featured Posts Section */}
      <section id="featured" className="featured-posts">
        <div className="container">
          <h2 className="section-title">{t('home.featured')}</h2>
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
                  <p className="blog-excerpt">{post.excerpt || post.description || 'Click to read this article...'}</p>
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
          <h2 className="section-title">{t('home.recent')}</h2>
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
                  <p className="blog-excerpt">{post.excerpt || post.description || 'Click to read this article...'}</p>
                  <div className="read-more">Read More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
