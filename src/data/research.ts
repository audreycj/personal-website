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
  link?: string;      // the published paper (DOI)
  explainer?: string; // a page on this site that explains it in plain language
  origin?: string;    // where the work started (e.g., the original thesis)
  color: 'sage' | 'butter' | 'lilac' | 'peach' | 'sky';
};

export const papers: Paper[] = [
  {
    title: 'Automated Bacteria Colony Counting using Hybrid Image Segmentation Algorithm and YOLOv5 Transfer Learning Model',
    authors: 'Reznee Mariel R. Galope, Cherry B. Lisondra, Audrey Carmel Jay J. Nanual',
    year: '2024',
    type: 'Journal article',
    venue: 'IJIRMPS · Special Issue IPMESS-24 · January 2024',
    summary: 'We built a dataset of E. coli plate photos and a two-step image cleanup method, then trained an AI model to find and count bacteria colonies automatically, instead of counting them by eye.',
    origin: 'Originally submitted as an undergraduate thesis by A. C. J. J. Nanual and R. M. R. Galope, Mapúa Malayan Colleges Mindanao, May 2023.',
    recognition: [
      'Champion · Mindanao Conference for IT Students 2023 Paper Presentation',
      'Finalist · Outstanding Student Research Awards 2023',
    ],
    link: 'https://doi.org/10.37082/IJIRMPS.IPMESS-24.6',
    explainer: '/research/bacteria-colony-counting',
    color: 'sage',
  },
];
