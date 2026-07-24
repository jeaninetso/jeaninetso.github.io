import Nav from './Nav'
import useActiveSection from './useActiveSection'
import Home from '../pages/Home'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Artwork from '../pages/Artwork'
import Resume from '../pages/Resume'

const ANCHOR = 'scroll-mt-[140px] sm:scroll-mt-8'

export default function Layout() {
  const active = useActiveSection()

  return (
    <div className="mx-auto grid min-h-screen max-w-5xl grid-cols-1 sm:grid-cols-[168px_1fr]">
      <aside className="sticky top-0 z-10 border-b border-line bg-paper px-6 py-6 sm:h-screen sm:self-start sm:border-b-0 sm:border-r sm:px-5 sm:py-10">
        <div className="font-mono text-[11px] tracking-wide text-ink-faint sm:mb-7">
          JT&nbsp;PORTFOLIO
        </div>
        <div className="mt-4 sm:mt-0">
          <Nav active={active} />
        </div>
      </aside>
      <main className="min-w-0 px-6 pb-16 pt-8 sm:px-14 sm:pt-10">
        <div id="home" className={ANCHOR}>
          <Home />
        </div>
        <section className="mt-24 border-t border-line pt-16">
          <div id="experience" className={ANCHOR}>
            <Experience />
          </div>
        </section>
        <section className="mt-24 border-t border-line pt-16">
          <div id="projects" className={ANCHOR}>
            <Projects />
          </div>
        </section>
        <section className="mt-24 border-t border-line pt-16">
          <div id="artwork" className={ANCHOR}>
            <Artwork />
          </div>
        </section>
        <section className="mt-24 border-t border-line pt-16">
          <div id="resume" className={ANCHOR}>
            <Resume />
          </div>
        </section>
        <footer className="mt-16 text-xs text-ink-faint">
          Designed and built by Jeanine Tso.
        </footer>
      </main>
    </div>
  )
}
