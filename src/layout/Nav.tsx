const links = [
  { id: 'home', label: 'home' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'artwork', label: 'artwork' },
]

function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement>,
  id: string,
) {
  const target = document.getElementById(id)
  if (!target) return
  event.preventDefault()
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}

export default function Nav({ active }: { active: string }) {
  return (
    <nav className="flex flex-row flex-wrap gap-x-6 gap-y-2 font-mono text-sm tracking-wide sm:flex-col sm:gap-y-4">
      {links.map((link) => {
        const isActive = active === link.id
        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(event) => scrollToSection(event, link.id)}
            className={
              isActive
                ? 'text-ink font-medium'
                : 'text-ink-faint hover:text-accent transition-colors'
            }
          >
            {isActive && <span className="text-accent">{'> '}</span>}
            {link.label}
          </a>
        )
      })}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="text-ink-faint hover:text-accent transition-colors"
      >
        resume
      </a>
    </nav>
  )
}
