export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-10 pt-12 sm:pt-20 md:flex-row md:items-start md:gap-16">
      <img
        src="/images/jeanine-jumping.png"
        alt="Jeanine"
        className="w-48 shrink-0 sm:w-56 md:w-64"
      />
      <div className="max-w-xl">
        <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
          Hello, I&apos;m Jeanine.
        </h1>
        <div className="mt-6 space-y-5 text-base leading-relaxed sm:text-lg">
          <p>
            I&apos;m a software engineer with four years of experience, most
            recently front-end leaning, Angular day-to-day, with React and
            Vue/Nuxt from past roles. I like starting from people&apos;s
            actual problems rather than the tech first.
          </p>
          <p>
            I spent this past year in Cambodia launching the{' '}
            <a
              href="https://www.internationalmentorship.org/"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline decoration-accent-soft underline-offset-2 hover:decoration-accent"
            >
              International Student Mentorship Program
            </a>
            , supporting college students with academic, professional, and
            spiritual mentorship. Before that, I was at Moody&apos;s Analytics
            for almost four years as a software engineer.
          </p>
          <p>
            I&apos;m looking for my next software engineering role.
            I&apos;d love to talk. Reach me via{' '}
            <a
              href="mailto:jtso3388@berkeley.edu"
              className="text-accent underline decoration-accent-soft underline-offset-2 hover:decoration-accent"
            >
              email
            </a>{' '}
            or{' '}
            <a
              href="https://linkedin.com/in/jeanine-tso"
              target="_blank"
              rel="noreferrer"
              className="text-accent underline decoration-accent-soft underline-offset-2 hover:decoration-accent"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
