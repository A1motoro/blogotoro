# 📝 博客写作指南

## 🎯 从头开始写新文章

### 1. 选择语言文件夹
- **中文文章**: `blogii/posts/zh/your-article.md`
- **英文文章**: `blogii/posts/en/your-article.md`

**重要**: 同一篇文章的中英文版本必须使用相同的文件名！

### 2. 文章格式模板

```markdown
# 你的文章标题

**Published:** [今天的日期，如：December 20, 2024]
**Category:** [分类：Programming, Mathematics, Personal, Test等]
**Read Time:** [预计阅读时间，如：5 min]

## 引言

在这里写你的文章引言...

## 正文内容

在这里写你的主要内容...

### 小节标题

- 可以用列表
- **粗体** 和 *斜体* 文字
- 代码块等Markdown格式

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

### 3. 更新文章系统

#### 步骤1: 添加文章内容到 `src/utils/articleLoader.js`

在相应的语言对象中添加你的文章：

```javascript
const articleContents = {
  zh: {
    'your-article-slug': `
# 中文文章标题

**发布于:** 2024年12月20日
**分类:** 编程
**阅读时间:** 5分钟

## 正文内容

你的文章内容...
    `,
  },
  en: {
    'your-article-slug': `
# English Article Title

**Published:** December 20, 2024
**Category:** Programming
**Read Time:** 5 min

## Content

Your article content...
    `,
  }
};
```

#### 步骤2: 添加文章元数据

```javascript
export const articleMetadata = {
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
};
```

### 4. 文件命名规则

- **slug规则**: 使用英文小写字母、数字和连字符
- **示例**: `my-awesome-article`、`data-structures-guide`
- **避免**: 空格、特殊字符、大写字母

### 5. 提交到Git仓库

```bash
# 添加文件
git add blogii/posts/zh/your-article.md
git add blogii/posts/en/your-article.md
git add src/utils/articleLoader.js

# 提交更改
git commit -m "Add bilingual article: 你的文章标题"

# 推送到GitHub
git push origin main
```

### 6. 自动部署

推送后，GitHub Actions会自动：
- 构建网站
- 部署到GitHub Pages
- 用户可以根据语言设置查看对应版本

## 📂 文件夹结构

```
blogii/posts/
├── zh/          # 中文文章
│   └── your-article.md
├── en/          # 英文文章
│   └── your-article.md
└── ...
```

## 💡 最佳实践

### 文章命名
- 使用描述性的英文slug
- 保持简短但有意义
- 例如：`linked-list-implementation` 而不是 `article1`

### 内容同步
- 中英文版本要对应，内容要同步
- 确保技术术语翻译准确
- 代码示例在两种语言中保持一致

### 元数据
- 日期格式要一致
- 阅读时间要合理估计
- 分类要使用预定义的类别

## 🔍 预览和测试

写完文章后：
```bash
npm start
```

然后访问 `http://localhost:3000` 查看效果。

## 📞 需要帮助？

开始写你的第一篇文章吧！有任何问题随时问我。

🎉 现在你可以自由地写你想要的完整文章了！