import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useArticles } from '../utils/articleLoader';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const { getArticleContent, getArticleMetadata } = useArticles();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load article based on current language
    const loadPost = () => {
      setLoading(true);
      try {
        const metadata = getArticleMetadata(slug);
        const content = getArticleContent(slug);

        if (metadata && content) {
          setPost({
            ...metadata,
            content: content.default || content,
            tags: metadata.tags || []
          });
        }
      } catch (error) {
        console.error('Error loading article:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    } else {
      setLoading(false);
    }
  }, [slug, getArticleContent, getArticleMetadata]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading post...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container">
        <div className="error">
          <h2>Post not found</h2>
          <p>The post you're looking for doesn't exist.</p>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <article className="blog-post">
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-date">Published on {post.date}</span>
              <span className="post-read-time"> • {post.readTime}</span>
              <span className="post-category"> • {post.category}</span>
            </div>
            {post.tags && (
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
            )}
          </header>

          <div className="post-content">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <footer className="post-footer">
            <Link to="/" className="btn btn-secondary">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
