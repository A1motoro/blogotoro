// Article loader utility for multilingual blog posts
import { useTranslation } from 'react-i18next';

// Article content stored as strings (in a real app, this would be loaded dynamically)
// Add your articles here when you create them
const articleContents = {
  zh: {
    // Chinese articles will be added here
    // Example:
    // 'your-article-slug': `your markdown content here`
  },
  en: {
    // English articles will be added here
    // Example:
    // 'your-article-slug': `your markdown content here`
  }
};

// Article metadata (this could be moved to a JSON file or CMS)
// Add your article metadata here when you create articles
export const articleMetadata = {
  // Example structure:
  // 'your-article-slug': {
  //   zh: {
  //     title: '中文标题',
  //     excerpt: '中文摘要',
  //     date: '发布日期',
  //     readTime: '阅读时间',
  //     category: '分类'
  //   },
  //   en: {
  //     title: 'English Title',
  //     excerpt: 'English excerpt',
  //     date: 'Publish Date',
  //     readTime: 'Read Time',
  //     category: 'Category'
  //   }
  // }
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