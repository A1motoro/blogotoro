import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

// Mock data for blog posts (in a real app, this would come from an API or CMS)
const blogPosts = {
  'modification-for-chained-list': {
    title: 'Modification for Chained List',
    content: `
      <h2>Introduction to Chained Lists</h2>
      <p>Chainedlist is a fundamental data structure in computer science that allows for efficient insertion, deletion, and traversal of elements. It is particularly useful in scenarios where frequent modifications to the list are required.</p>

      <h3>Basic Structure</h3>
      <p>A chained list consists of nodes, where each node contains:</p>
      <ul>
        <li>Data element</li>
        <li>Pointer to the next node</li>
      </ul>

      <h3>Advantages</h3>
      <ul>
        <li>Dynamic size</li>
        <li>Efficient insertions and deletions</li>
        <li>No wasted memory space</li>
      </ul>

      <h3>Common Operations</h3>
      <p>The most common operations on a chained list include:</p>
      <ol>
        <li>Insertion at the beginning</li>
        <li>Insertion at the end</li>
        <li>Deletion of a specific element</li>
        <li>Traversal</li>
        <li>Search operations</li>
      </ol>

      <h2>Advanced Modifications</h2>
      <p>Several advanced modifications can be made to improve the performance and functionality of chained lists:</p>

      <h3>Skip Lists</h3>
      <p>Skip lists are a probabilistic data structure that allows for faster search operations compared to regular linked lists.</p>

      <h3>Memory Management</h3>
      <p>By maintaining a <code>freelast</code> variable, we can efficiently manage memory allocation and deallocation for the list nodes.</p>

      <h3>Circular Linked Lists</h3>
      <p>In circular linked lists, the last node points back to the first node, creating a circular structure.</p>

      <h2>Conclusion</h2>
      <p>Chained lists are versatile data structures that form the foundation of many complex data structures and algorithms. Understanding their modifications and applications is crucial for any programmer.</p>
    `,
    date: 'December 20, 2024',
    readTime: '8 min read',
    category: 'Programming',
    tags: ['data-structures', 'algorithms', 'linked-lists']
  },
  'practice-of-chained-lists': {
    title: 'CF1154E (Two Teams)',
    content: `
      <h2>Problem Statement</h2>
      <p>In this CodeForces problem, we need to divide players into two teams with specific constraints.</p>

      <h3>Analysis</h3>
      <p>The problem requires careful consideration of player relationships and team balancing.</p>

      <h3>Solution Approach</h3>
      <p>We'll use a graph-based approach to model player relationships and apply appropriate algorithms to find the optimal team division.</p>

      <h2>Implementation</h2>
      <p>Let's examine the implementation details and key considerations for solving this problem efficiently.</p>
    `,
    date: 'September 8, 2024',
    readTime: '10 min read',
    category: 'Programming',
    tags: ['competitive-programming', 'graphs', 'algorithms']
  },
  'welcome-to-my-blog': {
    title: 'Welcome to My Blog',
    content: `
      <h2>Welcome!</h2>
      <p>Welcome to my personal blog! I'm excited to share my journey, thoughts, and experiences with you.</p>

      <h3>What to Expect</h3>
      <p>On this blog, you'll find:</p>
      <ul>
        <li>Programming tutorials and tips</li>
        <li>Algorithm explanations</li>
        <li>Personal development insights</li>
        <li>Technology trends and analysis</li>
        <li>Project showcases</li>
      </ul>

      <h3>My Background</h3>
      <p>I'm a passionate developer with interests in data structures, algorithms, and software engineering. I love sharing knowledge and learning from the community.</p>

      <h3>Let's Connect</h3>
      <p>Feel free to reach out if you have questions, suggestions, or just want to chat about technology!</p>
    `,
    date: 'September 5, 2025',
    readTime: '3 min read',
    category: 'Personal',
    tags: ['introduction', 'personal']
  },
  'mat1001-1': {
    title: 'MAT1001_1',
    content: `
      <h2>Mathematics Content</h2>
      <p>This is a mathematics post covering fundamental concepts and applications.</p>

      <h3>Topics Covered</h3>
      <ul>
        <li>Basic mathematical principles</li>
        <li>Problem-solving techniques</li>
        <li>Real-world applications</li>
      </ul>
    `,
    date: 'September 8, 2025',
    readTime: 'TBD min read',
    category: 'Mathematics',
    tags: ['mathematics']
  },
  'test-post-1': {
    title: 'Test Post 1',
    content: `
      <h2>Test Content</h2>
      <p>This is the first test post to demonstrate the blog functionality.</p>

      <h3>Features Tested</h3>
      <ul>
        <li>Post rendering</li>
        <li>Navigation</li>
        <li>Styling</li>
      </ul>
    `,
    date: 'December 20, 2024',
    readTime: '2 min read',
    category: 'Test',
    tags: ['test']
  },
  'test-post-2': {
    title: 'Test Post 2',
    content: `
      <h2>Second Test</h2>
      <p>This is the second test post to verify the blog system.</p>

      <h3>Verification Points</h3>
      <ul>
        <li>Content display</li>
        <li>Routing functionality</li>
        <li>Responsive design</li>
      </ul>
    `,
    date: 'December 20, 2024',
    readTime: '2 min read',
    category: 'Test',
    tags: ['test']
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchPost = () => {
      setLoading(true);
      setTimeout(() => {
        setPost(blogPosts[slug]);
        setLoading(false);
      }, 500);
    };

    if (slug && blogPosts[slug]) {
      fetchPost();
    } else {
      setLoading(false);
    }
  }, [slug]);

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

          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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
