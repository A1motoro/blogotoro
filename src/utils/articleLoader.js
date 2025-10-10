// Article loader utility for multilingual blog posts
import { useTranslation } from 'react-i18next';

// Article content stored as strings (in a real app, this would be loaded dynamically)
const articleContents = {
  zh: {
    'welcome-to-my-blog': `
# 欢迎来到我的博客

**发布于:** 2025年9月5日
**分类:** 个人
**阅读时间:** 3分钟

## 你好！👋

欢迎来到我的个人博客！我很高兴与你分享我的旅程、想法和经验。

## 关于这个博客

在这个博客上，你会找到：
- 编程教程和技巧
- 算法解释
- 个人发展见解
- 技术趋势和分析
- 项目展示

## 你会看到什么

我计划定期发布各种我感兴趣的话题。欢迎探索并告诉我你的想法！

感谢访问！🚀
`,
    'mat1001-1': `
# MAT1001_1

**发布于:** 2025年9月8日
**分类:** 数学
**阅读时间:** 待定分钟

## 数学内容

这是一个数学文章，涵盖基础概念和应用。

## 涵盖主题

- 基础数学原理
- 解题技巧
- 实际应用
`,
    'practice-of-chained-lists': `
# CF1154E (Two Teams)

**发布于:** 2024年9月8日
**分类:** 编程
**阅读时间:** 10分钟

## 问题描述

在这个CodeForces问题中，我们需要按照特定约束将玩家分成两个队伍。

## 分析

这个问题需要仔细考虑玩家关系和队伍平衡。

## 解决方案

我们将使用基于图的方法来建模玩家关系，并应用适当的算法来找到最佳队伍划分。

## 实现

让我们检查解决这个问题的实现细节和关键考虑因素。
`,
    'modification-for-chained-list': `
# 链式列表的修改

**发布于:** 2024年12月20日
**分类:** 编程
**阅读时间:** 8分钟

## 链式列表介绍

链式列表是计算机科学中的基本数据结构，允许高效插入、删除和遍历元素。当需要频繁修改列表时，它特别有用。

## 基本结构

链式列表由节点组成，每个节点包含：
- 数据元素
- 指向下一个节点的指针

## 优点

- 动态大小
- 高效的插入和删除
- 没有浪费的内存空间

## 常见操作

链式列表最常见的操作包括：
1. 在开头插入
2. 在结尾插入
3. 删除特定元素
4. 遍历
5. 搜索操作

## 高级修改

可以对链式列表进行几个高级修改来提高性能和功能：

## 跳跃列表

跳跃列表是一种概率性数据结构，允许比常规链表更快的搜索操作。

## 内存管理

通过维护freelast变量，我们可以高效地管理列表节点的内存分配和释放。

## 循环链表

在循环链表中，最后一个节点指向第一个节点，创建一个循环结构。

## 结论

链式列表是构成许多复杂数据结构和算法基础的多功能数据结构。理解它们的修改和应用对任何程序员都很重要。
`,
    'test-post-1': `
# 测试文章1

**发布于:** 2024年12月20日
**分类:** 测试
**阅读时间:** 2分钟

## 这是一个测试文章

这是第一个测试文章，用于演示博客功能。

## 测试的功能

- 文章渲染
- 导航
- 样式设置
`,
    'test-post-2': `
# 测试文章2

**发布于:** 2024年12月20日
**分类:** 测试
**阅读时间:** 2分钟

## 第二个测试

这是第二个测试文章，用于验证博客系统。

## 验证要点

- 内容显示
- 路由功能
- 响应式设计
`,
    'test-post-3': `
# 测试文章3

**发布于:** 2024年12月20日
**分类:** 测试
**阅读时间:** 2分钟

## 第三个测试

这是第三个测试文章，用于进一步验证功能。
`
  },
  en: {
    // English versions will be added here when created
    // For now, fallback to Chinese versions with English metadata
  }
};

// Article metadata (this could be moved to a JSON file or CMS)
export const articleMetadata = {
  'welcome-to-my-blog': {
    zh: {
      title: '欢迎来到我的博客',
      excerpt: '欢迎来到我的个人博客！我很高兴与你分享我的旅程、想法和经验。',
      date: '2025年9月5日',
      readTime: '3分钟阅读',
      category: '个人'
    },
    en: {
      title: 'Welcome to My Blog',
      excerpt: 'Welcome to my personal blog! I\'m excited to share my journey, thoughts, and experiences with you.',
      date: 'September 5, 2025',
      readTime: '3 min read',
      category: 'Personal'
    }
  },
  'mat1001-1': {
    zh: {
      title: 'MAT1001_1',
      excerpt: '发布于2025年9月8日',
      date: '2025年9月8日',
      readTime: '待定分钟阅读',
      category: '数学'
    },
    en: {
      title: 'MAT1001_1',
      excerpt: 'Published: September 8, 2025',
      date: 'September 8, 2025',
      readTime: 'TBD min read',
      category: 'Mathematics'
    }
  },
  'practice-of-chained-lists': {
    zh: {
      title: 'CF1154E (Two Teams)',
      excerpt: '在这篇博客文章中，我们讨论了链式列表的理论修改，包括跳跃列表、添加变量freelast来标记第一个可用内存等等。',
      date: '2024年9月8日',
      readTime: '10分钟阅读',
      category: '编程'
    },
    en: {
      title: 'Practice of Chained Lists',
      excerpt: 'In the Modification for Chained List blog, we talked about the theoretic modification for chained lists, including skip lists, adding a variable named freelast to mark the first available memory and a lot.',
      date: 'September 8, 2024',
      readTime: '10 min read',
      category: 'Programming'
    }
  },
  'modification-for-chained-list': {
    zh: {
      title: '链式列表的修改',
      excerpt: '链式列表是计算机科学中的基本数据结构，允许高效插入、删除和遍历元素。当需要频繁修改列表时，它特别有用。',
      date: '2024年12月20日',
      readTime: '8分钟阅读',
      category: '编程'
    },
    en: {
      title: 'Modification for Chained List',
      excerpt: 'Chainedlist is a data structure that allows for efficient insertion, deletion, and traversal of elements. It is particularly useful in scenarios where frequent modifications to the list are required.',
      date: 'December 20, 2024',
      readTime: '8 min read',
      category: 'Programming'
    }
  },
  'test-post-1': {
    zh: {
      title: '测试文章1',
      excerpt: '这是第一个测试文章，用于演示博客功能。',
      date: '2024年12月20日',
      readTime: '2分钟阅读',
      category: '测试'
    },
    en: {
      title: 'Test Post 1',
      excerpt: 'This is the first test post to demonstrate the blog functionality.',
      date: 'December 20, 2024',
      readTime: '2 min read',
      category: 'Test'
    }
  },
  'test-post-2': {
    zh: {
      title: '测试文章2',
      excerpt: '这是第二个测试文章，用于验证博客系统。',
      date: '2024年12月20日',
      readTime: '2分钟阅读',
      category: '测试'
    },
    en: {
      title: 'Test Post 2',
      excerpt: 'This is the second test post to verify the blog system.',
      date: 'December 20, 2024',
      readTime: '2 min read',
      category: 'Test'
    }
  },
  'test-post-3': {
    zh: {
      title: '测试文章3',
      excerpt: '这是第三个测试文章，用于进一步验证功能。',
      date: '2024年12月20日',
      readTime: '2分钟阅读',
      category: '测试'
    },
    en: {
      title: 'Test Post 3',
      excerpt: 'This is the third test post to further verify functionality.',
      date: 'December 20, 2024',
      readTime: '2 min read',
      category: 'Test'
    }
  }
};

// Hook to get articles based on current language
export const useArticles = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Get featured and recent posts based on current language
  const getArticlesForLanguage = (lang) => {
    // For now, fallback to Chinese if English version doesn't exist
    const effectiveLang = articleContents[lang] && Object.keys(articleContents[lang]).length > 0 ? lang : 'zh';

    return Object.keys(articleContents[effectiveLang] || {}).map(slug => ({
      id: slug,
      ...articleMetadata[slug][effectiveLang],
      icon: getIconForCategory(articleMetadata[slug][effectiveLang].category)
    }));
  };

  const getArticleContent = (slug) => {
    const lang = articleContents[currentLang] && articleContents[currentLang][slug] ? currentLang : 'zh';
    return articleContents[lang][slug];
  };

  const getArticleMetadata = (slug) => {
    const lang = articleMetadata[slug] && articleMetadata[slug][currentLang] ? currentLang : 'zh';
    return articleMetadata[slug][lang];
  };

  return {
    featuredPosts: getArticlesForLanguage(currentLang).slice(0, 1), // First article as featured
    recentPosts: getArticlesForLanguage(currentLang),
    getArticleContent,
    getArticleMetadata,
    currentLanguage: currentLang
  };
};

// Helper function to get icon based on category
const getIconForCategory = (category) => {
  const iconMap = {
    '编程': 'fas fa-code',
    'Programming': 'fas fa-code',
    '数学': 'fas fa-file-alt',
    'Mathematics': 'fas fa-file-alt',
    '个人': 'fas fa-file-alt',
    'Personal': 'fas fa-file-alt',
    '测试': 'fas fa-file-alt',
    'Test': 'fas fa-file-alt'
  };
  return iconMap[category] || 'fas fa-file-alt';
};

export default useArticles;
