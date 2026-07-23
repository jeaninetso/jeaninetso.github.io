import type { Project } from './projects'

export type Role = {
  company: string
  title: string
  dates: string
  summary?: string
  bullets?: string[]
  projects?: Project[]
  draft?: boolean
}

export const roles: Role[] = [
  {
    company: "Moody's",
    title: 'Software Engineer',
    dates: '~4 years',
    draft: true,
    summary:
      'Worked across several teams over four years, spanning back-end financial modeling APIs and front-end product work.',
    bullets: [
      'Commercial Mortgage Metrics: built a GraphQL API (C#/.NET) so users could persist their own custom coefficients for financial model calculations.',
      'Banking Solutions: worked on the front page of the banking solutions website (Angular).',
      'Accelerate Farm Profits: helped build a fully mobile-responsive web application for farmers (Angular), a public Moody\'s product.',
      'Balance Sheet Risk Management: most recently, helped build components for a balance sheet risk management application.',
    ],
  },
  {
    company: 'Marqui Labs',
    title: 'Front-End Developer Intern',
    dates: '2023',
    summary:
      'Front-end development for a NASA-contracted startup, working across a Vue.js/Nuxt.js stack with a Directus headless CMS.',
    projects: [
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
    ],
  },
]
