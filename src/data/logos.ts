// ==========================================================
// LOGOS
// Files live in public/logos/. Refer to a logo by its key, e.g. logos: ['ibm', 'coursera'].
// To add one: save the image in public/logos/ and add a line here.
// ==========================================================

// fill: a tightly cropped square version for logos printed on a colored block.
//       In small tags it fills the tag (with a white ring) instead of floating in white space.
export const LOGOS: Record<string, { src: string; name: string; fill?: string }> = {
  dorsu:       { src: '/logos/dorsu.png',       name: 'Davao Oriental State University' },
  telemondo:   { src: '/logos/telemondo.png',   name: 'Telemondo Technologies' },
  chatchatabc: { src: '/logos/chatchatabc.png', name: 'ChatChatABC Philippines' },
  mmcm:        { src: '/logos/mmcm.png',        name: 'Mapúa Malayan Colleges Mindanao' },
  mapua:       { src: '/logos/mapua.png',       name: 'Mapúa University' },
  silliman:    { src: '/logos/silliman.png',    name: 'Silliman University' },
  ihma:        { src: '/logos/ihma.png',        name: 'Immaculate Heart of Mary Academy' },
  psite:       { src: '/logos/psite.png',       name: 'Philippine Society of IT Educators' },
  updss:       { src: '/logos/updss.png',       name: 'University of the Philippines Data Science Society' },
  'mmcm-cslce':{ src: '/logos/mmcm-cslce.png',  name: 'MMCM Center for Service-Learning and Community Engagement' },
  ibm:         { src: '/logos/ibm.png',         name: 'IBM' },
  coursera:    { src: '/logos/coursera.png',    name: 'Coursera' },
  eskwelabs:   { src: '/logos/eskwelabs.png',   name: 'Eskwelabs', fill: '/logos/fill/eskwelabs.png' },
  gdsc:        { src: '/logos/gdsc.png',        name: 'Google Developer Student Clubs' },
  umich:       { src: '/logos/umich.png',       name: 'University of Michigan', fill: '/logos/fill/umich.png' },
  toeic:       { src: '/logos/toeic.png',       name: 'TOEIC by ETS' },
};
