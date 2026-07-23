import type { Project } from './projects'

export type Bullet = {
  text: string
  link?: string
  linkLabel?: string
}

export type Role = {
  company: string
  title: string
  dates: string
  summary?: string
  bullets?: Bullet[]
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
      {
        text: 'Commercial Mortgage Metrics: built a GraphQL API (C#/.NET) so users could persist their own custom coefficients for financial model calculations.',
        link: 'https://www.moodyscre.com/products/cmm/',
        linkLabel: 'product',
      },
      {
        text: 'Banking Solutions: worked on the front page of the banking solutions website (Angular).',
      },
      {
        text: 'Accelerate Farm Profits: contributed to making the app fully mobile-responsive and kept the theming and UI compliant with UX design specifications.',
        link: 'https://afp.moodysanalytics.com/',
        linkLabel: 'product',
      },
      {
        text: 'Balance Sheet Risk Management: most recently, helped build components for a balance sheet risk management application. When the team upgraded to a new major version of Angular, helped preserve the visual design system, keeping Angular-dependent design tokens and styles consistent despite significant changes under the hood.',
        link: 'https://www.moodys.com/web/en/us/solutions/balance-sheet-management/capital-management.html',
        linkLabel: 'product',
      },
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
