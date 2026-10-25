// ==========================================================
// SITE-WIDE INFO
// Edit these and every page updates.
// Anything in [square brackets] is a placeholder to fill in.
// ==========================================================

export const site = {
  name: 'Audrey Nanual',
  title: 'IT instructor',
  tagline: 'part-time cat butler',
  description: 'Audrey Nanual: BSIT instructor at Davao Oriental State University, UI/UX designer, and cat rescuer.',

  // contact (leave email empty '' to hide it)
  email: '', // e.g. 'hello@audreynanual.com'
  // shown on the Research page
  orcid: '', // hidden for now; to show it on the Research page later: 'https://orcid.org/0009-0002-5036-2934'

  // the contact form sends messages to your inbox through Web3Forms (web3forms.com).
  // This key only lets people send messages TO you, so it's fine for it to be public.
  web3formsKey: '4f2efb1a-4e61-4867-8a0b-90c88dfc04d2',

  // shown on the Contact page and in the footer
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/audrey-nanual/' },
    { label: 'GitHub', url: 'https://github.com/audreycj' },
  ],
};

// main navigation (professional side)
// The order here is also the order of the "next up" link at the bottom of each page.
// `special: true` gives a tab the highlighted sticker look.
export const nav: { label: string; href: string; special?: boolean }[] = [
  { label: 'home', href: '/' },
  { label: 'work', href: '/work' },
  { label: 'education', href: '/education' },
  { label: 'projects', href: '/projects' },
  { label: 'research', href: '/research' },
  { label: 'credentials', href: '/credentials' },
  { label: 'contact', href: '/contact' },
  { label: 'my journey', href: '/journey', special: true },
];

// the scrolling band on the home page
export const bandItems = [
  'data structures and algorithms', 'human-computer interaction', 'UI/UX design',
  'data analytics', 'discord bots', 'cat rescue', 'learning japanese',
];
