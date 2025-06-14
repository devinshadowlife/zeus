/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://zeusbangkok.com",
  generateRobotsTxt: true,
  outDir: "./public",

  // 기본 경로 명시 (sitemap에 추가될 고정 경로들)
  additionalPaths: async (config) => {
    return [
      { loc: "/", changefreq: "daily", priority: 1.0 },
      { loc: "/en", changefreq: "daily", priority: 1.0 },
      { loc: "/ko", changefreq: "daily", priority: 0.9 },
      { loc: "/zh", changefreq: "daily", priority: 0.9 },
      { loc: "/th", changefreq: "daily", priority: 0.9 },
    ];
  },

  // robots.txt 세부 옵션
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    // 필요한 경우 추가 sitemap 수동 등록 (여기선 자동으로 연결되므로 없어도 무방)
    additionalSitemaps: [
      "https://zeusbangkok.com/sitemap-0.xml", // 이걸 sitemap.xml이 참조함
    ],
  },
};
