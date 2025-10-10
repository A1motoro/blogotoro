import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useArticles } from '../utils/articleLoader';
import './BlogPost.css';

// Generate Table of Contents from markdown content
const generateTOC = (markdownContent) => {
  // Handle both \r\n and \n line endings
  const lines = markdownContent.split(/\r?\n/);
  const tocItems = [];
  let inCodeBlock = false;

  lines.forEach((line, index) => {
    // Check for code block markers (```)
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return; // Skip code block markers
    }

    // Skip lines inside code blocks
    if (inCodeBlock) {
      return;
    }

    // Only match headings that are NOT inside code blocks
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const title = headingMatch[2].trim();
      const id = title.toLowerCase()
        .replace(/[^\w\u4e00-\u9fff]+/g, '-')
        .replace(/^-+|-+$/g, '');

      tocItems.push({
        level,
        title,
        id,
        lineIndex: index
      });
    }
  });

  return tocItems;
};

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
  const [toc, setToc] = useState([]); // Table of Contents
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Load article based on current language
    const loadPost = () => {
      setLoading(true);
      try {
        const metadata = getArticleMetadata(slug);
        const content = getArticleContent(slug);

        if (metadata && content) {
          const articleContent = content.default || content;
          setPost({
            ...metadata,
            content: articleContent,
            tags: metadata.tags || []
          });

          // Generate Table of Contents
          const tocItems = generateTOC(articleContent);
          setToc(tocItems);
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

  // Handle hash navigation after content loads
  useEffect(() => {
    if (post && !loading) {
      const hash = window.location.hash;
      if (hash) {
        // Delay scrolling to ensure DOM is fully rendered
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [post, loading]);

  // Track active section during scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (!toc.length) return;

      const scrollPosition = window.scrollY + 100; // Offset for better UX

      for (let i = toc.length - 1; i >= 0; i--) {
        const element = document.getElementById(toc[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(toc[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toc]);

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
        <div className="blog-layout">
          {/* Main Content */}
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
                },
                h1({ children, ...props }) {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase()
                    .replace(/[^\w\u4e00-\u9fff]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  return <h1 id={id} {...props}>{children}</h1>;
                },
                h2({ children, ...props }) {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase()
                    .replace(/[^\w\u4e00-\u9fff]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  return <h2 id={id} {...props}>{children}</h2>;
                },
                h3({ children, ...props }) {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase()
                    .replace(/[^\w\u4e00-\u9fff]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  return <h3 id={id} {...props}>{children}</h3>;
                },
                h4({ children, ...props }) {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase()
                    .replace(/[^\w\u4e00-\u9fff]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  return <h4 id={id} {...props}>{children}</h4>;
                },
                h5({ children, ...props }) {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase()
                    .replace(/[^\w\u4e00-\u9fff]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  return <h5 id={id} {...props}>{children}</h5>;
                },
                h6({ children, ...props }) {
                  const text = children?.toString() || '';
                  const id = text.toLowerCase()
                    .replace(/[^\w\u4e00-\u9fff]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                  return <h6 id={id} {...props}>{children}</h6>;
                },
                a({ href, children, ...props }) {
                  // 处理内部链接，转换中文标题为对应的ID
                  if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    // 如果是中文标题，转换为对应的英文ID
                    const englishId = targetId.toLowerCase()
                      .replace(/[^\w\u4e00-\u9fff]+/g, '-')
                      .replace(/^-+|-+$/g, '');

                    const handleClick = (e) => {
                      e.preventDefault();
                      const element = document.getElementById(englishId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        // Update URL without triggering navigation
                        window.history.replaceState(null, null, `#${englishId}`);
                      }
                    };

                    return <a href={`#${englishId}`} onClick={handleClick} {...props}>{children}</a>;
                  }
                  return <a href={href} {...props}>{children}</a>;
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

          {/* Table of Contents Sidebar */}
          {toc.length > 0 && (
            <aside className="toc-sidebar">
              <div className="toc-container">
                <h3 className="toc-title">
                  <i className="fas fa-list"></i> {i18n.language === 'zh' ? '目录' : 'Table of Contents'}
                </h3>
                <nav className="toc-nav">
                  <ul className="toc-list">
                    {toc.map((item) => (
                      <li
                        key={item.id}
                        className={`toc-item toc-level-${item.level} ${activeSection === item.id ? 'active' : ''}`}
                        style={{ marginLeft: `${(item.level - 1) * 1}rem` }}
                      >
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(item.id);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                              window.history.replaceState(null, null, `#${item.id}`);
                            }
                          }}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
