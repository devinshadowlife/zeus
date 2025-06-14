// next-sitemap.config.js
module.exports = {
  siteUrl: "https://zeusbangkok.com",
  generateRobotsTxt: true,

  // ✅ 기본 경로 수동 지정
  additionalPaths: async (config) => {
    return [
      { loc: "/", changefreq: "daily", priority: 1.0 },
      { loc: "/en", changefreq: "daily", priority: 1.0 },
      { loc: "/ko", changefreq: "daily", priority: 0.9 },
      { loc: "/zh", changefreq: "daily", priority: 0.9 },
      { loc: "/th", changefreq: "daily", priority: 0.9 },
    ];
  },
};
