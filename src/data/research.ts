// ==========================================================
// RESEARCH
// Add a paper by copying one { ... } block. Newest first.
//   link: a DOI, PDF, or repository URL (leave out if not public)
//   recognition: awards or presentations, shown as stamps
// ==========================================================

export type Paper = {
  title: string;
  authors: string;
  year: string;
  type: string;
  venue: string;
  summary: string;
  recognition?: string[];
  link?: string;
  color: 'sage' | 'butter' | 'lilac' | 'peach' | 'sky';
};

export const papers: Paper[] = [
  {
    title: '[Your undergraduate thesis title]',
    authors: '[Audrey Nanual and your thesis partner]',
    year: '2023',
    type: 'Undergraduate thesis',
    venue: 'BS Computer Science · Mapúa Malayan Colleges Mindanao',
    summary: '[One or two sentences: what problem it tackled, what you did, and what you found.]',
    recognition: [
      'Champion · Mindanao Conference for IT Students 2023 Paper Presentation',
      'Finalist · Outstanding Student Research Awards 2023',
    ],
    color: 'sage',
  },
];
