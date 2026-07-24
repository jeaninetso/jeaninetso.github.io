export default function Resume() {
  return (
    <div className="pt-2">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-mono text-3xl font-medium text-ink sm:text-4xl">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 font-mono text-sm text-ink-soft transition-colors hover:border-accent hover:text-accent"
        >
          View as PDF &#8599;
        </a>
      </div>
      <div className="mt-8 overflow-hidden rounded-md border border-line">
        <img
          src="/images/resume-page-1.png"
          alt="Jeanine Tso's resume"
          className="w-full"
        />
      </div>
    </div>
  )
}
