/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ruixen.com", // your live portfolio domain
  generateRobotsTxt: true,
  changefreq: "monthly", // portfolios don't change daily
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ["/private", "/admin"], // exclude anything private
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
