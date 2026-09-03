/**
 * Single source of truth for the one-page site.
 *
 * Identity, contact details, positioning and voice are inherited from the
 * multi-page site's `src/data/site-config.ts` so the two read as one brand.
 * Nothing here is invented: there are no testimonials, no client logos, no
 * performance statistics and no awards, because none have been verified.
 * Do not add any without a real, client-approved source.
 */

export const brand = {
  name: 'Ella Siew',
  /**
   * Ella's full legal/professional name. Used wherever identity needs to be
   * unambiguous to search engines (SEO metadata, structured data, the About
   * section and footer legal line) — `name` above stays the short trading
   * name shown everywhere else on the page (nav, logo alt, footer sub-line).
   */
  fullName: 'Ella Siew Wen Pei',
  /** The official line from the brand identity sheet, under the ES monogram. */
  role: 'AI Visibility Strategist',
  /** Fuller descriptor, used where the services need spelling out. */
  roleLong: 'Personal Branding & AI Visibility Strategist',
  url: 'https://www.itsellasiew.com',
  email: 'hello@consultproservices.com',
  phone: '+852 9797 0968',
  phoneHref: 'tel:+85297970968',
  linkedin: 'https://www.linkedin.com/in/ella-siew-wen-pei-6ba854b1/',

  /** The Hong Kong-registered company Ella operates her practice through. */
  company: {
    name: 'Consultpro Services Limited',
    url: 'https://www.consultproservices.com/',
  },

  address: {
    city: 'Hong Kong',
    region: 'Hong Kong',
    country: 'HK',
  },

  /**
   * Every "Book a call" control on the page points here: an in-page anchor
   * to the Booking section's Cal.com inline embed (see booking.calLink
   * below for the actual scheduling link). Plain anchor rather than a JS
   * click handler, so it degrades to a normal same-page jump if anything
   * else on the page fails to load.
   */
  bookingHref: '#booking',
  bookingLabel: 'Book a call',

  /** Section 10 — inline booking calendar. */
  booking: {
    id: 'booking',
    eyebrow: 'Book a call',
    heading: 'Find a time that works',
    lead: 'Pick a slot below and it is booked immediately, no back-and-forth email required.',
    /** Cal.com scheduling link — confirmed, unchanged from the previous popup embed. */
    calLink: 'consultpro/booking',
    calNamespace: 'booking',
    calConfig: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
  },

  /** Required alt text for the portrait, specified by the brief. */
  portraitAlt: 'Ella Siew Wen Pei, AI SEO and GEO strategist',

  seo: {
    title: 'Ella Siew Wen Pei | Personal Branding & AI Visibility',
    description:
      'Ella Siew Wen Pei is a Personal Branding and AI Visibility Strategist helping B2B founders and executives build authority, become discoverable and create qualified business opportunities.',
    ogImageAlt: 'Ella Siew Wen Pei, AI SEO and GEO strategist, Hong Kong',
  },

  hero: {
    // Matches `role` above by design — kept as a literal rather than a
    // reference since object literals can't refer to sibling properties
    // during their own construction.
    eyebrow: 'Personal Branding & AI Visibility Strategist',
    /** The page's single H1. */
    h1: 'Be the name AI keeps recommending.',
    lede: 'I help founders and B2B teams get found on Google and cited by AI search, then turn that visibility into a LinkedIn presence people actually trust.',
  },

  /** Section 3 — authority introduction. */
  authority: {
    id: 'approach',
    heading: 'Why does visibility work differently now?',
    lead: 'Because your buyers stopped scrolling and started asking.',
    body: [
      'A founder used to be discovered through ten blue links. Today the same question gets asked inside ChatGPT, Gemini, Perplexity, or Google AI Overviews, and the answer arrives already summarised, already sourced, already deciding who is credible.',
      'That changes the job. Ranking a page is no longer enough if the model never surfaces you, and posting consistently is no longer enough if nothing you publish is structured for a machine to quote. The work is making your expertise legible to both at once.',
    ],
    pull: 'Most people are optimising for how search worked five years ago.',
  },

  /** Section 4 — the two services. */
  services: {
    id: 'services',
    heading: 'What do I actually do?',
    lead: 'Two disciplines, run as one strategy rather than two contractors who never compare notes.',
    items: [
      {
        n: '01',
        key: 'Search & AI visibility',
        icon: 'search',
        title: 'AI SEO and Generative Engine Optimisation',
        body: 'Technical and content SEO that earns durable Google rankings, paired with GEO: structuring your expertise, entities and citations so AI answer engines can understand you, quote you, and recommend you by name.',
        points: [
          'Search and AI visibility audit',
          'Entity, schema and citation groundwork',
          'Content built to be quoted, not just ranked',
        ],
      },
      {
        n: '02',
        key: 'Founder presence',
        icon: 'badge-check',
        title: 'LinkedIn personal branding',
        body: 'Positioning, narrative and a publishing rhythm that reads as authority instead of noise. Built from your actual point of view and experience, so it compounds into the reputation buyers check before they ever contact you.',
        points: [
          'Positioning and profile rebuild',
          'Content pillars and a sustainable cadence',
          'Thought leadership that feeds your search visibility',
        ],
      },
    ],
  },

  /** Section 5 — audience. */
  audience: {
    id: 'who',
    heading: 'Who is this for?',
    lead: 'People whose credibility is already real, and whose visibility has not caught up with it.',
    items: [
      {
        title: 'Founders',
        body: 'Building a company where your own name is a meaningful part of why people buy.',
      },
      {
        title: 'Executives',
        body: 'Established in a role, largely invisible outside the rooms you are already in.',
      },
      {
        title: 'Professionals',
        body: 'Consultants, advisors and specialists who are hired on trust and want that trust findable.',
      },
      {
        title: 'B2B service businesses',
        body: 'Small teams with genuine expertise, competing against louder companies that outspend them.',
      },
    ],
    note: 'Most clients work remotely, across Singapore, Australia, the UK and the US. Every engagement is with Ella directly.',
  },

  /**
   * Full-bleed image band between the audience and process sections, used to
   * break up a long run of text. One line of copy, no heading: it is a beat,
   * not a section.
   */
  plate: {
    line: 'Based in Hong Kong. Visible wherever your buyers are looking.',
    alt: 'Hong Kong harbour at night, seen through a high-rise window, overlaid with a faint network of connected light points',
  },

  /**
   * A second, distinct photograph of Ella for the About section. The hero
   * portrait is deliberately not reused here: one image, one place.
   */
  aboutPortraitAlt:
    'Ella Siew Wen Pei speaking at a seminar, holding a microphone in front of an audience',

  insightsBandAlt: 'A cream notebook and a brass pen on a wooden desk in warm light',

  /** Section 6 — process. */
  process: {
    id: 'process',
    heading: 'How does working together actually go?',
    lead: 'Four stages, no handoff to a junior, no templated deliverable.',
    steps: [
      {
        n: 'One',
        icon: 'message',
        title: 'A call, first',
        body: 'We talk about where you are, who you need to reach, and what is genuinely getting in the way. You leave with clear next steps whether or not we work together after that.',
      },
      {
        n: 'Two',
        icon: 'file-search',
        title: 'Audit what exists',
        body: 'How you currently appear across Google and AI platforms, what they get wrong about you, and where the gaps are. Evidence before opinions.',
      },
      {
        n: 'Three',
        icon: 'target',
        title: 'Build the strategy',
        body: 'One connected plan across search, AI visibility and LinkedIn, built from your real expertise and scoped to how your team actually works.',
      },
      {
        n: 'Four',
        icon: 'trending-up',
        title: 'Apply and adjust',
        body: 'Consistent execution with clear reporting on what is moving and what needs changing. Authority compounds; it does not arrive in a fortnight.',
      },
    ],
  },

  /** Section 7 — about. */
  about: {
    id: 'about',
    heading: 'About Ella Siew Wen Pei',
    lead: 'An independent strategist based in Hong Kong, working with clients worldwide.',
    body: [
      "I'm Ella Siew Wen Pei, also known professionally as Ella Siew, and I work at the intersection of three things that are usually handled separately: search engine optimisation, AI visibility, and personal brand. Handled separately they tend to contradict each other. Handled together they reinforce each other, and that is the whole advantage.",
      'Every engagement is built from your genuine knowledge and point of view. Nothing is mass-produced, and no ethical strategist can promise you a specific ranking or an AI mention. What I can promise is a structured, evidence-based strategy, applied consistently, with honest reporting on what is working.',
    ],
    // The trailing "Company" row is appended in About.astro from
    // brand.company, rather than duplicated here as a literal string.
    facts: [
      { k: 'Based in', v: 'Hong Kong' },
      { k: 'Working with', v: 'Clients worldwide' },
      { k: 'Focus', v: 'AI SEO, GEO, LinkedIn' },
    ],
  },

  /**
   * Section 8 — featured insights.
   *
   * These are the subjects Ella writes about. Deliberately NOT presented as
   * published articles with titles/dates, because inventing article metadata
   * would be fabrication — and deliberately NOT linked anywhere either, for
   * the same reason: no confirmed post URLs exist yet, and linking every card
   * (or a single CTA) to the LinkedIn homepage implied these were specific,
   * findable posts, which was misleading.
   *
   * To activate real links once Ella supplies permalinks: add an `href` to
   * the item(s) that have one, then in Insights.astro wrap that card's
   * content in `<a href={item.href}>` — same conditional-link pattern
   * About.astro already uses for the Company fact row. Cards without an
   * `href` stay plain. Once every item has one, `comingSoonLabel` can be
   * swapped back for a real CTA (see the `.ins-cta` rule in site.css, kept
   * in place unused for exactly this).
   */
  insights: {
    id: 'insights',
    heading: 'Where can you read my thinking?',
    lead: 'I publish on LinkedIn, mostly about the subjects below.',
    items: [
      {
        k: 'AI search',
        icon: 'search',
        title: 'What GEO actually changes',
        body: 'Why being cited by an answer engine is a different problem from ranking, and what has to be true of your content for a model to quote you.',
      },
      {
        k: 'Personal brand',
        icon: 'badge-check',
        title: 'Authority over vanity metrics',
        body: 'Why impressions and follower counts rarely convert, and what the people who hire, fund or partner with you are actually checking.',
      },
      {
        k: 'Practice',
        icon: 'network',
        title: 'One strategy, not three',
        body: 'What breaks when SEO, content and personal brand are run by specialists who never speak to each other.',
      },
    ],
    comingSoonLabel: 'Individual post links coming soon',
  },

  /** Section 9 — closing CTA. */
  cta: {
    id: 'contact',
    eyebrow: 'Consultations are held online, across time zones',
    heading: 'Ready to be found?',
    body: 'Tell me briefly what you are working on and where you want to be visible. If I am not the right fit, I will say so.',
  },

  footerBlurb:
    'Helping founders and B2B teams build authority and visibility across Google and AI-powered search. From Hong Kong, for the world.',
} as const;

export type Brand = typeof brand;
