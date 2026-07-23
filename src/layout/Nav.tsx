import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'home', end: true },
  { to: '/experience', label: 'experience' },
  { to: '/projects', label: 'projects' },
  { to: '/artwork', label: 'artwork' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-ink font-medium'
    : 'text-ink-faint hover:text-accent transition-colors'

export default function Nav() {
  return (
    <nav className="flex flex-row flex-wrap gap-x-6 gap-y-2 font-mono text-sm tracking-wide sm:flex-col sm:gap-y-4">
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
          {({ isActive }) => (
            <>
              {isActive && <span className="text-accent">{'> '}</span>}
              {link.label}
            </>
          )}
        </NavLink>
      ))}
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
