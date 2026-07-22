type Role = {
  company: string
  title: string
  dates: string
  summary?: string
  bullets?: string[]
  pending?: boolean
}

const roles: Role[] = [
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

export default function Experience() {
  return (
    <div className="mx-auto max-w-3xl pt-12 sm:pt-20">
      <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
        Experience
      </h1>
      <div className="mt-10 flex flex-col gap-12">
        {roles.map((role) => (
          <div key={role.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-mono text-lg font-medium text-ink">
                {role.title} &middot; {role.company}
              </h2>
              {role.dates && (
                <span className="font-mono text-xs text-ink-faint">
                  {role.dates}
                </span>
              )}
            </div>
            {role.pending ? (
              <p className="mt-2 text-sm italic text-ink-faint">
                Case study coming soon.
              </p>
            ) : (
              <>
                {role.summary && (
                  <p className="mt-3 text-base leading-relaxed">
                    {role.summary}
                  </p>
                )}
                {role.bullets && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
