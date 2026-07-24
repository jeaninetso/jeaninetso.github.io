export type Project = {
  title: string
  image?: string
  blurb: string
  link?: string
  status?: string
}

export const personalProjects: Project[] = [
  {
    title: 'Welcome To Omelas',
    image: '/images/omelas.png',
    blurb:
      'Prototyped a website using Adobe Illustrator and CSS/JS animations to portray moral choice in a philosophical short story.',
    link: 'https://jeaninet.github.io',
  },
  {
    title: 'KingPin Donuts',
    image: '/images/kingpin.png',
    blurb:
      'Redesigned a bakery website with an aesthetic, user-friendly menu layout, illustrating menu items in Adobe Illustrator.',
    link: 'https://github.com/jeaninetso/kingpin-donuts',
  },
  {
    title: 'Build Your Own World',
    image: '/images/byow.png',
    blurb:
      'Implemented a 2-D tile-based world exploration engine in Java to build a Pacman-like game, with added rules for gameplay.',
    link: 'https://www.youtube.com/watch?v=i97rGJl2mBM',
  },
  {
    title: 'Grocery Tracker',
    blurb: 'Tracking grocery purchases and spending over time.',
    status: 'in progress',
  },
  {
    title: 'Job App Tracker',
    blurb: 'Tracking job applications and their status through the search process.',
    status: 'in progress',
  },
  {
    title: 'Maps-to-Telegram Contact Bridge',
    blurb:
      'A Chrome extension that bridges contact info from Google Maps listings into Telegram.',
    status: 'in progress',
  },
  {
    title: 'Bible Quiz App',
    blurb: 'A quiz app for testing and building familiarity with Bible knowledge.',
    status: 'in progress',
  },
  {
    title: 'Task Scheduler',
    blurb:
      'A dependency-aware task scheduler built to practice DSA concepts like topological sort and heaps, alongside React and TypeScript.',
    link: 'https://github.com/jeaninetso/task-scheduler',
    status: 'in progress',
  },
]
