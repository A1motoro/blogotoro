import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 语言资源
const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.blog": "Blog",
      "nav.about": "About",
      "nav.contact": "Contact",

      // Home Page
      "home.featured": "Featured Posts",
      "home.recent": "Recent Posts",
      "home.readMore": "Read More →",
      "home.readFullPost": "Read Full Post →",

      // Blog Categories
      "category.programming": "Programming",
      "category.mathematics": "Mathematics",
      "category.personal": "Personal",
      "category.test": "Test",

      // Common
      "common.published": "Published on",
      "common.readTime": "min read",
      "common.category": "Category",
      "common.tags": "Tags",

      // Contact Page
      "contact.title": "Get In Touch",
      "contact.subtitle": "Let's Connect",
      "contact.description": "I'm always interested in discussing new opportunities, sharing ideas, or just having a chat about technology and programming.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.blog": "Blog",
      "contact.blogDesc": "Read my latest posts and tutorials",
      "contact.sendMessage": "Send a Message",
      "contact.name": "Name",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.submit": "Send Message",
      "contact.thankYou": "Thank you for your message! This is a demo contact form.",

      // About Page
      "about.title": "About Me",
      "about.hello": "Hello, I'm A1m",
      "about.description": "I'm a passionate writer, developer, and lifelong learner who loves sharing knowledge and experiences through this blog. With a background in technology and a curiosity for the world around us, I write about everything from coding tutorials to personal reflections.",
      "about.whatIWrite": "What I Write About",
      "about.programming": "Programming",
      "about.programmingDesc": "Algorithms, data structures, and software development practices.",
      "about.mathematics": "Mathematics",
      "about.mathematicsDesc": "Mathematical concepts, proofs, and problem-solving techniques.",
      "about.technology": "Technology",
      "about.technologyDesc": "Latest trends, tools, and innovations in the tech world.",
      "about.learning": "Learning",
      "about.learningDesc": "Continuous learning journey and educational experiences.",
      "about.journey": "My Journey",
      "about.journeyDesc": "When I'm not writing or coding, you can find me exploring new places, reading books, or experimenting with new technologies. I believe in continuous learning and sharing that knowledge with others.",
      "about.blogPurpose": "This blog is my way of contributing to the developer community and documenting my growth as a programmer and problem solver.",

      // Footer
      "footer.description": "A personal blog sharing thoughts on technology, development, and life experiences.",
      "footer.quickLinks": "Quick Links",
      "footer.social": "Social",

      // Language
      "lang.chinese": "中文",
      "lang.english": "English",
      "lang.switch": "切换语言 / Switch Language"
    }
  },
  zh: {
    translation: {
      // Navigation
      "nav.home": "首页",
      "nav.blog": "博客",
      "nav.about": "关于",
      "nav.contact": "联系",

      // Home Page
      "home.featured": "精选文章",
      "home.recent": "最新文章",
      "home.readMore": "阅读更多 →",
      "home.readFullPost": "阅读完整文章 →",

      // Blog Categories
      "category.programming": "编程",
      "category.mathematics": "数学",
      "category.personal": "个人",
      "category.test": "测试",

      // Common
      "common.published": "发布于",
      "common.readTime": "分钟阅读",
      "common.category": "分类",
      "common.tags": "标签",

      // Contact Page
      "contact.title": "联系我",
      "contact.subtitle": "让我们连接",
      "contact.description": "我始终对讨论新机会、分享想法或只是聊聊技术和编程感兴趣。",
      "contact.email": "邮箱",
      "contact.github": "GitHub",
      "contact.blog": "博客",
      "contact.blogDesc": "阅读我的最新文章和教程",
      "contact.sendMessage": "发送消息",
      "contact.name": "姓名",
      "contact.subject": "主题",
      "contact.message": "消息",
      "contact.submit": "发送消息",
      "contact.thankYou": "感谢您的留言！这是一个演示联系表单。",

      // About Page
      "about.title": "关于我",
      "about.hello": "你好，我是 A1m",
      "about.description": "我是一个充满激情的作家、开发者以及终身学习者，喜欢通过这个博客分享知识和经验。在技术背景和对周围世界的好奇心的驱动下，我写关于从编程教程到个人反思的一切。",
      "about.whatIWrite": "我写什么",
      "about.programming": "编程",
      "about.programmingDesc": "算法、数据结构和软件开发实践。",
      "about.mathematics": "数学",
      "about.mathematicsDesc": "数学概念、证明和解题技巧。",
      "about.technology": "技术",
      "about.technologyDesc": "科技世界的最新趋势、工具和创新。",
      "about.learning": "学习",
      "about.learningDesc": "持续学习历程和教育体验。",
      "about.journey": "我的旅程",
      "about.journeyDesc": "当我不写作或编码时，你可以发现我在探索新地方、阅读书籍，或尝试新技术。我相信持续学习并与他人分享这些知识。",
      "about.blogPurpose": "这个博客是我为开发者社区做贡献并记录我作为程序员和问题解决者成长的方式。",

      // Footer
      "footer.description": "一个分享技术、开发和生活经验的个人博客。",
      "footer.quickLinks": "快速链接",
      "footer.social": "社交",

      // Language
      "lang.chinese": "中文",
      "lang.english": "English",
      "lang.switch": "切换语言"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh', // 默认语言为中文
    debug: false,

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
