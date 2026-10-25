const contacts = [
  { label: 'Email', href: 'mailto:jtso3388@berkeley.edu' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jeanine-tso' },
  { label: 'GitHub', href: 'https://github.com/jeaninetso' },
]

export default function Home() {
  return (
    <div className="pt-4 sm:pt-16">
      <p className="eyebrow">Software Engineer, Frontend &middot; Muon Space</p>
      <div className="mt-6 flex items-end gap-5 sm:gap-10">
        <h1 className="font-serif text-[clamp(4rem,12vw,8.5rem)] leading-[0.88] tracking-[-0.01em] text-ink">
          Jeanine
          <br />
          <em>Tso Lin</em>
        </h1>
        {/* Colored-pencil portrait, cut out with an uneven, painterly fade at the bottom. */}
        <img
          src="/images/jeanine-portrait.webp"
          alt="Colored pencil portrait of Jeanine"
          width={920}
          height={1052}
          className="w-[clamp(7rem,26vw,15rem)] shrink-0"
        />
      </div>
      <div className="mt-10 h-px w-14 bg-accent" aria-hidden="true" />
      <p className="mt-8 max-w-xl text-lg leading-relaxed sm:text-xl">
        I build interfaces at Muon Space and mentor college students in the Bay
        Area. Off the clock, I illustrate and design.
      </p>
      <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="link-underline"
            >
              {contact.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
