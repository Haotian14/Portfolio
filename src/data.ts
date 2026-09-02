export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  liveHref?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Texas Hold'em Trainer",
    description:
      "A complete 6-max poker training loop with range-aware AI, replayable hands, EV-based reviews and long-term leak reports. Built as an offline-first PWA with 985 automated tests.",
    tags: ["React", "TypeScript", "PWA", "Playwright"],
    href: "https://github.com/Haotian14/Texas_Hold",
    liveHref: "https://texas-hold.luohaotian0616.workers.dev/",
    image:
      "https://raw.githubusercontent.com/Haotian14/Texas_Hold/main/docs/assets/table.jpg",
  },
  {
    number: "02",
    title: "Frontend Interview Handbook",
    description:
      "A structured frontend knowledge system with 50 in-depth topics, full-text search, interview drills, code references and a dependency-based learning map. Every route is prerendered for speed and discoverability.",
    tags: ["React", "TypeScript", "Vite", "MDX"],
    href: "https://github.com/Haotian14/frontend-interview-notes",
    liveHref: "https://frontend-review-handbook.minato13.chatgpt.site/",
    image: `${import.meta.env.BASE_URL}frontend-handbook-cover.webp`,
  },
  {
    number: "03",
    title: "Algorithm Interview Handbook",
    description:
      "A focused interview handbook for machine learning roles: 17 chapters, 201 high-frequency review questions and runnable implementations covering LLMs, recommender systems, computer vision, machine learning and system design.",
    tags: ["LLM", "Machine Learning", "Algorithms", "Static Web"],
    href: "https://github.com/Haotian14/Algorithm-Review-Handbook",
    liveHref: "https://haotian14.github.io/Algorithm-Review-Handbook/#/",
    image: `${import.meta.env.BASE_URL}algorithm-handbook-cover.svg`,
  },
];

export type Milestone = {
  marker: string;
  label: string;
  title: string;
  place: string;
  body: string;
};

export const milestones: Milestone[] = [
  {
    marker: "01",
    label: "University",
    title: "Bachelor of Computer Science",
    place: "UNSW Sydney",
    body: "Built a rigorous foundation in software engineering, algorithms and artificial intelligence through hands-on systems and problem-solving projects.",
  },
  {
    marker: "02",
    label: "Postgraduate",
    title: "Master of Information Technology",
    place: "UNSW Sydney",
    body: "Deepened my technical range across security, data systems and modern software delivery while connecting academic ideas to product-oriented engineering.",
  },
  {
    marker: "03",
    label: "Now",
    title: "Frontend Engineer",
    place: "Product & Platform Development",
    body: "Building production web experiences with React, Vue and TypeScript — from complex interaction flows to performance, testing and release quality.",
  },
];

export type Principle = {
  number: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "Think in systems",
    body: "Design components, state and data flow so the product can grow without becoming fragile.",
  },
  {
    number: "02",
    title: "Ship with evidence",
    body: "Use tests, performance budgets and reproducible flows to turn confidence into something measurable.",
  },
  {
    number: "03",
    title: "Stay close to users",
    body: "Treat interaction polish, edge cases and clear feedback as core product work — not decoration.",
  },
];

export const skills = [
  "React",
  "TypeScript",
  "Vue 3",
  "JavaScript",
  "Vite",
  "Umi",
  "Ant Design",
  "ECharts",
  "Node.js",
  "Spring Boot",
  "Docker",
  "GitHub Actions",
];

export const navItems = [
  { id: "journey", label: "Journey" },
  { id: "work", label: "How I work" },
  { id: "projects", label: "Projects" },
];
