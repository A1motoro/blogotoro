# 📝 博客写作指南

## 🚀 自动化文章系统

**重要更新**: 现在支持完全自动化的文章初始化！只需要把.md文件放到对应文件夹，运行一个命令即可。

## 🎯 写作步骤（全新简化版）

### 1. 准备文章文件
在对应语言文件夹中创建.md文件：

```
blogii/posts/zh/data-structures.md    # 中文版本
blogii/posts/en/data-structures.md    # 英文版本
```

### 2. 文章格式

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

### 3. 🚀 一键初始化（重要！）

**把.md文件放好后，运行这个命令：**

```bash
npm run init-articles
```

**这个命令会自动：**
- ✅ 扫描 `zh/` 和 `en/` 文件夹
- ✅ 解析所有.md文件内容
- ✅ 提取标题、摘要、日期等元数据
- ✅ 生成文章slug（URL路径）
- ✅ 更新 `src/utils/articleLoader.js`
- ✅ 让文章立即可以在网站上显示！

### 4. 测试和部署

```bash
# 预览网站
npm start

# 构建并部署
npm run build
git add .
git commit -m "Add new articles"
git push origin main
```

## 📂 文件夹结构

```
blogii/posts/
├── zh/                    # 中文文章
│   ├── data-structures.md
│   └── algorithms.md
└── en/                    # 英文文章
    ├── data-structures.md
    └── algorithms.md
```

## 📝 文件命名规则

- **使用英文小写字母、数字和连字符**
- **中英文版本文件名必须相同**
- ✅ 好的例子: `linked-lists-guide.md`, `data-structures.md`
- ❌ 避免: `My Article.md`, `文章.md`, `article 1.md`

## 💡 自动化特性

### 智能元数据提取
脚本会自动从Markdown文件中提取：
- **标题**: 从 `# 标题` 提取
- **日期**: 从 `**Published:**` 提取
- **分类**: 从 `**Category:**` 提取
- **阅读时间**: 从 `**Read Time:**` 提取
- **摘要**: 自动生成前150字符

### 多语言支持
- 自动识别中英文内容
- 为每种语言生成对应的元数据
- 支持语言切换时显示对应版本

## 🔧 手动自定义（可选）

如果需要自定义某些设置，可以编辑生成的 `src/utils/articleLoader.js` 文件。

## 🎉 开始写作！

1. 写好中英文.md文件
2. 运行 `npm run init-articles`
3. 运行 `npm start` 预览
4. 提交并推送

现在写作流程超级简单了！🎊