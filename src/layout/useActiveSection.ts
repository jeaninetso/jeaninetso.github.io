import { useEffect, useState } from 'react'

const SECTION_IDS = ['home', 'experience', 'projects', 'artwork']

export default function useActiveSection() {
  const [active, setActive] = useState(SECTION_IDS[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return active
}
