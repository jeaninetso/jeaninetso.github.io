import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'home', end: true },
  { to: '/projects', label: 'projects' },
  { to: '/artwork', label: 'artwork' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-ink border-b border-accent pb-1'
    : 'text-ink-faint hover:text-accent pb-1 transition-colors'

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-sm tracking-wide">
      {links.map((link) => (
        <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
          {link.label}
        </NavLink>
      ))}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="text-ink-faint hover:text-accent pb-1 transition-colors"
      >
        resume
      </a>
    </nav>
  )
}
