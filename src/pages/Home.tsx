export default function Home() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-6 sm:px-10 sm:pt-10">
      <div className="flex items-center gap-5">
        <img
          src="/images/jeanine-jumping-clean.png"
          alt="Jeanine"
          className="w-20 shrink-0 rounded-md sm:w-24"
        />
        <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
          Hello, I&apos;m Jeanine.
        </h1>
      </div>
      <div className="mt-6 space-y-5 text-base leading-relaxed sm:text-lg">
        <p>
          Software engineer is my title, I love grinding through tickets. But
          I&apos;d always rather start by listening to people&apos;s stories
          to build solutions that truly address their needs.
        </p>
        <p>
          That&apos;s why I spent this past year in Cambodia launching the{' '}
          <a
            href="https://www.internationalmentorship.org/"
            target="_blank"
            rel="noreferrer"
            className="text-accent underline decoration-accent-soft underline-offset-2 hover:decoration-accent"
          >
            International Student Mentorship Program
          </a>
          , supporting college students with academic, professional, and
          spiritual mentorship. Before that, I was at Moody&apos;s for almost
          four years as a software engineer.
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
  )
}
