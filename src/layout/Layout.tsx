import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <div className="mx-auto grid min-h-screen max-w-5xl grid-cols-1 sm:grid-cols-[168px_1fr]">
      <aside className="border-b border-line px-6 py-6 sm:border-b-0 sm:border-r sm:px-5 sm:py-10">
        <div className="mb-0 font-mono text-[11px] tracking-wide text-ink-faint sm:mb-7">
          JT&nbsp;PORTFOLIO
        </div>
        <div className="mt-4 sm:mt-0">
          <Nav />
        </div>
      </aside>
      <main className="px-6 pb-16 pt-8 sm:px-14 sm:pt-10">
        <Outlet />
        <footer className="mt-16 text-xs text-ink-faint">
          Designed and built by Jeanine Tso.
        </footer>
      </main>
    </div>
  )
}
