// ==========================================================
// CREDENTIALS PAGE: certificates, awards, languages
// ==========================================================

// issuer: who made the course · logos: keys from logos.ts (shown in order)
export type Cert = { name: string; issuer: string; date: string; url?: string; logos?: string[] };
export type CertGroup = { title: string; doodle: string; color: string; certs: Cert[] };

export const certGroups: CertGroup[] = [
  {
    title: 'Data Analytics',
    doodle: 'chart',
    color: 'sage',
    certs: [
      { name: 'Databases and SQL for Data Science with Python', issuer: 'IBM · on Coursera', date: 'Mar 2026', url: 'https://www.coursera.org/account/accomplishments/verify/4OJ1Q8JEQV34', logos: ['ibm', 'coursera'] },
      { name: 'Python Project for Data Science', issuer: 'IBM · on Coursera', date: 'Mar 2026', url: 'https://www.coursera.org/account/accomplishments/verify/JDYTSYVZXNVU', logos: ['ibm', 'coursera'] },
      { name: 'Python for Data Science, AI & Development', issuer: 'IBM · on Coursera', date: 'Mar 2026', url: 'https://www.coursera.org/account/accomplishments/verify/K7GH83PG44K3', logos: ['ibm', 'coursera'] },
      { name: 'Data Visualization and Dashboards with Excel and Cognos', issuer: 'IBM · on Coursera', date: 'Sep 2025', url: 'https://www.coursera.org/account/accomplishments/verify/YS3C5W272QLG', logos: ['ibm', 'coursera'] },
      { name: 'Excel Basics for Data Analysis', issuer: 'IBM · on Coursera', date: 'Sep 2025', url: 'https://www.coursera.org/account/accomplishments/verify/MZQMDVGBJZRQ', logos: ['ibm', 'coursera'] },
      { name: 'Introduction to Data Analytics', issuer: 'IBM · on Coursera', date: 'Sep 2025', url: 'https://www.coursera.org/account/accomplishments/verify/IE1OBEOB4YB3', logos: ['ibm', 'coursera'] },
      { name: 'Data Analytics Bootcamp', issuer: 'Eskwelabs', date: 'Oct 2024', logos: ['eskwelabs'] },
    ],
  },
  {
    title: 'Programming',
    doodle: 'laptop',
    color: 'lilac',
    certs: [
      { name: 'Smooth Like Flutter! Exploring Cross-Platform Development Part One', issuer: 'Google Developer Student Clubs Mapúa-MCM', date: 'Feb 2023', url: 'https://verified.sertifier.com/en/verify/38067888898492/', logos: ['gdsc'] },
      { name: 'Programming for Everybody (Getting Started with Python)', issuer: 'University of Michigan · on Coursera', date: 'Apr 2021', url: 'https://www.coursera.org/account/accomplishments/certificate/MLJKJELAEHU8', logos: ['umich', 'coursera'] },
      { name: 'Python Data Structures', issuer: 'University of Michigan · on Coursera', date: 'Nov 2020', url: 'https://www.coursera.org/account/accomplishments/certificate/PE8LQ7S72CWQ', logos: ['umich', 'coursera'] },
    ],
  },
  {
    title: 'Language',
    doodle: 'speech',
    color: 'peach',
    certs: [
      { name: 'TOEIC: C1 CEFR Level', issuer: 'ETS · TOEIC Program', date: 'May 2023', logos: ['toeic'] },
    ],
  },
];

export type Award = { place: string; event: string; issuer: string; date: string; note: string; logos?: string[] };

export const awards: Award[] = [
  { place: 'Finalist', event: 'Outstanding Student Research Awards 2023', issuer: 'Mapúa Malayan Colleges Mindanao', date: 'Jul 2023', note: 'Our thesis was one of the top three in the College of Computer and Information Science, presented alongside other colleges\' finalists to a panel of judges.', logos: ['mmcm'] },
  { place: 'Champion', event: 'Mindanao Conference for IT Students (MCITS) 2023: Paper Presentation', issuer: 'PSITE Davao Region', date: 'May 2023', note: 'Placed first among 16 presenters from IT programs across Mindanao.', logos: ['psite'] },
  { place: '2nd Runner-Up', event: 'Philippine Junior Data Science Challenge 2022', issuer: 'University of the Philippines Data Science Society', date: 'Jun 2022', note: 'A month-long exploratory data analysis competition for undergraduates.', logos: ['updss'] },
  { place: 'Champion', event: 'Reimagined: Advocacies in the New Normal', issuer: 'MMCM Center for Service-Learning and Community Engagement', date: 'Jun 2021', note: 'A project proposal for community development through technology.', logos: ['mmcm-cslce'] },
];

export const languages = [
  { name: 'Bisaya', note: 'my mother tongue', color: 'sage' },
  { name: 'English', note: 'everything I read and watch', color: 'butter' },
  { name: 'Filipino', note: 'learned in school', color: 'lilac' },
  { name: '日本語', note: 'casually learning!', color: 'peach' },
];
