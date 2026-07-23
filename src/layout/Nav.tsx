const links = [
  { id: 'home', label: 'home' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'artwork', label: 'artwork' },
  { id: 'resume', label: 'resume' },
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
            className={`flex items-center transition-colors duration-300 ease-out ${
              isActive
                ? 'text-ink'
                : 'text-ink-faint hover:text-accent'
            }`}
          >
            <span
              className="inline-block w-3 text-accent transition-opacity duration-300 ease-out"
              style={{ opacity: isActive ? 1 : 0 }}
              aria-hidden="true"
            >
              {'>'}
            </span>
            {link.label}
          </a>
        )
      })}
    </nav>
  )
}
