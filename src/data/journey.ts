// ==========================================================
// THE JOURNEY (timeline page)
// Each chapter has "stops". Each stop is one moment on the path.
//
//   doodle: which drawing to show (see src/components/Doodle.astro)
//   color:  sticker color: 'sage' | 'butter' | 'lilac' | 'peach' | 'sky'
//   takeaway: one line always shown on the card (the "so what" of this stop)
//   visible:  extra paragraphs always shown (use sparingly, for the big moments)
//   story:    "the full story" (your reflections), shown when someone taps it
//   more:     a link to the full details on another tab
// The résumé details (bullets, tools) live on the Work and Education tabs, not here.
//
// To add a stop, copy one { ... } block and edit it.
// ==========================================================

import { job, school } from './resume';

export type Stop = {
  when: string;
  doodle: string;
  color: 'sage' | 'butter' | 'lilac' | 'peach' | 'sky';
  title: string;
  place: string;
  meta?: string;
  takeaway?: string;
  visible?: string[];
  story?: string[];
  more?: { href: string; label: string };
};

export type Chapter = { number: number; title: string; blurb: string; stops: Stop[] };

// Pull a stop's details from resume.ts so work/education text lives in one place.
const span = (a: string, b: string) => (a ? `${a} – ${b}` : b);
function fromJob(id: string, extra: Partial<Stop> = {}): Stop {
  const j = job(id);
  return { when: span(j.start, j.end === 'Present' ? 'now' : j.end), doodle: j.doodle, color: j.color, title: j.role,
    place: `${j.org} · ${j.setup.toLowerCase()}`, story: j.story, more: { href: '/work', label: 'what I did there' }, ...extra };
}
function fromSchool(id: string, extra: Partial<Stop> = {}): Stop {
  const sc = school(id);
  return { when: span(sc.start, sc.end === 'Present' ? 'now' : sc.end), doodle: sc.doodle, color: sc.color, title: sc.program,
    place: sc.school, meta: sc.honors?.[0], story: sc.story, more: { href: '/education', label: 'honors & activities' }, ...extra };
}

export const chapters: Chapter[] = [
  {
    number: 1,
    title: 'little audrey',
    blurb: 'Where my work ethic, standards, and love for the arts started.',
    stops: [
      fromSchool('ihma', { when: 'kindergarten to 2017', title: 'Kindergarten to Junior High School',
        takeaway: 'Where my work ethic and standards were built.' }),
    ],
  },
  {
    number: 2,
    title: 'the big move',
    blurb: 'A small-pond fish thrown into a lake.',
    stops: [
      fromSchool('silliman', { when: '2017 – 2019', title: 'Senior High School, STEAM Strand', place: 'Silliman University · Dumaguete City',
        takeaway: 'Leaving home taught me to adapt, and to decide what I believe.' }),
    ],
  },
  {
    number: 3,
    title: 'computer science, on a whim',
    blurb: 'A whole new world that turned out to be a lot more than Microsoft Office.',
    stops: [
      fromSchool('mmcm-bscs', { when: '2019', title: 'BS Computer Science begins', place: 'Mapúa Malayan Colleges Mindanao · Davao City',
        meta: 'Computing Students Society Secretary, A.Y. 2020–2021',
        takeaway: 'I asked my mom to choose my program. Finding my own reasons to care about it took time.' }),
      fromJob('mmcm-assistant', { place: 'MMCM Admissions Office · part-time',
        takeaway: 'I learned to talk to people in their language, literally: Bisaya, Tagalog, or English.' }),
      {
        when: 'Jun 2021',
        doodle: 'seedling',
        color: 'sage',
        title: 'Champion: Reimagined, Advocacies in the New Normal',
        place: 'MMCM Center for Service-Learning and Community Engagement',
        meta: 'A project proposal for community development',
        takeaway: 'Where I first thought about using technology intentionally to solve a problem.',
        story: ['A classmate recruited me during the pandemic and I thought, why not? It introduced me to the idea of using technology intentionally to solve a problem.'],
      },
      {
        when: 'Jun 2022',
        doodle: 'chart',
        color: 'sky',
        title: '2nd Runner-Up: Philippine Junior Data Science Challenge',
        place: 'University of the Philippines Data Science Society',
        meta: 'A month-long exploratory data analysis competition',
        takeaway: 'My first taste of data analytics, and I\'m still learning it.',
        story: ['A classmate recruited me and two others. This was my first taste of data analytics, and I\'m still learning it through online courses today.'],
      },
      fromJob('chatchatabc', { when: 'Mar – May 2023',
        takeaway: 'Programming languages stopped being scary once I saw they mostly say the same things differently.' }),
      {
        when: 'May 2023',
        doodle: 'mic',
        color: 'butter',
        title: 'Champion: Paper Presentation, Mindanao Conference for IT Students 2023',
        place: 'Philippine Society of IT Educators (PSITE), Davao Region',
        meta: 'First among 16 presenters, representing my school and our thesis duo',
        takeaway: 'Nerve-wracking after two years at home. Got it done anyway.',
        story: ['Speaking in front of a crowd after two years of being stuck at home during the pandemic was nerve-wracking. But I got it done and conquered!'],
      },
      {
        when: 'Jul 2023',
        doodle: 'gradcap',
        color: 'lilac',
        title: 'Graduation day',
        place: 'BS Computer Science · Mapúa Malayan Colleges Mindanao',
        meta: 'Gold Medal Awardee · consistent Dean\'s Lister and President\'s Lister',
        takeaway: 'Graduated magna cum laude, with our thesis among the college\'s top three.',
        more: { href: '/credentials#awards', label: 'see the awards' },
      },
    ],
  },
  {
    number: 4,
    title: 'through the user\'s eyes',
    blurb: 'Is this easy enough for anyone to use?',
    stops: [
      fromJob('telemondo', { takeaway: 'Where I learned to see everything through the user\'s eyes.' }),
      {
        when: '2024 – 2026',
        doodle: 'chart',
        color: 'peach',
        title: 'Kept learning data analytics on the side',
        place: 'Eskwelabs Bootcamp · IBM courses on Coursera',
        meta: 'Data Analytics Bootcamp (2024) and six IBM courses (2025–2026)',
        takeaway: 'Still curious about data, so I keep learning it when I can.',
        more: { href: '/credentials', label: 'see the certificates' },
      },
    ],
  },
  {
    number: 5,
    title: 'the teacher era',
    blurb: 'You can\'t teach what you don\'t understand.',
    stops: [
      fromJob('dorsu', { story: job('dorsu').story?.slice(0, 2),
        takeaway: 'Teaching out loud made concepts that never stuck in college finally click.' }),
      fromSchool('mapua-mit', { takeaway: 'Back in school to strengthen my foundations and explore the application side of technology more deeply.' }),
      {
        when: 'launched Oct 2026',
        doodle: 'bot',
        color: 'sage',
        title: 'Built Mingming, my first "why don\'t I make one for this?" project',
        place: 'A Discord bot for my class servers',
        takeaway: 'The first time I built something for a problem I actually had, and found out computing could be fun.',
        visible: [
          'I use Discord for my classes because I wanted to keep my professional and personal spaces separate. I asked students to rename themselves with their full names, but the names were a mess, and finding one student to message took forever. No existing bot did what I needed, so I thought, "why don\'t I make one for this?"',
        ],
        story: [
          'For a long time I did "tech things" for the sake of graduating, then for the sake of getting a job, following whatever tutorials I could find to build a portfolio. Mingming was the first time I asked, "what can I make to fix a problem I\'m personally facing?" I think a lot of tech people have that moment much earlier.',
          'It finally made me appreciate the beauty and fun of the computing field. It was a turning point for me. Maybe it came late, but late is better than never.',
        ],
        more: { href: '/projects/mingming', label: 'how Mingming works' },
      },
    ],
  },
];

// Shown just before "to be continued". Delete the text (leave '') to hide it.
export const thread =
  'Looking back, there\'s a thread. In admissions, I learned to talk to people in their own language. In design, I learned to see through the user\'s eyes. In teaching, I explain from where the beginner stands.';
