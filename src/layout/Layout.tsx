import { useEffect } from 'react'
import Nav from './Nav'
import useActiveSection from './useActiveSection'
import Home from '../pages/Home'
import About from '../pages/About'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Artwork from '../pages/Artwork'
import Resume from '../pages/Resume'

const ANCHOR = 'scroll-mt-[128px] sm:scroll-mt-10'
const SECTION = 'mt-28 sm:mt-36'

export default function Layout() {
  const active = useActiveSection()
  const gallery = active === 'artwork'

  // Art & Design is hung in a dark gallery room; index.css fades the palette.
  useEffect(() => {
    document.documentElement.toggleAttribute('data-gallery', gallery)
  }, [gallery])

  return (
    <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 sm:grid-cols-[180px_1fr]">
      <aside className="sticky top-0 z-10 border-b border-line bg-paper/95 px-4 py-4 backdrop-blur-sm sm:h-screen sm:self-start sm:border-b-0 sm:border-r sm:bg-paper sm:px-6 sm:py-12">
        <a
          href="#home"
          className="font-serif text-2xl leading-none text-ink sm:text-[1.7rem]"
        >
          Jeanine <em className="sm:block">Tso Lin</em>
        </a>
        <div className="mt-3 sm:mt-12">
          <Nav active={active} />
        </div>
      </aside>
      <main className="min-w-0 px-4 pb-20 pt-10 sm:px-14 sm:pt-12">
        <div id="home" className={ANCHOR}>
          <Home />
        </div>
        <section id="about" className={`${SECTION} ${ANCHOR}`}>
          <About />
        </section>
        <section id="experience" className={`${SECTION} ${ANCHOR}`}>
          <Experience />
        </section>
        <section id="projects" className={`${SECTION} ${ANCHOR}`}>
          <Projects />
        </section>
        <section id="artwork" className={`${SECTION} ${ANCHOR}`}>
          <Artwork />
        </section>
        <section id="resume" className={`${SECTION} ${ANCHOR}`}>
          <Resume />
        </section>
        <footer className="mt-28 border-t border-line pt-6 font-serif text-lg italic text-ink-faint">
          Designed and built by Jeanine Tso Lin.
        </footer>
      </main>
    </div>
  )
}
