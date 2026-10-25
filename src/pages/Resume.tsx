import Frame from '../components/Frame'
import SectionHeading from '../components/SectionHeading'

export default function Resume() {
  return (
    <div>
      <SectionHeading
        numeral="V"
        title="Résumé"
        aside={
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm"
          >
            View as PDF &#8599;
          </a>
        }
      />
      <Frame
        src="/images/resume-page-1.webp"
        alt="Jeanine Tso Lin's résumé"
        width={1836}
        height={2376}
        className="mx-auto mt-12 max-w-2xl"
      />
    </div>
  )
}
