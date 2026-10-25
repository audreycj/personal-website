// ==========================================================
// WORK EXPERIENCE + EDUCATION
// Used by the Work and Education pages, AND by the Journey page
// (journey.ts pulls these in), so you only edit each entry once.
//
//   bullets: "what I did" (short, professional)
//   skills:  tools & skills chips
//   story:   your reflections, one string per paragraph
// ==========================================================

export type Color = 'sage' | 'butter' | 'lilac' | 'peach' | 'sky';

export type Job = {
  id: string;
  role: string;
  org: string;
  type: string;      // Full-time, Part-time, Internship
  setup: string;     // Remote, Hybrid, Onsite
  location: string;
  start: string;
  end: string;
  doodle: string;
  color: Color;
  logos?: string[];  // keys from logos.ts
  bullets: string[];
  skills?: string[];
  story?: string[];
};

export type School = {
  id: string;
  school: string;
  program: string;
  location: string;
  start: string;
  end: string;
  doodle: string;
  color: Color;
  logos?: string[];  // keys from logos.ts
  honors?: string[];
  activities?: string[];
  story?: string[];
};

// newest first
export const jobs: Job[] = [
  {
    id: 'dorsu',
    role: 'BSIT Instructor',
    org: 'Davao Oriental State University (DOrSU)',
    type: 'Full-time',
    setup: 'Hybrid',
    location: 'Mati City, Davao Oriental',
    start: 'Jun 2026',
    end: 'Present',
    doodle: 'javaboard',
    color: 'butter',
    logos: ['dorsu'],
    bullets: [
      'Teach courses in the Bachelor of Science in Information Technology program',
      'Prepare lessons and learning materials, support students, and help with academic and administrative tasks',
      'A.Y. 2026–2027, 1st semester: Data Structures and Algorithms, Introduction to Computing',
    ],
    skills: ['Teaching', 'Curriculum materials', 'Explaining abstract concepts', 'Discord bots'],
    story: [
      'Teaching built a habit of explaining everything as if the listener is a beginner, and pushed me to get creative with abstract topics, especially in Data Structures and Algorithms.',
      'Teaching out loud also forced me to finally understand concepts that didn\'t stick when I was a student myself, because you can\'t teach something you don\'t understand.',
      'It also made me put my tech skills to use in real life. Mingming, my Discord registration bot, was the first time I asked, "what can I make to fix a problem I\'m personally facing?"',
    ],
  },
  {
    id: 'telemondo',
    role: 'UI/UX Designer',
    org: 'Telemondo Technologies',
    type: 'Full-time',
    setup: 'Remote',
    location: 'Davao City, Davao del Sur',
    start: 'Oct 2023',
    end: 'Jul 2026',
    doodle: 'phone',
    color: 'sage',
    logos: ['telemondo'],
    bullets: [
      'Designed wireframes and mockups in Figma for web and mobile applications',
      'Joined QA testing to identify and resolve design and user experience issues in the final product',
      'Wrote product documentation and user manuals for clients',
      'Designed infographics and promotional mockups for Google Play and App Store listings, plus client presentation decks',
    ],
    skills: ['Figma', 'Wireframing', 'Prototyping', 'UX', 'QA testing', 'Documentation'],
    story: [
      'This is where I really learned Figma and learned to think through the user\'s eyes. Can a near-sighted, non-techy grandma use this app? Is this instruction easy to understand? Do these colors clash? Is this the shortest path to get the task done?',
      'Now I can\'t stop evaluating the technology around me: apps, websites, even the ID scanners at school entrances. How often do they error? Could this process be simpler?',
    ],
  },
  {
    id: 'chatchatabc',
    role: 'Software Development Intern',
    org: 'ChatChatABC Philippines Inc.',
    type: 'Internship',
    setup: 'Onsite',
    location: 'Davao City, Davao del Sur',
    start: 'Mar 2023',
    end: 'May 2023',
    doodle: 'coffee',
    color: 'peach',
    logos: ['chatchatabc'],
    bullets: [
      'Researched and presented Java unit testing principles and tools (JUnit 5, JUnit Pioneer, AssertJ, Data Faker, Mockito, Easy Random, Database Rider, ModelAssert, Spring testing, TestContainers, Instancio, Selenide, JetBrains Aqua)',
      'Built presentation decks with Slidev, a Markdown-based slide tool',
      'Built a CLI unit-test code generator using the OpenAI API, Spring Boot, Picocli, and GraalVM native-image',
      'Wrote unit tests for a parking app with JUnit 5 and Database Rider',
    ],
    skills: ['Java', 'Spring Boot', 'JUnit 5', 'OpenAI API', 'Picocli', 'GraalVM', 'Slidev'],
    story: [
      'Our curriculum focused more on Python, though we were also taught C# and C++. This internship was my introduction to Java, and it made me realize that being exposed to different programming languages makes learning new things in computing a lot less intimidating.',
      'When I started college, everything was overwhelming and abstract. But as you learn a lot (a lot, A LOT) of things, you realize many concepts build on top of each other or carry over. Programming languages mostly do the same things, just with different words and symbols. To display something in Python, you write print("hi"). In Java, you write System.out.println("hi");.',
      'You also realize different languages exist for different purposes. Python is great for math and analytics, and it\'s versatile and easy to learn because it reads almost like English. Java runs a lot of the apps and systems we use every day, like Netflix, banking systems, and Android apps.',
      'This internship gave me my "aha!" moment about programming languages, something I\'d struggled to wrap my head around as someone who wasn\'t tech-savvy (at least not in the programmer way) going into Computer Science.',
    ],
  },
  {
    id: 'mmcm-assistant',
    role: 'Student Office Assistant',
    org: 'Mapúa Malayan Colleges Mindanao (Admissions Office)',
    type: 'Part-time',
    setup: 'Onsite',
    location: 'Davao City, Davao del Sur',
    start: 'Dec 2019',
    end: 'Mar 2020',
    doodle: 'flag',
    color: 'lilac',
    logos: ['mmcm'],
    bullets: [
      'Led scheduled campus tours for students, parents, guardians, and visitors',
      'Assisted with onsite entrance exams',
      'Encoded enrollee data in the school\'s centralized information management system',
      'Answered inquiries by phone, email, social media, and in person',
    ],
    skills: ['Communication', 'Customer service', 'Data entry', 'Bisaya · Filipino · English'],
    story: [
      'I was having a bit of an existential crisis: I didn\'t want to be "just an academic nut" and I worried about surviving the real world. So I applied for an actual job at school and landed in the admissions office.',
      'It was my first real workplace. Even though it was my own school, I worked with actual hired colleagues, had real responsibilities, and got paid to do the work. Outside the controlled academic setting, I had to deal with people beyond my classmates and family: strangers I was responsible for serving as part of my job.',
      'I talked with people from all walks of life and learned to adjust my language, wording, and tone to whoever was in front of me: Bisaya, Tagalog, or English. I also used a real information management system for the first time and thought, "oh, so the databases in my lectures turn into this? Cool."',
    ],
  },
];

// newest first
export const schools: School[] = [
  {
    id: 'mapua-mit',
    school: 'Mapúa University',
    program: 'Master\'s in Information Technology (MIT)',
    location: 'Intramuros and Makati, Metro Manila',
    start: 'Aug 2026',
    end: 'Present',
    doodle: 'book',
    color: 'lilac',
    logos: ['mapua'],
    story: [
      'Part of it is for promotion in my job as a BSIT instructor at DOrSU. But I also wanted to keep learning, and to broaden and deepen my understanding of the field.',
      'In undergrad, I was overwhelmed by how new everything was, and the pandemic brought a kind of intellectual sluggishness during my second and third years. (Shifting programs wasn\'t an option. I just wanted to graduate, lol.) I couldn\'t get the whys and so-whats of the concepts being fed to me, or see how they connected to the real world.',
      'So I\'m not confident in the foundations of some areas of computing. I\'m in the "I feel like I understand them, but maybe I don\'t" boat. I want to get past that uncertainty: relearn what needs relearning, and learn more of what there is to learn.',
      'For my master\'s, I chose Information Technology over something closer to my Computer Science degree for two reasons: I teach BSIT students, and I\'m now more interested in the application side of technology than in inventing and discovering the theories, math, and algorithms behind it.',
    ],
  },
  {
    id: 'mmcm-bscs',
    school: 'Mapúa Malayan Colleges Mindanao',
    program: 'Bachelor of Science in Computer Science',
    location: 'Davao City, Davao del Sur',
    start: 'Jun 2019',
    end: 'Jul 2023',
    doodle: 'gradcap',
    color: 'sage',
    logos: ['mmcm'],
    honors: ['Magna Cum Laude', 'Gold Medal Awardee', 'Consistent Dean\'s Lister and President\'s Lister'],
    activities: ['Computing Students Society (Secretary, A.Y. 2020–2021)'],
    story: [
      'I wanted to be closer to home, so I went back to Davao for college. I had no specific passion at the time, so I asked my mom to choose my program for me. I got thrown into a world of tech that turned out to be a lot more than just Microsoft Office.',
      'The pandemic hit during my second and third years. Self-studying brand-new, abstract concepts was a real struggle, and it taught me how much a structured class with a mentor helps things stick.',
      'Looking back, I appreciate my instructors and professors so much. They went above and beyond to teach us through a really hard time, on top of their own lives. Now that I teach, I understand what that took.',
    ],
  },
  {
    id: 'silliman',
    school: 'Silliman University',
    program: 'Senior High School, Academic Track: STEAM Strand',
    location: 'Dumaguete City, Negros Oriental',
    start: 'Jun 2017',
    end: 'Apr 2019',
    doodle: 'boat',
    color: 'sky',
    logos: ['silliman'],
    honors: ['Consistent high honors student'],
    activities: ['Red Cross Youth', 'Hijos de Davao'],
    story: [
      'I moved from my hometown in southeastern Mindanao all the way to Visayas. It was two years of new perspectives, values, belief systems, and a whole new world. Like a fish from a small pond thrown into a lake.',
      'I met people from different countries, languages, provinces, and life situations. I deconstructed what I originally believed and formed my own set of morals. Being pushed out of my comfort zone made me more adaptable and level-headed, and that has stayed with me.',
    ],
  },
  {
    id: 'ihma',
    school: 'Immaculate Heart of Mary Academy',
    program: 'Kindergarten, Elementary, and Junior High School',
    location: '',
    start: 'Jun 2005',
    end: '2017',
    doodle: 'backpack',
    color: 'peach',
    logos: ['ihma'],
    honors: ['Finished with High Honors'],
    activities: [
      'Vice President, Student Coordinating Group (student government), A.Y. 2016–2017',
      'Liturgical Choir', 'Red Cross Youth', 'Girl Scouts of the Philippines', 'Baynews (school paper)', 'Science Club (JESCI)',
    ],
    story: [
      'My foundational life experiences happened here. My work ethic, standards, exploration of the arts (music and art), and foundational knowledge in the core subjects were built and honed in this institution.',
      'I had exceptional teachers here. The opportunities, school culture, learning environment, and structure they gave us shaped largely who I am now, even years after leaving.',
    ],
  },
];

export const job = (id: string) => jobs.find((j) => j.id === id)!;
export const school = (id: string) => schools.find((s) => s.id === id)!;
