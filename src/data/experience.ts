export type Role = {
  company: string
  title: string
  dates: string
  summary?: string
  bullets?: string[]
  pending?: boolean
}

export const roles: Role[] = [
  {
    company: "Moody's Analytics",
    title: 'Software Engineer',
    dates: '~4 years',
    pending: true,
  },
  {
    company: 'Marqui Labs',
    title: 'Front-End Developer Intern',
    dates: '',
    summary:
      'Front-end development for a NASA-contracted startup, working across a Vue.js/Nuxt.js stack with a Directus headless CMS.',
    bullets: [
      'Integrated the front-end with Directus during a headless CMS migration, restructuring content architecture to reduce file redundancy (NASA Advanced Air Mobility Portal).',
      'Designed and built a fully mobile-responsive site for the NASA University Leadership Initiative to improve information discoverability.',
    ],
  },
]
