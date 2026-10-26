// ==========================================================
// RESEARCH
// Add a paper by copying one { ... } block. Newest first.
//   link: a DOI, PDF, or repository URL (leave out if not public)
//   recognition: awards or presentations, shown as stamps
// ==========================================================

export type Paper = {
  title: string;
  authors: string;
  adviser?: string;   // thesis adviser
  year: string;
  type: string;
  venue: string;
  summary: string;
  recognition?: string[];
  link?: string;      // the published version (DOI)
  explainer?: string; // a page on this site that explains it in plain language
  origin?: string;    // an extra note, e.g., where it was later published
  color: 'sage' | 'butter' | 'lilac' | 'peach' | 'sky';
};

export const papers: Paper[] = [
  {
    title: 'Automated Bacteria Colony Counting Using Hybrid Image Segmentation Algorithm Framework and YOLOv5 Transfer Learning Model',
    authors: 'Audrey Carmel Jay J. Nanual, Reznee Mariel R. Galope',
    adviser: 'Cherry B. Lisondra, MIT',
    year: '2023',
    type: 'Undergraduate thesis',
    venue: 'BS Computer Science · Mapúa Malayan Colleges Mindanao',
    summary: 'We built a dataset of E. coli plate photos and a two-step image cleanup method, then trained an AI model to find and count bacteria colonies automatically, instead of counting them by eye.',
    origin: 'Later published in IJIRMPS, Special Issue IPMESS-24 (January 2024).',
    recognition: [
      'Champion · Mindanao Conference for IT Students 2023 Paper Presentation',
      'Finalist · Outstanding Student Research Awards 2023',
    ],
    link: 'https://doi.org/10.37082/IJIRMPS.IPMESS-24.6',
    explainer: '/research/bacteria-colony-counting',
    color: 'sage',
  },
];
