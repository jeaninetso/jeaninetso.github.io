export type ArtworkPiece = {
  title: string
  image: string
  width: number
  height: number
  text: string
  tools: string
  // Slide decks: every slide shown in the modal; `image` is the cover.
  slides?: string[]
}

// Hang order: tuned so desktop justified rows (row target 200px, 860px wall)
// break into four rows within about 25px of the same height, with the deck
// in the first row.
export const artwork: ArtworkPiece[] = [
  {
    title: 'Spring Party at Redwood Gardens',
    image: '/images/a2cn-spring-party.webp',
    width: 1200,
    height: 1800,
    text: 'Flyer inviting UC Berkeley students to serve elderly residents at a spring party.',
    tools: 'Canva',
  },
  {
    title: 'Crazy, Lying, or Legit?',
    image: '/images/crazy-lying-legit.webp',
    width: 1200,
    height: 1800,
    text: "Flyer for a talk on Jesus's claim to be God, styled as a Wordle board that lands on LEGIT. Co-hosted by Christian fellowships at UC Berkeley.",
    tools: 'Canva',
  },
  {
    title: 'Remarks on Gratitude',
    image: '/images/gratitude-slide-01.webp',
    width: 1600,
    height: 900,
    text: "Slides for a talk on gratitude at ISMP Cambodia's American Thanksgiving Festival in Phnom Penh. I designed the layout and typography; photos are stock.",
    tools: 'Canva',
    slides: ['01', '06', '08', '17', '21', '24'].map(
      (n) => `/images/gratitude-slide-${n}.webp`,
    ),
  },
  {
    title: 'Truth Journey',
    image: '/images/truth-journey.webp',
    width: 1200,
    height: 1800,
    text: 'Flyer for an apologetics talk at UC Berkeley, hosted by Klesis.',
    tools: 'Canva',
  },
  {
    title: 'Why is There So Much Violence in the Bible?',
    image: '/images/violence-in-the-bible.webp',
    width: 1200,
    height: 1800,
    text: 'Typographic flyer for an apologetics talk at UC Berkeley.',
    tools: 'Canva',
  },
  {
    title: "Julian's Room",
    image: '/images/for-julian.webp',
    width: 1600,
    height: 1000,
    text: 'Drew my brother\'s bedroom as a Christmas present. Colors inspired by the music video for Penomeco\'s "Coco Bottle," animated by Studio Pivote.',
    tools: 'Adobe Illustrator',
  },
  {
    title: 'Eagle Academy Christmas Party (Cambodia)',
    image: '/images/eagle-academy-christmas-party.webp',
    width: 1600,
    height: 1127,
    text: 'Flyer designed for a Christmas party during my year mentoring students in Cambodia.',
    tools: 'Canva',
  },
  {
    title: 'First-Gen Mentorship Introduction',
    image: '/images/first-gen-mentorship-intro.webp',
    width: 1600,
    height: 900,
    text: 'Flyer introducing a first-generation student mentorship initiative with Acts 2 Campus Network.',
    tools: 'Canva',
  },
  {
    title: 'KingPin Donuts',
    image: '/images/all-donuts.webp',
    width: 1600,
    height: 786,
    text: 'Illustrated a variety of donut flavors for the menu of a website redesign (see Projects). Flavor varieties are from KingPin Donuts.',
    tools: 'Adobe Illustrator',
  },
  {
    title: 'UC Berkeley Welcome Week',
    image: '/images/uc-berkeley-welcome-week.webp',
    width: 1600,
    height: 1385,
    text: 'Flyers designed for UC Berkeley Welcome Week events.',
    tools: 'Canva',
  },
  {
    title: 'The Tso Family',
    image: '/images/tso-family.webp',
    width: 1600,
    height: 900,
    text: 'LEGO versions of my family members, gifted to my dad for his birthday.',
    tools: 'Adobe Illustrator',
  },
  {
    title: 'Observe My Ways',
    image: '/images/proverbs.webp',
    width: 1600,
    height: 1600,
    text: 'Inspired by Proverbs 23:26, "My son, give me your heart, and let your eyes observe my ways." Intended to portray the closeness of scrutiny that humans need to have of their own lives if they are to call themselves examples for others.',
    tools: 'Adobe Illustrator',
  },
]
