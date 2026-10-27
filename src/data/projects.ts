// ==========================================================
// PROJECTS
//   projects:    the rows on the home page
//   caseStudies: full project pages (/projects/<slug>), shown on the Projects page
//   practice:    smaller guided/practice projects, shown as a gallery
//
// Images live in public/projects/<slug>/ (originals are in private/).
// ==========================================================

export type Color = 'sage' | 'butter' | 'lilac' | 'peach' | 'sky';

// ---------- home page rows ----------
export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  color: Color;
  doodle: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: 'Mingming bot',
    blurb: 'A Discord bot that registers students in my class servers with their proper names, checks them against the class list, and unlocks their section\'s channels.',
    tags: ['Discord', 'Cloudflare Workers', 'personal project'],
    color: 'sage',
    doodle: 'bot',
    href: '/projects/mingming',
  },
  {
    name: 'Ma\'am Audrey\'s lessons',
    blurb: 'A self-study website for my classes: lessons in plain English, with pictures students can tap and play with on their phones.',
    tags: ['Astro', 'interactive visuals', 'for my students'],
    color: 'sky',
    doodle: 'chalkboard',
    href: '/projects#lessons',
  },
  {
    name: 'MIT study notebook',
    blurb: 'My Master\'s in IT lessons rewritten in plain English, with interactive diagrams, quizzes, and doodles.',
    tags: ['Astro', 'interactive visuals', 'personal project'],
    color: 'butter',
    doodle: 'notebook',
    href: '/projects#notebook',
  },
  {
    name: 'UI/UX design',
    blurb: 'Web and mobile apps I designed for real clients: a booking system, a members app, an SMS platform, and an online English school.',
    tags: ['Figma', 'web & mobile'],
    color: 'lilac',
    doodle: 'phone',
    href: '/projects#design',
  },
  {
    name: 'Data analytics',
    blurb: 'A bootcamp capstone, a SQL analysis, and dashboards I built while learning Power BI and Looker Studio.',
    tags: ['SQL', 'Power BI', 'Looker Studio'],
    color: 'peach',
    doodle: 'chart',
    href: '/projects#data',
  },
];

// ---------- case studies ----------
export type Shot = { src: string; caption: string; device?: 'browser' | 'phone' | 'plain' };

export type CaseStudy = {
  slug: string;
  category: 'design' | 'data';
  name: string;
  tagline: string;      // one line under the title
  color: Color;
  doodle: string;
  cover: string;        // image used on the Projects page card
  facts: { label: string; value: string }[];
  tags: string[];
  links?: { label: string; url: string }[];
  problem: string[];    // "the brief"
  role: string[];       // "what I did"
  features?: { title: string; text: string }[];
  process?: { step: string; text: string }[];
  shots: Shot[];
  takeaway?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'masonic-mrms',
    category: 'design',
    name: 'Davao Masonic Hub: Meeting Room Management System',
    tagline: 'A booking system that lets members reserve meeting rooms without the back-and-forth.',
    color: 'sky',
    doodle: 'chalkboard',
    cover: '/projects/masonic-mrms/01.webp',
    facts: [
      { label: 'client', value: 'Davao Masonic Foundation' },
      { label: 'my role', value: 'UI/UX Designer' },
      { label: 'made at', value: 'Telemondo Technologies' },
      { label: 'year', value: '2024' },
      { label: 'timeline', value: '2 months' },
    ],
    tags: ['web app', 'desktop + mobile', 'booking'],
    problem: [
      'The Davao Masonic Foundation rents out meeting rooms, and reservations were hard to manage. They wanted the whole process digital: checking what\'s free, booking, paying, and keeping track of who is using which room.',
    ],
    role: [
      'I was responsible for the entire UI/UX design, from the first needs analysis to the final screens.',
      'I built interactive prototypes to gather feedback, then worked with the developers during implementation to keep the design consistent across desktop and mobile.',
    ],
    features: [
      { title: 'Calendar & booking', text: 'A visual calendar of open time slots, real-time booking, check-in and check-out, and recurring reservations.' },
      { title: 'Room profiles', text: 'Each room shows its price, size, capacity, location, and photos, with search and filters to find the right one.' },
      { title: 'Admin tools', text: 'Admins can confirm, override, or cancel bookings, see reports, and export data to CSV.' },
      { title: 'Users & assets', text: 'Secure logins, user roles, activity logs, and tracking of the equipment that comes with each room.' },
    ],
    process: [
      { step: 'Research & planning', text: 'A needs analysis to find out what users needed and which features mattered most.' },
      { step: 'Design & prototyping', text: 'Interactive prototypes to test ideas and collect feedback early.' },
      { step: 'Implementation', text: 'Worked with the development team as they built it, keeping desktop and mobile consistent.' },
      { step: 'Testing', text: 'Usability testing, then design changes based on what we learned.' },
    ],
    shots: [
      { src: '/projects/masonic-mrms/01.webp', caption: 'Home: the calendar, upcoming reservations, and pending payments at a glance.', device: 'browser' },
      { src: '/projects/masonic-mrms/02.webp', caption: 'Rooms: browse every room with its next available slot.', device: 'browser' },
      { src: '/projects/masonic-mrms/03.webp', caption: 'Room profile: price, capacity, location, and photos.', device: 'browser' },
      { src: '/projects/masonic-mrms/04.webp', caption: 'Reservation details: purpose, equipment, and special instructions.', device: 'browser' },
    ],
  },
  {
    slug: 'masonic-hub',
    category: 'design',
    name: 'Davao Masonic Hub',
    tagline: 'A members app for keeping lodges connected: profiles, dues, events, and announcements.',
    color: 'lilac',
    doodle: 'phone',
    cover: '/projects/masonic-hub/01.webp',
    facts: [
      { label: 'client', value: 'Davao Masonic Foundation' },
      { label: 'my role', value: 'Mobile Adaptation Designer' },
      { label: 'made at', value: 'Telemondo Technologies' },
      { label: 'year', value: '2024' },
      { label: 'timeline', value: '2 months' },
    ],
    tags: ['mobile app', 'iOS', 'members'],
    links: [{ label: 'see it on the App Store', url: 'https://apps.apple.com/ph/app/masonic-hub/id6502252129' }],
    problem: [
      'The foundation needed one place for member communication and admin work, on both phones and the web: who the members are, who has paid their dues, and what\'s happening at each lodge.',
    ],
    role: [
      'I worked alongside a senior UI/UX designer, adapting the desktop designs for mobile and contributing original screens so the app felt consistent across both.',
      'I also made the promotional mockups for the App Store and Play Store listings.',
    ],
    features: [
      { title: 'Member directory', text: 'Digital registration and member profiles, with filters by role, industry, and more.' },
      { title: 'Dues & payments', text: 'Tracks yearly dues and payment history, with push and email reminders.' },
      { title: 'Announcements', text: 'Real-time announcements and messages from lodge secretaries.' },
      { title: 'Roles & reports', text: 'Separate access for super admins, secretaries, and members, plus reports and activity logs.' },
    ],
    shots: [
      { src: '/projects/masonic-hub/01.webp', caption: 'The app at a glance: sign-in, member ID with QR code, and lodge events.', device: 'plain' },
      { src: '/projects/masonic-hub/02.webp', caption: 'Member profile: dues owed and upcoming lodge meetings.', device: 'phone' },
      { src: '/projects/masonic-hub/03.webp', caption: 'Directory: find and contact fellow members.', device: 'phone' },
      { src: '/projects/masonic-hub/04.webp', caption: 'Dues management: who has paid, who hasn\'t, and how much.', device: 'phone' },
    ],
  },
  {
    slug: 'blasttext',
    category: 'design',
    name: 'BlastText System',
    tagline: 'An SMS platform for sending personalized messages to hundreds of people at once.',
    color: 'peach',
    doodle: 'speech',
    cover: '/projects/blasttext/01.webp',
    facts: [
      { label: 'my role', value: 'UI/UX Designer' },
      { label: 'made at', value: 'Telemondo Technologies' },
      { label: 'year', value: '2024' },
      { label: 'timeline', value: '1 month' },
      { label: 'tools', value: 'Figma' },
    ],
    tags: ['web app', 'messaging', 'user manual'],
    problem: [
      'Organizations needed to send bulk text messages that still feel personal, like greeting each person by name, and to target the right group, such as everyone in one area or age range.',
    ],
    role: [
      'I mapped out the user flows with the development team, then designed the interface in Figma for both administrators and regular users. The developers handled the software, hardware, and networking.',
      'After usability testing and adjustments, I wrote the BlastText System Manual: step-by-step instructions for setting up and using both the software and the hardware.',
    ],
    features: [
      { title: 'Personalized messages', text: 'Send to a group or one person, using templates that fill in details like each person\'s first name.' },
      { title: 'Smart filters', text: 'Choose recipients by age, gender, area code, or custom tags.' },
      { title: 'Scheduling', text: 'Write a message now and set it to go out later.' },
      { title: 'Status tracking', text: 'See which messages were sent and delivered.' },
    ],
    shots: [
      { src: '/projects/blasttext/02.webp', caption: 'Send Message: pick recipients by filter, tag, or name, then write once for everyone.', device: 'browser' },
      { src: '/projects/blasttext/03.webp', caption: 'Contact Directory: add, import, tag, and filter contacts.', device: 'browser' },
      { src: '/projects/blasttext/04.webp', caption: 'Messaging History: every message and who it reached.', device: 'browser' },
    ],
  },
  {
    slug: 'englishworks',
    category: 'design',
    name: 'EnglishWorks',
    tagline: 'An online school for learning English as a second language, from sign-up to live class.',
    color: 'butter',
    doodle: 'book',
    cover: '/projects/englishworks/01.webp',
    facts: [
      { label: 'client', value: 'EnglishWorks' },
      { label: 'my role', value: 'UI/UX Designer' },
      { label: 'made at', value: 'Telemondo Technologies' },
      { label: 'year', value: '2023' },
      { label: 'timeline', value: '2 months' },
    ],
    tags: ['web app', 'education', 'Zoom integration'],
    problem: [
      'EnglishWorks teaches English to learners from many different backgrounds. They needed a platform where students could sign up, enroll in the right course for their level, and join live classes easily.',
    ],
    role: [
      'I started with a competitive analysis of other ESL platforms, then designed the full UI/UX with a focus on clear navigation and accessibility.',
      'I designed the key flows (accounts, course setup, and class scheduling with Zoom) together with the developers, then refined the design through usability testing.',
    ],
    features: [
      { title: 'Courses by category', text: 'Courses organized by topic, skill level, or focus, so learners can find their fit.' },
      { title: 'Structured lessons', text: 'Each course is broken into lessons with videos, exercises, and reading materials.' },
      { title: 'Live classes', text: 'Scheduled classes with assigned teachers, connected to Zoom.' },
      { title: 'Progress tracking', text: 'User roles, activity logs, and analytics on engagement and progress.' },
    ],
    shots: [
      { src: '/projects/englishworks/02.webp', caption: 'Course catalog: courses grouped into categories.', device: 'browser' },
      { src: '/projects/englishworks/03.webp', caption: 'Course page: description, options, and lesson list.', device: 'browser' },
    ],
  },
  {
    slug: 'eskwelabs-capstone',
    category: 'data',
    name: 'EskweGifts: Customer Segmentation & Retention',
    tagline: 'My data analytics bootcamp capstone: why customers of an online gift shop stop coming back.',
    color: 'sage',
    doodle: 'chart',
    cover: '/projects/eskwelabs-capstone/01.webp',
    facts: [
      { label: 'program', value: 'Eskwelabs Data Analytics Bootcamp, Cohort 15' },
      { label: 'my role', value: 'Data Analyst (team project)' },
      { label: 'year', value: '2024' },
      { label: 'timeline', value: '5 weeks' },
    ],
    tags: ['RFM analysis', 'Looker Studio', 'presentation'],
    links: [{ label: 'open the dashboard', url: 'https://lookerstudio.google.com/reporting/966da8da-8344-4cb4-bd51-d3bb23df14b9' }],
    problem: [
      'EskweGifts, a fictional online shop selling customizable gifts, was becoming less profitable every year. Our team had to figure out who its customers were, how vouchers affected their buying, and what could bring them back.',
    ],
    role: [
      'I led the dashboard wireframing and the structure of our final presentation, keeping both easy to follow for people who don\'t work with data.',
      'We grouped customers using RFM analysis (how recently, how often, and how much they buy), then looked at voucher use and demographics.',
    ],
    process: [
      { step: 'Plan', text: 'Defined our questions about customer groups, voucher impact, and retention.' },
      { step: 'Wireframe', text: 'Sketched the dashboard first, prioritizing what a non-technical audience needs to see.' },
      { step: 'Analyze', text: 'Segmented customers with RFM, then studied voucher trends and demographics.' },
      { step: 'Present', text: 'Built and presented the deck to a panel of judges from the data industry.' },
    ],
    shots: [
      { src: '/projects/eskwelabs-capstone/01.webp', caption: 'Our capstone: customer segmentation and retention analysis for EskweGifts.', device: 'plain' },
    ],
    takeaway: 'The result was a 3-page interactive dashboard covering customer segments, voucher analysis, and profitability trends.',
  },
];

// ---------- practice gallery ----------
export type Practice = {
  name: string;
  tool: string;
  image: string;
  note: string;      // what it was + whose tutorial
  link?: { label: string; url: string };
  color: Color;
};

export const practice: Practice[] = [
  {
    name: 'Data Analyst Job Market Analysis',
    tool: 'SQL · PostgreSQL',
    image: '/projects/sql-job-market/01.webp',
    note: 'Which data analyst jobs pay best, and which skills they ask for. Guided by Luke Barousse\'s SQL course.',
    link: { label: 'code on GitHub', url: 'https://github.com/audreycj/SQL-project-data-job-analysis' },
    color: 'sky',
  },
  {
    name: 'Flight Routes Map',
    tool: 'Power BI',
    image: '/projects/flight-routes/01.webp',
    note: 'A flow map of flight routes with continent and airline filters. Following Yiannis Pitsillides\'s tutorial.',
    link: { label: 'dashboard files', url: 'https://drive.google.com/drive/folders/1hqxADXEtAzUvdHZ0br7oXqsvAYhlRyjZ?usp=sharing' },
    color: 'lilac',
  },
  {
    name: 'Restaurant Sales Dashboard',
    tool: 'Power BI · DAX',
    image: '/projects/dax-dashboard/01.webp',
    note: 'Practicing DAX measures on Zomato restaurant data. Following The Developer\'s tutorial.',
    link: { label: 'dashboard files', url: 'https://drive.google.com/drive/folders/1JUNC7k5XLloClhmTjYlFJKS25nDBDFq5?usp=sharing' },
    color: 'peach',
  },
  {
    name: 'HR Dashboard',
    tool: 'Power BI',
    image: '/projects/hr-dashboard/01.webp',
    note: 'Employee data by age, role, department, and more. Following DataScience RoadMap\'s tutorial.',
    link: { label: 'dashboard files', url: 'https://drive.google.com/drive/folders/1gJHKc3aKKcrRogypyIAoo4T5L9dxfHN9?usp=sharing' },
    color: 'sage',
  },
  {
    name: 'Sales Dashboard',
    tool: 'Looker Studio',
    image: '/projects/sales-dashboard/01.webp',
    note: 'Sales KPIs, trends, and a map, with filters. Following Danalyser\'s tutorial.',
    link: { label: 'open the dashboard', url: 'https://lookerstudio.google.com/reporting/2b95cc79-1706-4743-ae9c-b679846ca129' },
    color: 'butter',
  },
];
