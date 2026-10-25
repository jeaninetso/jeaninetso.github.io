const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'artwork', label: 'Art & Design' },
  { id: 'resume', label: 'Résumé' },
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
    <nav className="flex flex-row flex-wrap gap-x-5 gap-y-1 sm:flex-col sm:gap-y-3">
      {links.map((link) => {
        const isActive = active === link.id
        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(event) => scrollToSection(event, link.id)}
            aria-current={isActive ? 'location' : undefined}
            className={`group flex items-center gap-2 text-sm transition-colors duration-300 ease-out sm:text-[0.95rem] ${
              isActive ? 'text-ink' : 'text-ink-faint hover:text-accent'
            }`}
          >
            <span
              aria-hidden="true"
              className={`hidden h-px bg-accent transition-all duration-300 ease-out sm:inline-block ${
                isActive ? 'w-4' : 'w-0'
              }`}
            />
            <span className={isActive ? 'font-serif text-base italic sm:text-lg' : ''}>
              {link.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
