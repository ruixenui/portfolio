import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "John Doe",
  initials: "JD",
  location: "San Francisco, CA",
  about: "Full Stack Developer",
  summary:
    "Passionate full stack developer with 5+ years of expertise in building modern web applications and scalable cloud solutions. Experienced in leading cross-functional teams, architecting microservices, and delivering high-impact products used by millions. Dedicated to writing clean, maintainable code and creating exceptional user experiences. Strong advocate for best practices, code quality, and continuous learning.",
  avatarUrl: "/dp.jpg",
  personalWebsiteUrl: "https://ruixen.com",
  resumeUrl: "https://ruixen.com",
  contact: {
    email: "hello@ruixen.com",
    social: [
      {
        name: "GitHub",
        url: "https://ruixen.com",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://ruixen.com",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://ruixen.com",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Stanford University",
      degree: "Master of Science in Computer Science - Specialization in Artificial Intelligence and Machine Learning",
      start: "2020",
      end: "2022",
    },
    {
      school: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science - Minor in Data Science, Graduated with Honors",
      start: "2016",
      end: "2020",
    },
    {
      school: "Bay Area Community College",
      degree: "Associate Degree in Information Technology - Dean's List, GPA 3.9/4.0",
      start: "2014",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Tech Giants Inc",
      link: "https://ruixen.com",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      start: "Jan 2023",
      end: "present",
      description: "Leading development of core platform features serving 2M+ daily active users. Architected and implemented a new microservices infrastructure that reduced latency by 45% and improved system reliability to 99.99% uptime. Mentoring a team of 5 junior developers and conducting code reviews. Spearheaded the migration from monolith to microservices, reducing deployment time by 60%.",
    },
    {
      company: "Innovation Labs",
      link: "https://ruixen.com",
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      start: "Jun 2021",
      end: "Dec 2022",
      star_tag: ["Lead"],
      description: "Built and maintained 12+ client-facing applications using React, Node.js, and PostgreSQL. Developed RESTful APIs handling 100K+ requests per minute with 99.9% uptime. Led the migration of legacy systems to modern microservices architecture, improving performance by 40%. Implemented CI/CD pipelines reducing deployment cycles from days to hours.",
    },
    {
      company: "Digital Solutions Co",
      link: "https://ruixen.com",
      badges: ["On Site"],
      title: "Software Developer",
      start: "Aug 2020",
      end: "May 2021",
      description: "Developed enterprise web applications for Fortune 500 clients in finance and healthcare sectors. Implemented responsive UI components using React and TypeScript, improving mobile user engagement by 35%. Collaborated with UX designers to revamp the product interface, resulting in 25% increase in user satisfaction scores. Built automated testing suites achieving 90% code coverage.",
    },
    {
      company: "StartUp Ventures",
      link: "https://ruixen.com",
      badges: ["Remote"],
      title: "Junior Developer",
      start: "Jan 2020",
      end: "Jul 2020",
      description: "Contributed to the development of an AI-powered SaaS platform from MVP to production launch. Built internal tools that automated manual processes, saving 20+ hours per week for the operations team. Participated in agile ceremonies and contributed to sprint planning. Gained expertise in AWS services including Lambda, S3, and DynamoDB.",
    }
  ],
  skills: {
    "AI Research": ["PyTorch", "Transformers", "Diffusers", "PEFT", "Hugging Face"],
    "MLOps & Deployment": ["FastAPI", "Docker", "Kubernetes", "SageMaker", "Langchain"],
    "Data Engineering": ["Pandas", "Spark", "Hadoop", "Kafka"],
    "Frontend & APIs": ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express"],
    "Vector Search": ["Pinecone", "FAISS", "Qdrant", "ChromaDB"],
    "Cloud & Infra": ["AWS", "Azure", "Cloudflare", "E2E Cloud"],
    "Languages": ["Python", "TypeScript", "SQL", "JavaScript", "C++"],
  },
  projects: [
    {
      title: "E-Commerce Platform",
      techStack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "Redis"],
      description:
        "Built a full-featured e-commerce platform with real-time inventory management, shopping cart, secure Stripe payments, and order tracking. Handles 10,000+ daily transactions with 99.9% uptime. Implemented advanced caching strategies reducing page load time by 60%.",
      link: {
        label: "ruixen.com",
        href: "https://ruixen.com",
      },
    },
    {
      title: "Task Management App",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
      description:
        "Real-time collaborative task management application with team workspaces, drag-and-drop Kanban boards, and instant notifications via WebSockets. Features include time tracking, file attachments, and analytics dashboard. Used by 5,000+ teams globally.",
    },
    {
      title: "Analytics Dashboard",
      techStack: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      description:
        "Interactive business intelligence dashboard with 20+ customizable chart types, real-time data streaming, and automated report generation. Processes 1M+ data points daily. Includes role-based access control and white-label customization.",
      link: {
        label: "ruixen.com",
        href: "https://ruixen.com",
      },
    },
    {
      title: "Social Media App",
      techStack: ["React Native", "Firebase", "Redux", "Node.js", "AWS"],
      description:
        "Cross-platform mobile application featuring real-time messaging, media sharing with compression, story feature, and social feeds. Implements push notifications and offline-first architecture. 50,000+ downloads with 4.8 star rating.",
      link: {
        label: "ruixen.com",
        href: "https://ruixen.com",
      },
    },
    {
      title: "AI Content Generator",
      techStack: ["Python", "OpenAI", "FastAPI", "React", "Docker"],
      description:
        "AI-powered content generation platform using GPT-4 and custom fine-tuned models. Creates blog posts, marketing copy, social media content, and email campaigns. Features brand voice customization and SEO optimization. Serves 10,000+ monthly active users.",
    },
    {
      title: "Video Streaming Platform",
      techStack: ["Next.js", "AWS", "HLS", "Node.js", "MongoDB"],
      description:
        "Scalable video streaming platform with adaptive bitrate streaming, live streaming capabilities, and interactive features. Supports 100,000+ concurrent viewers with CDN integration. Includes creator monetization tools and analytics.",
    }
  ],
  extraCurricular: [
    {
      title: "Open Source Contributor",
      description:
        "Active contributor to major open-source projects including React, Next.js, and various developer tools. Maintained 3 popular npm packages with 50,000+ weekly downloads combined. Over 500+ contributions on GitHub with focus on documentation, bug fixes, and feature development.",
    },
    {
      title: "Tech Meetup Organizer",
      description:
        "Founded and organized monthly developer meetups in San Francisco Bay Area. Built a community of 2,000+ developers sharing knowledge through workshops, tech talks, and networking events. Hosted speakers from Google, Meta, and Netflix. Organized 3 annual hackathons.",
    },
    {
      title: "Hackathon Winner",
      description:
        "Won 5+ hackathons including first place at TechCrunch Disrupt SF and Google DevFest. Projects included an AI accessibility tool for visually impaired users and a climate change data visualization platform. Passionate about rapid prototyping and solving real-world problems under pressure.",
    },
  ]
} as const;
