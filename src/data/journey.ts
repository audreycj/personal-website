// ==========================================================
// THE JOURNEY (timeline page)
// Each chapter has "stops". Each stop is one moment on the path.
//
//   doodle: which drawing to show (see src/components/Doodle.astro)
//   color:  sticker color: 'sage' | 'butter' | 'lilac' | 'peach' | 'sky'
//   bullets: the short, professional version
//   story:  the long version (your own reflections), one string per paragraph
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
  bullets?: string[];
  story?: string[];
  tags?: string[];
};

export type Chapter = { number: number; title: string; blurb: string; stops: Stop[] };

// Pull a stop's details from resume.ts so work/education text lives in one place.
const span = (a: string, b: string) => (a ? `${a} – ${b}` : b);
function fromJob(id: string, extra: Partial<Stop> = {}): Stop {
  const j = job(id);
  return { when: span(j.start, j.end === 'Present' ? 'now' : j.end), doodle: j.doodle, color: j.color, title: j.role,
    place: `${j.org} · ${j.setup.toLowerCase()}`, bullets: j.bullets, story: j.story, tags: j.skills?.slice(0, 4), ...extra };
}
function fromSchool(id: string, extra: Partial<Stop> = {}): Stop {
  const sc = school(id);
  return { when: span(sc.start, sc.end === 'Present' ? 'now' : sc.end), doodle: sc.doodle, color: sc.color, title: sc.program,
    place: sc.school, meta: sc.honors?.join(' · '), bullets: sc.activities?.length ? [sc.activities.join(', ')] : undefined,
    story: sc.story, ...extra };
}

export const chapters: Chapter[] = [
  {
    number: 1,
    title: 'little audrey',
    blurb: 'Where my work ethic, standards, and love for the arts started.',
    stops: [
      fromSchool('ihma', { when: 'kindergarten to 2017', title: 'Kindergarten to Junior High School' }),
    ],
  },
  {
    number: 2,
    title: 'the big move',
    blurb: 'A small-pond fish thrown into a lake.',
    stops: [
      fromSchool('silliman', { when: '2017 – 2019', title: 'Senior High School, STEAM Strand', place: 'Silliman University · Dumaguete City' }),
    ],
  },
  {
    number: 3,
    title: 'computer science, on a whim',
    blurb: 'I asked my mom to pick my program. It worked out.',
    stops: [
      fromSchool('mmcm-bscs', { when: '2019', title: 'BS Computer Science begins', place: 'Mapúa Malayan Colleges Mindanao · Davao City',
        meta: 'Computing Students Society Secretary, A.Y. 2020–2021', bullets: undefined }),
      fromJob('mmcm-assistant', { place: 'MMCM Admissions Office · part-time', tags: undefined }),
      {
        when: 'Jun 2021',
        doodle: 'seedling',
        color: 'sage',
        title: 'Champion: Reimagined, Advocacies in the New Normal',
        place: 'MMCM Center for Service-Learning and Community Engagement',
        bullets: ['Won with a project proposal for community development through a chosen advocacy'],
        story: ['A classmate recruited me during the pandemic and I thought, why not? It introduced me to the idea of using technology intentionally to solve a problem.'],
      },
      {
        when: 'Jun 2022',
        doodle: 'chart',
        color: 'sky',
        title: '2nd Runner-Up: Philippine Junior Data Science Challenge',
        place: 'UP Data Science Society',
        bullets: ['Month-long event with talks, workshops, and an exploratory data analysis competition'],
        story: ['A classmate recruited me and two others. This was my first taste of data analytics, and I\'m still learning it through online courses today.'],
      },
      fromJob('chatchatabc', { when: 'Mar – May 2023' }),
      {
        when: 'May 2023',
        doodle: 'mic',
        color: 'butter',
        title: 'Champion: Paper Presentation, Mindanao Conference for IT Students 2023',
        place: 'Philippine Society of IT Educators (PSITE), Davao Region',
        bullets: ['Placed first among 16 presenters, representing my school and our thesis duo'],
        story: ['Speaking in front of a crowd after two years of being stuck at home during the pandemic was nerve-wracking. But I got it done and conquered!'],
      },
      {
        when: 'Jul 2023',
        doodle: 'gradcap',
        color: 'lilac',
        title: 'Graduated Magna Cum Laude',
        place: 'BS Computer Science · MMCM',
        meta: 'Gold Medal Awardee · consistent Dean\'s Lister and President\'s Lister',
        bullets: ['Outstanding Student Research Awards 2023 Finalist: our thesis was one of the top three in the College of Computer and Information Science'],
      },
    ],
  },
  {
    number: 4,
    title: 'through the user\'s eyes',
    blurb: 'Is this easy enough for anyone to use?',
    stops: [
      fromJob('telemondo'),
      {
        when: '2024 – 2026',
        doodle: 'chart',
        color: 'peach',
        title: 'Kept learning data analytics on the side',
        place: 'Eskwelabs Bootcamp · IBM courses on Coursera',
        bullets: ['Data Analytics Bootcamp (Eskwelabs, 2024) and six IBM courses on Excel, dashboards, Python, and SQL (2025–2026)'],
      },
    ],
  },
  {
    number: 5,
    title: 'the teacher era',
    blurb: 'You can\'t teach what you don\'t understand.',
    stops: [
      fromJob('dorsu', { story: job('dorsu').story?.slice(0, 2) }),
      fromSchool('mapua-mit'),
      {
        when: 'Oct 2026',
        doodle: 'bot',
        color: 'sage',
        title: 'Built MingMing, my first "I\'ll just make one" project',
        place: 'A Discord bot for my class servers',
        bullets: ['Registers students with their proper names, cross-checks the class list, and sets their nicknames automatically'],
        story: [
          'For a long time I did "tech things" to graduate, then to get a job. MingMing was the first time I asked, "what can I make to fix a problem I\'m personally facing?"',
          'It was a turning point for me. Maybe it came late, but late is better than never.',
        ],
      },
    ],
  },
];
