import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useArticles } from '../utils/articleLoader';
import './BlogPost.css';

// Custom Monokai theme for syntax highlighting
const monokaiTheme = {
  'code[class*="language-"]': {
    color: '#f8f8f2',
    background: 'none',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: '"Fira Code", "Monaco", "Consolas", "Courier New", monospace',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#f8f8f2',
    background: '#2f3129',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: '"Fira Code", "Monaco", "Consolas", "Courier New", monospace',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '0.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#2f3129',
    padding: '0.1em',
    borderRadius: '0.3em',
    whiteSpace: 'normal',
  },
  comment: {
    color: '#75715e',
  },
  prolog: {
    color: '#75715e',
  },
  doctype: {
    color: '#75715e',
  },
  cdata: {
    color: '#75715e',
  },
  punctuation: {
    color: '#f8f8f2',
  },
  '.namespace': {
    Opacity: '.7',
  },
  property: {
    color: '#a6e22e',
  },
  tag: {
    color: '#a6e22e',
  },
  constant: {
    color: '#a6e22e',
  },
  symbol: {
    color: '#a6e22e',
  },
  deleted: {
    color: '#a6e22e',
  },
  boolean: {
    color: '#ae81ff',
  },
  number: {
    color: '#ae81ff',
  },
  selector: {
    color: '#a6e22e',
  },
  'attr-name': {
    color: '#a6e22e',
  },
  string: {
    color: '#e6db74',
  },
  char: {
    color: '#e6db74',
  },
  builtin: {
    color: '#a6e22e',
  },
  inserted: {
    color: '#a6e22e',
  },
  operator: {
    color: '#f92672',
  },
  entity: {
    color: '#f92672',
    cursor: 'help',
  },
  url: {
    color: '#f92672',
  },
  '.language-css .token.string': {
    color: '#f92672',
  },
  '.style .token.string': {
    color: '#f92672',
  },
  variable: {
    color: '#f92672',
  },
  atrule: {
    color: '#f8f8f2',
  },
  'attr-value': {
    color: '#e6db74',
  },
  function: {
    color: '#a6e22e',
  },
  keyword: {
    color: '#f92672',
  },
  regex: {
    color: '#e6db74',
  },
  important: {
    color: '#f92672',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
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
  }, [slug, i18n.language, getArticleContent, getArticleMetadata]);

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
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={monokaiTheme}
                      language={match[1]}
                      PreTag="div"
                      showLineNumbers={true}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
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
