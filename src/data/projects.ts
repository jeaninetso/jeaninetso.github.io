export type Project = {
  title: string
  image?: string
  blurb: string
  tags?: string[]
  link?: string
  status?: string
}

export const personalProjects: Project[] = [
  // Hidden until a screenshot is ready -- re-add when asked.
  // {
  //   title: 'Task Scheduler',
  //   blurb:
  //     'A dependency-aware task scheduler built to practice DSA concepts like topological sort and heaps, alongside React and TypeScript.',
  //   tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vitest'],
  //   link: 'https://github.com/jeaninetso/task-scheduler',
  //   status: 'in progress',
  // },
  {
    title: 'Telegram Contact Bridge',
    image: '/images/telegram-contact-bridge.png',
    blurb:
      'A Chrome extension that bridges contact info from Google Maps listings into Telegram.',
    tags: ['Chrome Extension', 'JavaScript', 'Node.js'],
  },
  {
    title: 'Grocery Demand Forecast',
    image: '/images/grocery-demand-forecast.png',
    blurb:
      'A full-stack app that forecasts near-term grocery demand from historical sales data, built to demonstrate product work around an ML forecast (data pipeline, API, and a picker + chart UI) for a job application.',
    tags: ['FastAPI', 'PostgreSQL', 'Prophet', 'React', 'TypeScript'],
    status: 'in progress',
  },
  {
    title: 'Scripture Quest',
    image: '/images/scripture-quest.png',
    blurb:
      'A gamified Bible-knowledge hub: pick a book, take a quiz generated fresh each time and grounded in the ESV, learn fun facts, and track streaks, XP, and badges.',
    tags: ['React', 'TypeScript', 'Zod', 'Vitest'],
    link: 'https://github.com/jeaninetso/bible-quiz-app',
    status: 'in progress',
  },
  {
    title: 'Welcome To Omelas',
    image: '/images/omelas.png',
    blurb:
      'Prototyped a website using Adobe Illustrator and CSS/JS animations to portray moral choice in a philosophical short story.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Adobe Illustrator'],
    link: 'https://jeaninet.github.io',
  },
  {
    title: 'KingPin Donuts',
    image: '/images/kingpin.png',
    blurb:
      'Redesigned a bakery website with an aesthetic, user-friendly menu layout, illustrating menu items in Adobe Illustrator.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Adobe Illustrator'],
    link: 'https://github.com/jeaninetso/kingpin-donuts',
  },
  {
    title: 'Build Your Own World',
    image: '/images/byow.png',
    blurb:
      'Implemented a 2-D tile-based world exploration engine in Java to build a Pacman-like game, with added rules for gameplay.',
    tags: ['Java'],
    link: 'https://www.youtube.com/watch?v=i97rGJl2mBM',
  },
]
