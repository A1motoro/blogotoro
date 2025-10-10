# 📝 博客写作指南

## 🎯 写新文章的步骤

### 1. 创建文章文件
在对应的语言文件夹中创建新的 `.md` 文件：

- **中文文章**: `blogii/posts/zh/your-article.md`
- **英文文章**: `blogii/posts/en/your-article.md`

**文件命名建议**:
- 使用英文文件名，避免特殊字符
- 可以使用连字符分隔单词
- 例如：`my-new-article.md`
- **重要**: 中英文版本的文件名必须相同

### 2. 文章格式模板

```markdown
# 你的文章标题

**Published:** [今天的日期，格式：December 20, 2024]
**Category:** [分类：Programming, Mathematics, Personal, Test等]
**Read Time:** [预计阅读时间，如：5 min]

## 引言

在这里写你的文章引言...

## 正文内容

在这里写你的主要内容...

### 小节标题

- 可以用列表
- Markdown格式
- **粗体** 和 *斜体* 文字

## 代码示例

```javascript
// 如果需要代码，可以这样写
function hello() {
    console.log("Hello, World!");
}
```

## 结论

总结你的文章...

感谢阅读！ 📝
```

### 3. 更新文章加载器
在 `src/utils/articleLoader.js` 中添加新文章的引用：

```javascript
// 为中文版本添加
'zh': {
  'your-article-slug': require('../../blogii/posts/zh/your-article.md'),
  // ... 其他文章
},
'en': {
  'your-article-slug': require('../../blogii/posts/en/your-article.md'),
  // ... 其他文章
}
```

### 4. 更新文章元数据
在 `articleMetadata` 对象中添加文章信息：

```javascript
'your-article-slug': {
  zh: {
    title: '中文标题',
    excerpt: '中文摘要',
    date: '发布日期',
    readTime: '阅读时间',
    category: '分类'
  },
  en: {
    title: 'English Title',
    excerpt: 'English excerpt',
    date: 'Publish Date',
    readTime: 'Read Time',
    category: 'Category'
  }
}
```

### 5. 提交到Git仓库

```bash
# 添加所有新文件
git add blogii/posts/zh/your-article.md
git add blogii/posts/en/your-article.md
git add src/utils/articleLoader.js

# 提交更改
git commit -m "Add bilingual article: 你的文章标题 / Your Article Title"

# 推送到GitHub
git push origin main
```

### 6. 自动部署
推送后，GitHub Actions会自动：
- 构建网站
- 部署到GitHub Pages
- 用户可以根据语言设置查看对应版本的文章
- 你的新文章就会上线！

## 📂 现有文章分类

- **Programming**: 编程相关文章
- **Mathematics**: 数学相关内容
- **Personal**: 个人随笔
- **Test**: 测试文章

## 💡 写作建议

- 使用清晰的标题结构
- 保持段落简洁
- 适当使用代码块展示技术内容
- 添加相关图片或链接
- 定期检查拼写和语法

## 🔍 预览文章

写完后可以本地测试：
```bash
npm start
```

然后访问 `http://localhost:3000` 查看效果。

## 📞 需要帮助？

如果在写作过程中遇到问题，可以参考现有的文章作为模板！

🎉 现在就开始写你的第一篇文章吧！
