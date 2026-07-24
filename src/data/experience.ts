export type Card = {
  title: string
  text: string
  link?: string
  linkLabel?: string
}

export type Role = {
  company: string
  title: string
  dates: string
  logo?: string
  summary?: string
  cards?: Card[]
}

export const roles: Role[] = [
  {
    company: "Moody's",
    title: 'Software Engineer',
    dates: '2021–2025',
    logo: '/images/moodys-logo.png',
    summary:
      'Worked across several teams over four years, spanning back-end financial modeling APIs and front-end product work.',
    cards: [
      {
        title: 'Commercial Mortgage Metrics',
        text: 'Built a GraphQL API (C#/.NET) so users could persist their own custom coefficients for financial model calculations.',
        link: 'https://www.moodyscre.com/products/cmm/',
        linkLabel: 'product',
      },
      {
        title: 'Banking Solutions',
        text: 'Worked on the front page of the banking solutions website (Angular).',
      },
      {
        title: 'Accelerate Farm Profits',
        text: 'Contributed to making the app fully mobile-responsive and kept the theming and UI compliant with UX design specifications.',
        link: 'https://afp.moodysanalytics.com/',
        linkLabel: 'product',
      },
      {
        title: 'Balance Sheet Risk Management',
        text: 'Most recently, helped build components for a balance sheet risk management application. When the team upgraded to a new major version of Angular, helped preserve the visual design system, keeping Angular-dependent design tokens and styles consistent despite significant changes under the hood.',
        link: 'https://www.moodys.com/web/en/us/solutions/balance-sheet-management/capital-management.html',
        linkLabel: 'product',
      },
    ],
  },
  {
    company: 'Marqui Labs',
    title: 'Front-End Developer Intern',
    dates: '2023',
    logo: '/images/marqui-labs-logo.png',
    summary:
      'Front-end development for a NASA-contracted startup, working across a Vue.js/Nuxt.js stack with a Directus headless CMS.',
    cards: [
      {
        title: 'NASA Advanced Air Mobility Portal',
        text: 'Integrated a front-end with a headless CMS (Directus) during a Nuxt.js migration, and helped build a content architecture that reduced file redundancies.',
      },
      {
        title: 'NASA University Leadership Initiative',
        text: 'Designed and implemented a fully mobile-responsive site to improve user experience finding program information.',
        link: 'https://uli-v4.netlify.app/',
        linkLabel: 'site',
      },
    ],
  },
]
