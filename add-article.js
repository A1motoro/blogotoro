#!/usr/bin/env node

/**
 * BLOGIIIIII 文章添加工具
 * 用法: node add-article.js "文章标题" [分类]
 *
 * 示例:
 * node add-article.js "React Hooks 完全指南" Programming
 * node add-article.js "线性代数基础" Mathematics
 * node add-article.js "2024年技术回顾" Personal
 */

// 获取命令行参数
const args = process.argv.slice(2);
const title = args[0];
const category = args[1] || 'Programming';

// 验证输入
if (!title) {
  console.log('❌ 请提供文章标题');
  console.log('用法: node add-article.js "文章标题" [分类]');
  console.log('示例: node add-article.js "React Hooks 指南" Programming');
  process.exit(1);
}

// 工具函数
function generatePostId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function getCurrentDate() {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('en-US', options);
}

function getCategoryIcon(category) {
  const icons = {
    'Programming': 'fas fa-code',
    'Mathematics': 'fas fa-calculator',
    'Personal': 'fas fa-user'
  };
  return icons[category] || 'fas fa-file-alt';
}

// 生成文章数据
const postId = generatePostId(title);
const currentDate = getCurrentDate();
const icon = getCategoryIcon(category);

// 列表模板
const listTemplate = `  {
    id: '${postId}',
    title: '${title}',
    excerpt: '在这里输入文章摘要...',
    date: '${currentDate}',
    readTime: 'TBD min read',
    category: '${category}',
    icon: '${icon}'
  }`;

// 完整文章模板
const fullPostTemplate = `  '${postId}': {
    title: '${title}',
    content: \`
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
    \`,
    date: '${currentDate}',
    readTime: 'TBD min read',
    category: '${category}',
    tags: ['article-tag-1', 'article-tag-2']
  }`;

console.log('🎉 文章模板生成成功！\n');
console.log('📝 文章ID:', postId);
console.log('📅 日期:', currentDate);
console.log('🏷️ 分类:', category);
console.log('🎨 图标:', icon);
console.log('\n' + '='.repeat(50) + '\n');

console.log('📋 步骤1: 添加到 src/pages/Home.js 的 recentPosts 数组\n');
console.log(listTemplate + '\n');

console.log('📋 步骤2: 添加到 src/pages/BlogPost.js 的 blogPosts 对象\n');
console.log(fullPostTemplate + '\n');

console.log('💡 提示:');
console.log('1. 复制上面的模板代码到相应文件');
console.log('2. 修改摘要和内容');
console.log('3. 更新阅读时间和标签');
console.log('4. 保存并测试 (npm start)');

console.log('\n🚀 完成后运行: npm start 测试文章');
console.log('📖 阅读完整指南: ARTICLE_WORKFLOW.md');
