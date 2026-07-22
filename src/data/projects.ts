export type Project = {
  title: string
  image: string
  blurb: string
  link?: string
}

export const professionalProjects: Project[] = [
  {
    title: 'NASA Advanced Air Mobility Portal',
    image: '/images/aam.png',
    blurb:
      'Integrated a front-end with a headless CMS (Directus) during a Nuxt.js migration, and helped build a content architecture that reduced file redundancies.',
  },
  {
    title: 'NASA University Leadership Initiative',
    image: '/images/uli.png',
    blurb:
      'Designed and implemented a fully mobile-responsive site to improve user experience finding program information.',
    link: 'https://uli-v4.netlify.app/',
  },
]

export const learningProjects: Project[] = [
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
    link: 'https://www.behance.net/gallery/91172855/King-Pin-Donuts',
  },
  {
    title: 'Build Your Own World',
    image: '/images/byow.png',
    blurb:
      'Implemented a 2-D tile-based world exploration engine in Java to build a Pacman-like game, with added rules for gameplay.',
    link: 'https://www.youtube.com/watch?v=i97rGJl2mBM',
  },
]
