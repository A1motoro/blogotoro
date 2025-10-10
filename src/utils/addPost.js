// 文章管理工具函数
// 使用方法：在浏览器控制台中运行这些函数来添加新文章

// 1. 生成文章ID的函数
export const generatePostId = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // 移除特殊字符
    .replace(/\s+/g, '-') // 空格替换为连字符
    .replace(/-+/g, '-') // 多个连字符替换为单个
    .trim();
};

// 2. 估算阅读时间的函数
export const estimateReadTime = (content) => {
  const wordsPerMinute = 200; // 平均阅读速度
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

// 3. 获取当前日期的函数
export const getCurrentDate = () => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('en-US', options);
};

// 4. 文章模板
export const createPostTemplate = (title, category = 'Programming') => {
  const id = generatePostId(title);
  const currentDate = getCurrentDate();

  const template = {
    id: id,
    title: title,
    excerpt: '在这里输入文章摘要...',
    date: currentDate,
    readTime: 'TBD min read',
    category: category,
    icon: category === 'Programming' ? 'fas fa-code' :
          category === 'Mathematics' ? 'fas fa-calculator' :
          category === 'Personal' ? 'fas fa-user' : 'fas fa-file-alt',
    tags: []
  };

  return template;
};

// 5. 完整文章内容模板
export const createFullPostTemplate = (title, category = 'Programming') => {
  const id = generatePostId(title);
  const currentDate = getCurrentDate();

  const contentTemplate = `
    <h2>Introduction</h2>
    <p>在这里开始您的文章内容...</p>

    <h2>Main Content</h2>
    <p>继续您的文章内容...</p>

    <h3>Subsection</h3>
    <ul>
      <li>要点1</li>
      <li>要点2</li>
      <li>要点3</li>
    </ul>

    <h2>Code Example</h2>
    <pre><code>// 在这里添加代码示例
function example() {
    console.log("Hello, World!");
}</code></pre>

    <h2>Conclusion</h2>
    <p>总结您的文章要点...</p>
  `;

  return {
    title: title,
    content: contentTemplate,
    date: currentDate,
    readTime: 'TBD min read',
    category: category,
    tags: ['article-tag-1', 'article-tag-2']
  };
};

// 控制台使用示例：
// 1. 生成文章ID: generatePostId("My New Article Title")
// 2. 创建文章模板: createPostTemplate("My New Article Title", "Programming")
// 3. 创建完整文章: createFullPostTemplate("My New Article Title", "Programming")
// 4. 估算阅读时间: estimateReadTime("<p>Your article content here...</p>")
