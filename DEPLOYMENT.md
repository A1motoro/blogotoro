# 🚀 部署到GitHub Pages

本指南将帮助你使用GitHub Actions自动部署React博客到GitHub Pages。

## 📋 前提条件

1. **GitHub仓库**: 确保你的项目已经推送到GitHub
2. **仓库设置**: 你的仓库名称应该与`package.json`中的`homepage`字段匹配

## ⚙️ 配置步骤

### 1. 更新package.json
将`YOUR_USERNAME`替换为你的GitHub用户名：

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/blogotoro"
}
```

### 2. 推送到GitHub
```bash
git add .
git commit -m "添加GitHub Actions自动部署配置"
git push origin main
```

### 3. 启用GitHub Pages
1. 进入你的GitHub仓库
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 下拉菜单中选择 **GitHub Actions**

## 🔄 工作流程说明

当你推送代码到`main`分支时，GitHub Actions会自动：

1. **检出代码** - 获取最新的代码
2. **设置Node.js** - 使用Node.js 18.x环境
3. **安装依赖** - 运行`npm ci`
4. **构建应用** - 运行`npm run build`
5. **部署到Pages** - 将构建产物部署到GitHub Pages

## 📁 文件结构

```
.github/
  workflows/
    deploy.yml      # GitHub Actions工作流配置
```

## 🌐 访问你的网站

部署完成后，你可以通过以下URL访问你的博客：
```
https://YOUR_USERNAME.github.io/blogotoro
```

## 🔧 故障排除

### 常见问题

1. **404错误**: 检查`package.json`中的`homepage`字段是否正确设置
2. **构建失败**: 确保所有依赖都在`package.json`中正确声明
3. **路由问题**: React Router在GitHub Pages子路径下可能需要特殊配置

### 查看部署状态

1. 进入仓库的 **Actions** 标签
2. 点击最新的workflow运行
3. 查看构建日志以诊断问题

### 手动重新部署

推送任何更改到`main`分支都会触发自动部署。如果你需要强制重新部署：

```bash
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

## 📝 自定义配置

你可以根据需要修改`.github/workflows/deploy.yml`：

- 更改Node.js版本
- 添加额外的构建步骤
- 配置环境变量
- 添加测试步骤

## 🎯 下一步

- 添加自定义域名
- 配置CDN
- 设置监控和分析
- 添加评论系统
