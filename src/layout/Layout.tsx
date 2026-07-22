import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-6 sm:px-12 sm:py-10">
        <Nav />
      </header>
      <main className="flex-1 px-6 pb-16 sm:px-12">
        <Outlet />
      </main>
      <footer className="px-6 py-8 text-center text-xs text-ink-faint sm:px-12">
        Designed and built by Jeanine Tso.
      </footer>
    </div>
  )
}
