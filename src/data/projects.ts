// ==========================================================
// PROJECTS
// href: link to a project page (or leave it out for "coming soon")
// ==========================================================

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  color: 'sage' | 'butter' | 'lilac' | 'peach' | 'sky';
  doodle: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: 'MingMing bot',
    blurb: 'A Discord bot that registers students in my class servers with their proper names, checks them against the class list, and unlocks their section\'s channels.',
    tags: ['Discord', 'Cloudflare Workers', 'personal project'],
    color: 'sage',
    doodle: 'bot',
    href: '/projects/mingming',
  },
  {
    name: 'UI/UX design',
    blurb: 'Web and mobile app designs from my time at Telemondo. [Being rewritten as case studies.]',
    tags: ['Figma', 'wireframes', 'prototypes'],
    color: 'lilac',
    doodle: 'phone',
  },
  {
    name: 'Data analytics',
    blurb: 'Dashboards and analyses from my courses and bootcamp. [Coming soon.]',
    tags: ['Python', 'SQL', 'Excel', 'Cognos'],
    color: 'peach',
    doodle: 'chart',
  },
];
