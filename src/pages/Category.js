import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data for categories and posts
const categories = {
  programming: {
    name: 'Programming',
    description: 'Articles about programming languages, algorithms, and software development.',
    posts: [
      {
        id: 'modification-for-chained-list',
        title: 'Modification for Chained List',
        excerpt: 'Chainedlist is a data structure that allows for efficient insertion, deletion, and traversal of elements.',
        date: 'December 20, 2024',
        readTime: '8 min read'
      },
      {
        id: 'practice-of-chained-lists',
        title: 'CF1154E (Two Teams)',
        excerpt: 'In the Modification for Chained List blog, we talked about the theoretic modification for chained lists.',
        date: 'September 8, 2024',
        readTime: '10 min read'
      }
    ]
  },
  mathematics: {
    name: 'Mathematics',
    description: 'Mathematical concepts, proofs, and problem-solving techniques.',
    posts: [
      {
        id: 'mat1001-1',
        title: 'MAT1001_1',
        excerpt: 'Published: September 8, 2025',
        date: 'September 8, 2025',
        readTime: 'TBD min read'
      }
    ]
  },
  personal: {
    name: 'Personal',
    description: 'Personal thoughts, experiences, and reflections on life and technology.',
    posts: [
      {
        id: 'welcome-to-my-blog',
        title: 'Welcome to My Blog',
        excerpt: 'Welcome to my personal blog! I\'m excited to share my journey, thoughts, and experiences with you.',
        date: 'September 5, 2025',
        readTime: '3 min read'
      }
    ]
  }
};

const Category = () => {
  const { category } = useParams();
  const categoryData = categories[category];

  if (!categoryData) {
    return (
      <div className="container">
        <div className="error">
          <h2>Category not found</h2>
          <p>The category you're looking for doesn't exist.</p>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="category-page">
      <div className="container">
        <header className="category-header">
          <h1 className="category-title">{categoryData.name}</h1>
          <p className="category-description">{categoryData.description}</p>
        </header>

        <div className="posts-grid grid grid-2">
          {categoryData.posts.map(post => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="blog-card card"
            >
              <div className="blog-image">
                <i className="fas fa-file-alt"></i>
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

        {categoryData.posts.length === 0 && (
          <div className="no-posts">
            <p>No posts in this category yet.</p>
            <Link to="/" className="btn">Back to Home</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
