
# Ruixen Portfolio

This is the official personal portfolio project for Ruixen, built using **Next.js** and **Tailwind CSS**. It is optimized for performance, accessibility, and search engine visibility with the integration of **next-sitemap** for automatic sitemap and robots.txt generation.

## Features

- Built with **Next.js** and **TypeScript**
- Responsive UI styled with **Tailwind CSS**
- **SEO-friendly** structure with sitemap and robots.txt
- Simple and modular codebase for easy updates
- Ready for deployment on **Vercel** or other platforms

## Project Structure

```
├── public/                    # Static assets
├── src/
│   ├── components/            # Reusable UI components
│   ├── pages/                 # Next.js route-based pages
│   └── data/                  # Static data (e.g., resume, projects)
├── next-sitemap.config.js     # Sitemap configuration
├── next.config.js             # Next.js configuration
├── package.json
└── README.md
```

## Sitemap and SEO Setup

This project uses **next-sitemap** to generate a `sitemap.xml` and `robots.txt` file, which help search engines crawl your site effectively.

### Installation

1. Install the package:

   ```bash
   npm install next-sitemap
   ```

### Configuration

Create a `next-sitemap.config.js` file at the root of the project:

```js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ruixen.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ["/private", "/admin"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
```

### Script Setup

Add the following to your `package.json` scripts:

```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

This automatically generates the sitemap after each production build.

To generate manually:

```bash
npx next-sitemap
```

After generation, the following files will be created in the `/public` directory:

- `/sitemap.xml`
- `/robots.txt`

These are used by search engines for crawling and indexing your site.

## Deployment

You can deploy this project on any platform that supports **Node.js**, such as:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Your own server

### For Vercel:

1. Push your code to **GitHub**.
2. Import the repository into **Vercel**.
3. Set the build command to `npm run build`.
4. Set the output directory to `.next`.


## Contact & Support

If you need help, have feedback, or want to suggest improvements, feel free to reach out:

- **Email**: [support@ruixen.com](mailto:support@ruixen.com)
- **Feedback**: [feedback@ruixen.com](mailto:feedback@ruixen.com)

Maintained by the **Ruixen Team**.

---

Let me know if you need a **license section** or **contributor guidelines** added.
