// ==========================================================
// CREDENTIALS PAGE: certificates, awards, languages
// ==========================================================

// issuer: who made the course · logos: keys from logos.ts (shown in order)
// image: a picture of the certificate in public/certs/ (opens in a pop-up when there's no verify link)
// several images: separate them with | · caption: shown under the image in the pop-up · detail: a small line under the name
export type Cert = { name: string; issuer: string; date: string; url?: string; image?: string; caption?: string; detail?: string; logos?: string[] };
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
      { name: 'Data Analytics Bootcamp', issuer: 'Eskwelabs', date: 'Oct 2024', image: '/certs/eskwelabs-bootcamp.webp', logos: ['eskwelabs'] },
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
      { name: 'TOEIC: C1 CEFR Level', issuer: 'ETS · TOEIC Program', date: 'May 2023', detail: 'Listening & Reading 970/990 · Speaking 190/200 · Writing 200/200', image: '/certs/toeic-lr.webp|/certs/toeic-sw.webp', caption: 'Official score reports (birth date and ID number hidden).', logos: ['toeic'] },
    ],
  },
];

// cert: a picture of the certificate in public/certs/ · post: a public link about it (e.g., an announcement)
export type Award = { place: string; event: string; issuer: string; date: string; note: string; logos?: string[]; cert?: string; certLabel?: string; certCaption?: string; post?: string };

export const awards: Award[] = [
  { place: 'Finalist', event: 'Outstanding Student Research Awards 2023', issuer: 'Mapúa Malayan Colleges Mindanao', date: 'Jul 2023', note: 'Our thesis was one of the top three in the College of Computer and Information Science, presented alongside other colleges\' finalists to a panel of judges.', logos: ['mmcm'], cert: '/certs/osra-2023.webp' },
  { place: 'Champion', event: 'Mindanao Conference for IT Students (MCITS) 2023: Paper Presentation', issuer: 'PSITE Davao Region', date: 'May 2023', note: 'Placed first among 16 presenters from IT programs across Mindanao.', logos: ['psite'], cert: '/certs/mcits-2023.webp' },
  { place: '2nd Runner-Up', event: 'Philippine Junior Data Science Challenge 2022', issuer: 'University of the Philippines Data Science Society', date: 'Jun 2022', note: 'A month-long exploratory data analysis competition for undergraduates.', logos: ['updss'] },
  { place: 'Champion', event: 'Reimagined: Advocacies in the New Normal', issuer: 'MMCM Center for Service-Learning and Community Engagement', date: 'Jun 2021', note: 'A project proposal for community development through technology.', logos: ['mmcm-cslce'], cert: '/certs/reimagined-2021.webp', certLabel: 'see the poster', certCaption: 'Saved from the MMCM Center for Service-Learning and Community Engagement Facebook post, June 25, 2021.', post: 'https://www.facebook.com/mmcmcsce/posts/pfbid02MJfUYjy8zEUGgA7nkEGiR1VM3aFbjHGo8WyXiGKjx5sBSWuSiEwUFYcmM4UYvJQVl' },
];

export const languages = [
  { name: 'Bisaya', note: 'My mother tongue, the language I grew up speaking.', color: 'sage' },
  { name: 'English', note: 'Comfortable speaking and writing it (TOEIC C1), and it\'s the language I learn most things in.', color: 'butter' },
  { name: 'Filipino', note: 'Learned it in school, and I\'m comfortable conversing in it.', color: 'lilac' },
  { name: '日本語', note: 'Casually learning it at my own pace, as a personal goal.', color: 'peach' },
];
