# BLOGIIIIII - 博客项目

## 📁 项目结构

```
blog-project/
├── src/                          # React应用源码
│   ├── components/               # 可复用组件
│   │   ├── Header.js            # 导航栏
│   │   └── Footer.js            # 页脚
│   ├── pages/                   # 页面组件
│   │   ├── Home.js             # 首页
│   │   ├── BlogPost.js         # 文章详情页
│   │   ├── Category.js         # 分类页面
│   │   ├── About.js            # 关于页面
│   │   └── Contact.js          # 联系页面
│   ├── utils/                  # 工具函数
│   │   └── addPost.js          # 文章管理工具
│   └── App.js                  # 主应用组件
├── public/                      # 静态资源
├── assets/                      # 图片等资源文件
├── core-framework/              # 核心样式框架
├── blogii/                      # 旧版博客文章和静态文件
├── add-article.js               # 文章添加工具
├── ARTICLE_WORKFLOW.md          # 详细写作指南
├── QUICK_START.md               # 快速开始指南
├── README-React.md              # React技术文档
├── package.json                 # 项目配置
├── portfolio.html               # 作品集页面
└── index.html                   # React应用入口
```

## 🚀 快速开始

### 安装依赖
```bash
cd blog-project
npm install
```

### 启动开发服务器
```bash
npm start
```
应用将在 `http://localhost:3000` 启动

### 构建生产版本
```bash
npm run build
```

## 📝 写作工作流

### 1. 生成文章模板
```bash
node add-article.js "您的文章标题" Programming
```

### 2. 复制代码到相应文件
- `src/pages/Home.js` - 主页文章列表
- `src/pages/BlogPost.js` - 完整文章内容

### 3. 测试和发布
```bash
npm start  # 测试
git add .
git commit -m "Add new article"
git push
```

## 📚 文档

- **[QUICK_START.md](QUICK_START.md)** - 3步快速开始写作
- **[ARTICLE_WORKFLOW.md](ARTICLE_WORKFLOW.md)** - 完整写作指南
- **[README-React.md](README-React.md)** - React技术实现

## 🎯 功能特性

- ✅ 现代化React架构
- ✅ 响应式设计
- ✅ Monokai主题
- ✅ 路由系统
- ✅ 文章管理系统
- ✅ SEO友好

## 📞 技术支持

如有问题，请参考文档或提交Issue。
