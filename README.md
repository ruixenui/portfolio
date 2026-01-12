# Ruixen Portfolio

A production-ready portfolio template built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Features smooth scroll animations, modern UI, and optimized for performance.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ruixenui/portfolio-template)

**Live Demo:** [https://portfolio-mocha-three-0caesswhna.vercel.app](https://portfolio-mocha-three-0caesswhna.vercel.app)

## Features

- Built with **Next.js 14** and **TypeScript**
- Smooth scroll animations with **Framer Motion**
- Responsive UI styled with **Tailwind CSS**
- Interactive skills section with filtering
- Timeline-based work experience
- **SEO-friendly** with sitemap and robots.txt
- Dark/Light mode ready
- One-click Vercel deployment

## Quick Start

### Deploy on Vercel (Recommended)

Click the button below to deploy your own copy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ruixenui/portfolio-template)

### Local Development

```bash
# Clone the repository
git clone https://github.com/ruixenui/portfolio-template.git

# Navigate to the project
cd portfolio-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
├── public/                    # Static assets (images, resume)
├── src/
│   ├── app/                   # Next.js App Router pages
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI components
│   │   ├── magicui/          # Animation components
│   │   └── ruixen/           # Custom components
│   ├── data/                  # Portfolio data (resume-data.tsx)
│   └── lib/                   # Utility functions
├── next-sitemap.config.js     # Sitemap configuration
├── vercel.json                # Vercel deployment config
└── package.json
```

## Customization

### Update Your Information

Edit `src/data/resume-data.tsx` to update:

- Name and title
- Avatar image
- About/Summary
- Work experience
- Education
- Skills
- Projects
- Extra-curricular activities
- Social links

### Add Your Avatar

Place your profile image in the `public/` folder and update `avatarUrl` in `resume-data.tsx`:

```typescript
avatarUrl: "/your-image.jpg",
```

## Sitemap and SEO

This project uses **next-sitemap** to generate sitemap and robots.txt automatically after build.

### Configuration

Update `next-sitemap.config.js` with your domain:

```js
module.exports = {
  siteUrl: "https://yourdomain.com",
  generateRobotsTxt: true,
};
```

## Deployment

### Vercel (Recommended)

1. Click the **Deploy** button above, or
2. Push to GitHub and import in [Vercel Dashboard](https://vercel.com/new)

### Other Platforms

- **Netlify**: Connect your repo and set build command to `pnpm build`
- **AWS Amplify**: Import from GitHub with Next.js preset
- **Self-hosted**: Run `pnpm build && pnpm start`

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [Lucide Icons](https://lucide.dev/) - Icons

## Contact & Support

- **Website**: [ruixen.com](https://ruixen.com)
- **Email**: [support@ruixen.com](mailto:support@ruixen.com)
- **Feedback**: [feedback@ruixen.com](mailto:feedback@ruixen.com)

## License

MIT License - feel free to use this template for your portfolio!

---

Made with love by **Ruixen UI**
