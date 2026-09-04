/**
 * ============================================================================
 *  WILDCAT WASHERS — CENTRAL FACT BANK
 * ============================================================================
 *  This file is the SINGLE SOURCE OF TRUTH for every factual claim on the site.
 *  Every page, template and schema block reads from here.
 *
 *  RULES
 *  1. If a fact is not in this file, it does not go on the website.
 *  2. Change a number here and it changes everywhere — never hard-code counts,
 *     guarantee lengths, phone numbers or service names into a page.
 *  3. Anything marked `TODO` is unverified and must be confirmed by Wildcat
 *     before it ships. Do not invent replacements.
 * ============================================================================
 */

/* ---------------------------------------------------------------- company */

export const company = {
  name: 'Wildcat Washers',
  legalName: 'Wildcat Washers',
  tagline: 'We Have a Spotless Reputation!',
  shortDescription:
    'Professional window cleaning, solar panel cleaning and pressure washing across Greater Tucson.',
  founders: ['Jose Manriquez', 'Cooper Cleveland'],
  phone: '(520) 450-9500',
  phoneRaw: '+15204509500',
  phoneDigits: '5204509500',
  email: 'services@wildcatwashers.com',
  url: 'https://www.wildcatwashers.com',
  city: 'Tucson',
  state: 'AZ',
  stateName: 'Arizona',
  region: 'Greater Tucson',
  county: 'Pima County',
  geo: { lat: 32.2226, lng: -110.9747 },
  /** Radius of the service area used in LocalBusiness schema, in metres. */
  serviceRadiusM: 64000,
  licensed: true,
  insured: true,
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:00', close: '18:00' },
    { days: ['Saturday'], open: '08:00', close: '16:00' },
  ],
  hoursHuman: 'Mon–Fri 7am–6pm · Sat 8am–4pm',
  social: {
    // TODO(wildcat): confirm live profile URLs before launch.
    facebook: 'https://www.facebook.com/wildcatwashers',
    nextdoor: '',
    google: '',
    instagram: '',
  },
} as const;

/* --------------------------------------------------------------- proof */

export const proof = {
  /** Customers served to date. Source: Wildcat brief. */
  customersServed: 1000,
  customersServedLabel: '1,000+',
  /** Verified: not a single public review below five stars. */
  rating: 5.0,
  ratingClaim: 'Not a single customer review below 5 stars',
  yearsServing: null as number | null, // TODO(wildcat): confirm founding year.
} as const;

export const awards = [
  {
    id: 'az19-2025',
    name: 'Best Window Cleaner, 2025',
    issuer: 'AZ-19 Readers’ Picks — Green Valley News & Sahuarita Sun',
    short: 'AZ-19 Readers’ Pick',
    year: 2025,
    /** Real photo of the award being received — stronger than a badge graphic. */
    photo: 'award-az19-winner-2025',
    badge: null,
  },
  {
    id: 'nextdoor-fave-2025',
    name: 'Neighborhood Fave, 2025',
    issuer: 'Nextdoor',
    short: 'Nextdoor Neighborhood Fave',
    year: 2025,
    photo: null,
    // TODO(wildcat): drop the official badge file at public/brand/badge-nextdoor-fave.png
    badge: null,
  },
  {
    id: 'bbb',
    name: 'Accredited Business',
    issuer: 'Better Business Bureau',
    short: 'BBB Accredited',
    year: null,
    photo: null,
    badge: '/brand/badge-bbb.png',
  },
  {
    id: 'angi-2025',
    name: 'Super Service Award, 2025',
    issuer: 'Angi',
    short: 'Angi Super Service Award',
    year: 2025,
    photo: null,
    badge: '/brand/badge-angi-super-service-2025.svg',
  },
  {
    id: 'thumbtack-top-pro',
    name: 'Top Pro',
    issuer: 'Thumbtack',
    short: 'Thumbtack Top Pro',
    year: null,
    photo: null,
    badge: '/brand/badge-thumbtack-top-pro.webp',
  },
] as const;

/* ---------------------------------------------------------- guarantees */

export const guarantees = [
  {
    id: 'satisfaction',
    name: '100% Satisfaction Guarantee',
    headline: 'You don’t pay until you’re happy.',
    body:
      'We walk the property with you when the work is done. If anything is not right, we fix it before we ask for a dollar. Not thrilled? You don’t pay.',
    covers: 'Every service, every property, every visit.',
    period: 'Before payment is taken',
    howToClaim: 'Tell your technician during the walkthrough — it gets fixed on the spot.',
    icon: 'shield',
  },
  {
    id: 'spotless-14',
    name: '14-Day Spotless Guarantee',
    headline: 'Rain, sprinklers or dust in the first two weeks? We come back free.',
    body:
      'Tucson weather does what it wants. If a monsoon, a sprinkler or a dust storm spots your glass within 14 days of your clean, call us and we re-clean the affected windows at no charge.',
    covers: 'Exterior glass cleaned by us, spotted by weather within 14 days.',
    period: '14 days from your service date',
    howToClaim: 'Call or text (520) 450-9500 — we schedule the touch-up, usually within a few days.',
    icon: 'calendar',
  },
] as const;

/* ------------------------------------------------------------- services */

export type Service = (typeof services)[number];

export const services = [
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    navName: 'Window Cleaning',
    /** Used in headlines: "Window Cleaning in Green Valley, AZ" */
    h1Noun: 'Window Cleaning',
    shortName: 'windows',
    tagline: 'Streak-free glass, inside and out.',
    summary:
      'Interior and exterior window cleaning for homes across Greater Tucson — glass, frames, sills and screens, done by a uniformed crew that treats your house like their own.',
    outcome: 'A house that looks brand new from the curb and from your favourite chair.',
    heroImage: 'tech-squeegee-desert-view',
    cardImage: 'tech-interior-window-golf-course',
    galleryImages: [
      'tech-squeegee-window-uniform',
      'two-techs-modern-home-glass',
      'clean-glass-wall-golf-course',
      'tech-front-door-ladder',
      'clean-window-mountain-view',
      'tech-waterfed-pole-exterior',
    ],
    forWho: [
      'Homeowners who want the view they paid for',
      'Retirees who would rather not be on a ladder',
      'HOA and community residents preparing for guests or a sale',
      'Anyone whose glass has gone dull from Tucson dust and hard water',
    ],
    problems: [
      {
        problem: 'Desert dust films over the glass within weeks',
        solution:
          'We clean glass, frames and sills together so dust that would run back down onto clean glass is removed at the same time.',
      },
      {
        problem: 'Sprinkler and hard-water spotting etched into the pane',
        solution:
          'Mineral spotting is treated separately from general soil. We assess it during the quote and tell you honestly what will and will not come off.',
      },
      {
        problem: 'Screens that turn a clean window grey again',
        solution:
          'Screens come out, get washed and go back in the same opening they came from — we tag them so nothing gets swapped.',
      },
      {
        problem: 'High glass, clerestories and stairwell windows out of reach',
        solution:
          'Water-fed poles and proper ladder work reach second-storey and vaulted glass without anyone standing somewhere they shouldn’t.',
      },
    ],
    included: [
      'Exterior glass, hand-cleaned and squeegeed',
      'Interior glass, with floors and furnishings protected',
      'Window frames and sills wiped',
      'Tracks vacuumed and detailed',
      'Screens removed, washed and reinstalled',
      'Final walkthrough with you before payment',
    ],
    addOns: [
      'Hard-water and mineral stain treatment',
      'Sun screen cleaning',
      'Skylights and high interior glass',
      'Light fixture and ceiling fan glass',
      'Chandelier and entry transom glass',
    ],
    limitations: [
      'Some mineral etching is permanent — we tell you before we start, not after.',
      'Failed or fogged double-pane seals cannot be cleaned; the glass unit needs replacing.',
      'We do not remove paint, stucco overspray or construction debris without a separate quote.',
    ],
    pricingFactors: [
      'Number of window openings, not panes of glass',
      'One storey or two, and how reachable the glass is',
      'Interior and exterior, or exterior only',
      'Screens and tracks included or skipped',
      'Hard-water treatment, if the glass needs it',
    ],
    faqIds: ['how-often-windows', 'price-windows', 'inside-outside', 'screens-included', 'home-during-service', 'hard-water'],
    keywords: {
      primary: 'window cleaning',
      variants: ['window washing', 'window washers', 'residential window cleaning', 'window cleaning service'],
    },
  },
  {
    slug: 'solar-panel-cleaning',
    name: 'Solar Panel Cleaning',
    navName: 'Solar Panel Cleaning',
    h1Noun: 'Solar Panel Cleaning',
    shortName: 'solar panels',
    tagline: 'Dusty panels are panels you are not being paid for.',
    summary:
      'Deionised-water solar panel cleaning that clears Tucson dust and monsoon residue off your array — no abrasives, no harsh chemicals, no walking on your panels.',
    outcome: 'Panels that produce what they were sized to produce.',
    heroImage: 'tech-cleaning-solar-mountains',
    cardImage: 'solar-panels-pool-mountain-view',
    galleryImages: [
      'tech-cleaning-solar-commercial-roof',
      'solar-panels-tile-roof-neighborhood',
      'solar-panels-clouds',
      'solar-array-clean',
      'solar-panels-pool-patio',
      'solar-panels-hillside',
    ],
    forWho: [
      'Homeowners watching production drop season over season',
      'Anyone under a solar loan or lease who wants the output they are paying for',
      'Communities and HOAs with shared arrays',
      'Commercial rooftop array owners',
    ],
    problems: [
      {
        problem: 'Southern Arizona dust builds a film that blocks light',
        solution:
          'We rinse and soft-wash the full array with deionised water so nothing is left behind to attract more dust.',
      },
      {
        problem: 'Monsoon rain leaves mineral spotting, not a free wash',
        solution:
          'Rain lifts dust and dries it back into spots. Deionised water dries clear, which is why we do not use a garden hose.',
      },
      {
        problem: 'Bird droppings and nesting under the array',
        solution:
          'Droppings are removed by hand where they shade cells. We flag nesting so you can call a specialist before it becomes a wiring problem.',
      },
      {
        problem: 'Worry about somebody cracking a panel',
        solution:
          'We work from the roof surface and from poles. Nobody stands on your panels, and no abrasive pads or pressure washers touch the glass.',
      },
    ],
    included: [
      'Full array soft-wash with deionised water',
      'Hand removal of droppings and stuck-on debris',
      'Panel frames and visible surface debris cleared',
      'Walk of the array for obvious damage, reported to you',
      'Before-and-after photos of the roof you cannot see',
    ],
    addOns: [
      'Ground-mount and pool-equipment arrays',
      'Commercial rooftop arrays',
      'Recurring seasonal cleaning schedule',
    ],
    limitations: [
      'We clean panels. We do not perform electrical work, repairs or panel replacement.',
      'Arrays with damaged glass or exposed wiring are photographed and reported, not cleaned.',
      'Steep or tile roofs are assessed for safe access before we quote.',
    ],
    pricingFactors: [
      'Number of panels in the array',
      'Roof pitch, height and access',
      'Ground mount versus roof mount',
      'How long since the last cleaning',
      'One-time clean or a recurring schedule',
    ],
    faqIds: ['how-often-solar', 'solar-damage', 'solar-worth-it', 'price-solar', 'home-during-service'],
    keywords: {
      primary: 'solar panel cleaning',
      variants: ['solar panel washing', 'solar panel cleaners', 'solar array cleaning', 'clean solar panels'],
    },
  },
  {
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    navName: 'Pressure Washing',
    h1Noun: 'Pressure Washing',
    shortName: 'exterior surfaces',
    tagline: 'Driveways, patios and walls back to the colour you forgot they were.',
    summary:
      'Pressure washing and soft washing for driveways, patios, pool decks, walkways, stucco and block — the right pressure for each surface, never one setting for everything.',
    outcome: 'Concrete and stucco that look cared for instead of weathered.',
    heroImage: 'before-after-patio-split',
    cardImage: 'clean-covered-patio',
    galleryImages: [
      'before-after-patio-split',
      'clean-covered-patio',
      'before-after-patio-1',
      'before-after-patio-2',
      'tech-washing-screens',
    ],
    forWho: [
      'Homeowners whose driveway has gone from tan to grey',
      'Anyone hosting, listing a home, or expecting family',
      'Communities with shared walkways and pool decks',
      'Property managers with tenant turnover',
    ],
    problems: [
      {
        problem: 'Concrete stained by oil, rust and years of dust',
        solution:
          'Surface cleaners give an even finish instead of the wand stripes you get from a rented machine.',
      },
      {
        problem: 'Stucco and paint that pressure washing would destroy',
        solution:
          'Stucco, painted block and delicate surfaces get soft washed — low pressure and the right solution, not brute force.',
      },
      {
        problem: 'Pool decks that get slick with algae and grime',
        solution:
          'Decks are cleaned and rinsed away from the pool, with landscaping protected and water directed where it belongs.',
      },
      {
        problem: 'Damage from a well-meaning DIY afternoon',
        solution:
          'We test pressure on an inconspicuous area first, and we tell you when a surface should not be washed at all.',
      },
    ],
    included: [
      'Pre-treatment of stains where needed',
      'Even surface cleaning, not wand stripes',
      'Soft washing for stucco, paint and delicate surfaces',
      'Landscaping and fixtures protected before we start',
      'Full rinse-down of the surrounding area',
      'Walkthrough with you before payment',
    ],
    addOns: [
      'Driveways and garage floors',
      'Patios, pool decks and walkways',
      'Stucco and block wall soft washing',
      'Outdoor furniture and grills',
      'Trash enclosures and dumpster pads (commercial)',
    ],
    limitations: [
      'Deep oil staining and rust lighten considerably but do not always disappear entirely.',
      'Loose, spalling or failing concrete is reported, not washed — pressure makes it worse.',
      'Roof washing is not a service we offer.',
    ],
    pricingFactors: [
      'Square footage of the surface',
      'Surface type — concrete, pavers, stucco, painted block',
      'How heavy the staining is',
      'Water access on site',
      'Whether it is combined with a window or solar service',
    ],
    faqIds: ['pressure-damage', 'price-pressure', 'how-often-pressure', 'home-during-service'],
    keywords: {
      primary: 'pressure washing',
      variants: ['power washing', 'driveway cleaning', 'patio cleaning', 'soft washing'],
    },
  },
] as const;

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<
  string,
  Service
>;

/* ------------------------------------------------------------ locations */

export type Location = (typeof locations)[number];

export const locations = [
  {
    slug: 'green-valley',
    name: 'Green Valley',
    fullName: 'Green Valley, AZ',
    zips: ['85614', '85622'],
    priority: 1,
    blurb:
      'Where our AZ-19 Readers’ Pick came from. Green Valley is home turf — most weeks our trucks are somewhere in it.',
    communities: ['Quail Creek', 'Canoa Ranch', 'Madera Highlands', 'Las Campanas', 'Desert Hills', 'Villas del Sol'],
    localNotes: [
      'Patio homes and casitas with a lot of glass facing open desert — dust arrives from every direction.',
      'Hard water is a real factor here; sprinkler overspray on low windows is the most common damage we see.',
      'Seasonal residents book before they arrive in the autumn and again before they leave in the spring.',
    ],
    heroImage: 'clean-window-mountain-view',
    image: 'tech-interior-window-golf-course',
  },
  {
    slug: 'sahuarita',
    name: 'Sahuarita',
    fullName: 'Sahuarita, AZ',
    zips: ['85629'],
    priority: 2,
    blurb:
      'Newer builds, big windows and a lot of rooftop solar — Sahuarita is one of our busiest service days.',
    communities: ['Rancho Sahuarita', 'Madera Reserve', 'Quail Creek', 'La Joya', 'Sahuarita Farms'],
    localNotes: [
      'A high share of homes here have rooftop solar, so window and panel cleaning are usually booked together.',
      'New-build stucco dust settles on glass for the first couple of years after a neighbourhood finishes.',
      'Family homes with pool-facing glass — sliders and patio doors take the most punishment.',
    ],
    heroImage: 'solar-panels-tile-roof-neighborhood',
    image: 'clean-window-sky-reflection',
  },
  {
    slug: 'oro-valley',
    name: 'Oro Valley',
    fullName: 'Oro Valley, AZ',
    zips: ['85737', '85755', '85704'],
    priority: 3,
    blurb:
      'Catalina views are the reason people buy in Oro Valley. Clean glass is the reason they get to see them.',
    communities: ['Sun City Oro Valley', 'Stone Canyon', 'Rancho Vistoso', 'La Cañada Ridge', 'Catalina Shadows'],
    localNotes: [
      'Homes here are built around mountain views, so large picture windows and sliders dominate the work.',
      'Higher elevation and open desert exposure means wind-driven dust between monsoon storms.',
      'Active-adult communities book on a standing schedule — quarterly is the most common.',
    ],
    heroImage: 'clean-window-mountain-view',
    image: 'two-techs-modern-home-glass',
  },
  {
    slug: 'catalina-foothills',
    name: 'Catalina Foothills',
    fullName: 'Catalina Foothills, AZ',
    zips: ['85718', '85750', '85715'],
    priority: 4,
    blurb:
      'Architectural glass, hillside builds and hard-to-reach elevations. Foothills homes need a crew that has done it before.',
    communities: ['Ventana Canyon', 'Sabino Canyon', 'Skyline Country Club', 'Finger Rock', 'Pima Canyon'],
    localNotes: [
      'Multi-storey hillside homes with clerestory and floor-to-ceiling glass — ladder and pole work, carefully planned.',
      'Custom and specialty glass is common; we assess coatings and tints before choosing a method.',
      'Mature landscaping means more organic debris on glass and more care taken around plantings.',
    ],
    heroImage: 'clean-glass-wall-golf-course',
    image: 'tech-high-window-reach',
  },
  {
    slug: 'marana',
    name: 'Marana',
    fullName: 'Marana, AZ',
    zips: ['85653', '85658', '85743'],
    priority: 5,
    blurb:
      'From Dove Mountain down to Continental Ranch — newer homes, wide-open exposure and a lot of dust.',
    communities: ['Dove Mountain', 'Sunflower at Continental Ranch', 'Continental Ranch', 'Gladden Farms', 'The Highlands'],
    localNotes: [
      'Wide-open desert exposure west of the Tortolitas means glass films over faster than in sheltered neighbourhoods.',
      'Active-adult communities like Sunflower book together — neighbour referrals are how most of our Marana work starts.',
      'Newer subdivisions still settling in generate construction dust for months.',
    ],
    heroImage: 'clean-windows-desert-reflection',
    image: 'tech-waterfed-pole-stucco',
  },
  {
    slug: 'saddlebrooke',
    name: 'SaddleBrooke',
    fullName: 'SaddleBrooke, AZ',
    zips: ['85739'],
    priority: 6,
    blurb:
      'SaddleBrooke One, Two and the Ranch. Golf-course glass, big views, and neighbours who talk to each other.',
    communities: ['SaddleBrooke One', 'SaddleBrooke Two', 'SaddleBrooke Ranch', 'The Preserve', 'Catalina Vista'],
    localNotes: [
      'Golf-course frontage means constant irrigation overspray on the windows facing the fairway.',
      'Homes are built for the view — most of our work here is large fixed panes and patio sliders.',
      'We schedule neighbours on the same day wherever we can; it keeps everyone’s price down.',
    ],
    heroImage: 'clean-glass-wall-golf-course',
    image: 'tech-interior-window-golf-course',
  },
  {
    slug: 'tanque-verde',
    name: 'Tanque Verde',
    fullName: 'Tanque Verde, AZ',
    zips: ['85749', '85748'],
    priority: 7,
    blurb:
      'Larger lots, mature trees and east-side sun. Tanque Verde glass collects more than dust.',
    communities: ['Tanque Verde Valley', 'Redington', 'Bear Canyon', 'Agua Caliente'],
    localNotes: [
      'Mature mesquite and palo verde drop pollen and sap that ordinary washing leaves behind.',
      'Horse properties and larger lots mean more dust from unpaved drives and arenas.',
      'East-facing glass takes hard morning sun, which bakes on whatever settles overnight.',
    ],
    heroImage: 'clean-window-bougainvillea',
    image: 'tech-window-mountain-view',
  },
  {
    slug: 'tucson',
    name: 'Tucson',
    fullName: 'Tucson, AZ',
    zips: ['85701', '85704', '85710', '85716', '85718', '85719', '85730', '85741', '85745', '85748'],
    priority: 8,
    blurb:
      'Midtown bungalows, east-side ranch homes, foothills builds and everything between. Tucson is where it started.',
    communities: ['Sam Hughes', 'Casas Adobes', 'Tucson Estates', 'Civano', 'Harold Bell Wright', 'Colonia Solana'],
    localNotes: [
      'Housing stock runs from 1940s midtown to brand-new east-side builds — every glass type and frame you can name.',
      'Older aluminium frames and single-pane glass need a gentler hand than newer vinyl and dual-pane.',
      'We cover the metro on a rolling weekly schedule, so most Tucson addresses can be fitted in quickly.',
    ],
    heroImage: 'clean-living-room-fireplace-windows',
    image: 'team-truck-lineup-tucson',
  },
] as const;

export const locationBySlug = Object.fromEntries(locations.map((l) => [l.slug, l])) as Record<
  string,
  Location
>;

/** Extra towns we serve but do not yet have a dedicated page for. */
export const alsoServing = ['Vail', 'Casas Adobes', 'Tucson Estates', 'Corona de Tucson', 'Continental Ranch'] as const;

/* -------------------------------------------------------------- process */

export const process = [
  {
    step: 1,
    name: 'Ask for a quote',
    body: 'Fill in the short form or call us. We ask a handful of questions — no site visit needed for most homes.',
    detail: 'Most quotes go out the same day.',
  },
  {
    step: 2,
    name: 'Get a fixed price',
    body: 'You get a clear number and exactly what it covers before anything is booked. No hourly surprises, no upsells on the day.',
    detail: 'The price you approve is the price you pay.',
  },
  {
    step: 3,
    name: 'Pick your day',
    body: 'We book a date and an arrival window that works for you, and we confirm before we come.',
    detail: 'You’ll know who is arriving and roughly when.',
  },
  {
    step: 4,
    name: 'We arrive in uniform',
    body: 'A marked truck, a uniformed crew and an introduction at the door. We lay down protection before anything gets wet.',
    detail: 'You always know who is in your home.',
  },
  {
    step: 5,
    name: 'We do the work',
    body: 'Glass, frames, sills, tracks and screens — the whole opening, not just the pane. Then we clean up after ourselves.',
    detail: 'Property protected from the first minute to the last.',
  },
  {
    step: 6,
    name: 'We walk it with you',
    body: 'Before we pack up, we walk the property together in daylight. Anything you point out gets fixed there and then.',
    detail: 'This is where problems get solved, not discovered later.',
  },
  {
    step: 7,
    name: 'You pay when you’re happy',
    body: 'Payment comes last, once you have seen the work and signed off on it. That is the whole guarantee.',
    detail: 'And you’re covered for 14 days after that.',
  },
] as const;

/* ------------------------------------------------------- safety & care */

export const safety = [
  {
    title: 'Your glass',
    body: 'Soft rubber and hand tools on the pane. We check for tints, coatings and existing chips before we start, and we tell you what we find.',
  },
  {
    title: 'Your screens',
    body: 'Screens are tagged as they come out and go back into the same opening. Frames are washed flat, never bent over a knee.',
  },
  {
    title: 'Your solar panels',
    body: 'Deionised water and soft-wash equipment only. No pressure washers, no abrasive pads, and nobody stands on the array.',
  },
  {
    title: 'Your home’s interior',
    body: 'Drop cloths and mats before we work indoors, shoes covered or removed, and furniture moved back exactly where it was.',
  },
  {
    title: 'Your landscaping',
    body: 'Plants near the work are watered down and covered before pressure washing, and runoff is directed away from beds and pools.',
  },
  {
    title: 'Everyone on site',
    body: 'Trained ladder work, proper footing and no shortcuts on second-storey glass. Wildcat Washers is licensed and insured.',
  },
] as const;

/* --------------------------------------------------------------- offers */

export const offers = [
  {
    id: 'first-service',
    headline: '10% off your first service',
    detail: 'Applied automatically when you book from your first quote.',
    active: true,
  },
  {
    id: 'veteran-senior',
    headline: 'Veteran and senior discounts',
    detail: 'Ask when you request your quote and we will apply it.',
    active: true,
  },
  {
    id: 'neighbors',
    headline: 'Book with a neighbour, both save',
    detail: 'Same-day, same-street jobs cut our drive time. We pass that back.',
    active: true,
  },
] as const;

/* ------------------------------------------------------------------ faq */

export type Faq = {
  id: string;
  q: string;
  a: string;
  topics: string[];
  /** Extra words people actually type when they mean this question. Feeds the
   *  Ask Wildcat index only — never rendered. */
  terms?: string[];
};

export const faqs: Faq[] = [
  {
    id: 'price-windows',
    q: 'How much does window cleaning cost?',
    a: 'Window cleaning is priced per home, not per hour. The number depends on how many window openings you have, whether it is one storey or two, and whether you want interiors as well as exteriors. Tell us your address and roughly how many windows and we will send a fixed price — usually the same day. The price you approve is the price you pay.',
    topics: ['window-cleaning', 'pricing'],
    terms: ['price', 'cost', 'how much', 'rate', 'charge', 'estimate', 'per window', 'two storey', 'two story', 'second storey', 'single storey', 'house', 'home', 'expensive', 'cheap'],
  },
  {
    id: 'price-solar',
    q: 'How much does solar panel cleaning cost?',
    a: 'Solar panel cleaning is priced by the number of panels and how the array is mounted. A typical residential rooftop array is a single visit. Send us a photo of your roof or your panel count and we will quote it without needing to come out first.',
    topics: ['solar-panel-cleaning', 'pricing'],
  },
  {
    id: 'price-pressure',
    q: 'How much does pressure washing cost?',
    a: 'Pressure washing is priced by square footage and surface type. A driveway prices differently from stucco, because they are cleaned differently. Tell us what you want cleaned and we will give you a fixed number before we book anything.',
    topics: ['pressure-washing', 'pricing'],
  },
  {
    id: 'how-often-windows',
    q: 'How often should windows be cleaned in Tucson?',
    a: 'Twice a year is right for most Tucson-area homes — once before the summer and once after monsoon season. Homes on unpaved roads, next to open desert, or with sprinklers hitting the glass do better on a quarterly schedule. We will tell you honestly what your home needs rather than selling you the most frequent option.',
    topics: ['window-cleaning', 'maintenance'],
  },
  {
    id: 'how-often-solar',
    q: 'How often should solar panels be cleaned?',
    a: 'Two to three times a year in Southern Arizona. Dust builds continuously and monsoon rain leaves mineral spotting rather than washing panels clean. If your production numbers have drifted down over a season, dust is the usual reason.',
    topics: ['solar-panel-cleaning', 'maintenance'],
  },
  {
    id: 'how-often-pressure',
    q: 'How often should I pressure wash my driveway and patio?',
    a: 'Once a year keeps concrete from setting in stains permanently. Pool decks and high-traffic patios often want it more like every eight months. Anything longer than two years and the staining takes more work to lift.',
    topics: ['pressure-washing', 'maintenance'],
  },
  {
    id: 'rain-again',
    q: 'Won’t they just get dirty again?',
    a: 'Eventually — the same way a clean car eventually needs washing. But there is a real difference between glass that is cleaned twice a year and glass that has never been properly cleaned. Dust rinses off maintained glass; it bonds to neglected glass and turns into mineral etching you cannot remove. And if weather spots your windows within 14 days of our visit, we come back and redo them free.',
    topics: ['objections', 'window-cleaning'],
  },
  {
    id: 'diy',
    q: 'Can’t I just do this myself?',
    a: 'You can, and plenty of people do. Two things usually change their minds: the ladder, and the result. Second-storey and vaulted glass is where most homeowner injuries happen, and hand-cleaning a whole house takes a full weekend to land somewhere short of streak-free. What you are buying from us is your Saturday back and glass that actually looks clean in direct sun.',
    topics: ['objections'],
  },
  {
    id: 'worth-it',
    q: 'Is professional window cleaning actually worth the money?',
    a: 'It is if you like your view, and it is if you plan to sell. Clean glass is one of the cheapest things that makes a house read as well-kept. It also protects the glass itself — hard water and mineral deposits left on a pane for years will etch it permanently, and etched glass gets replaced, not cleaned.',
    topics: ['objections', 'pricing'],
  },
  {
    id: 'inside-outside',
    q: 'Do you clean the inside of the windows too?',
    a: 'Yes. Most customers book inside and out, and that is what we quote by default. Exterior-only is available and costs less — just tell us when you ask for a quote.',
    topics: ['window-cleaning'],
  },
  {
    id: 'screens-included',
    q: 'Are screens and tracks included?',
    a: 'Yes, on a full window cleaning service. Screens come out, get washed, and go back into the opening they came from. Tracks are vacuumed and detailed. Cleaning glass and leaving dirty screens in front of it is how a window gets dirty again in a week.',
    topics: ['window-cleaning'],
  },
  {
    id: 'hard-water',
    q: 'Can you remove hard water stains from my windows?',
    a: 'Often, yes — with a separate mineral treatment rather than ordinary cleaning. But some spotting has etched into the glass permanently, and no cleaner will bring that back. We tell you which one you have during the quote, before you have paid for anything.',
    topics: ['window-cleaning'],
  },
  {
    id: 'home-during-service',
    q: 'Do I need to be home?',
    a: 'For exterior-only work, no — many customers are away or out of town. For interior work someone needs to let us in, and we always recommend being there for the final walkthrough so anything you want changed gets changed on the spot.',
    topics: ['process'],
  },
  {
    id: 'trust-in-home',
    q: 'Who is actually coming to my house?',
    a: 'A uniformed Wildcat Washers crew in a marked truck. We confirm your appointment before we come, our technicians introduce themselves at the door, and you can see the same crews on our site and social media. We are licensed and insured, BBB accredited, and every review we have ever received is a five-star one.',
    topics: ['objections', 'process'],
    terms: ['trust', 'trustworthy', 'safe', 'strangers', 'in my home', 'inside my house', 'who comes', 'background', 'uniform', 'crew', 'technicians'],
  },
  {
    id: 'damage',
    q: 'What if something gets damaged?',
    a: 'We are licensed and insured, and we tell you immediately if something happens — you should never find out about it after we have left. In practice, damage is prevented rather than covered: we protect surfaces and landscaping before we start, and we assess anything fragile before it is touched.',
    topics: ['objections', 'safety'],
    terms: ['damage', 'broken', 'break', 'scratch', 'insurance', 'liable', 'liability'],
  },
  {
    id: 'pressure-damage',
    q: 'Will pressure washing damage my stucco or paint?',
    a: 'It absolutely can, which is why we do not pressure wash those surfaces. Stucco, painted block and delicate materials get soft washed — low pressure with the right solution. We test on an inconspicuous area first and we will tell you when a surface should not be washed at all.',
    topics: ['pressure-washing', 'safety'],
  },
  {
    id: 'solar-damage',
    q: 'Could cleaning damage my solar panels?',
    a: 'Not the way we do it. Deionised water, soft-wash equipment, no abrasives and no pressure washers. Nobody stands on the panels — we work from the roof surface and from poles. If we see damage to your array, we photograph it and send it to you rather than working around it.',
    topics: ['solar-panel-cleaning', 'safety'],
  },
  {
    id: 'solar-worth-it',
    q: 'Does cleaning solar panels really improve output?',
    a: 'Dust on the glass blocks light before it ever reaches the cell, so a dusty array produces less than a clean one. In Southern Arizona, where panels can go months without meaningful rain, that film builds up steadily. The honest answer is that the difference depends on how dirty your array had become — which is why we take before-and-after photos of a roof you cannot see.',
    topics: ['solar-panel-cleaning', 'objections'],
  },
  {
    id: 'guarantee',
    q: 'What is your guarantee?',
    a: 'Two of them. First, you do not pay until you have walked the property with us and you are happy — if you are not, you do not pay. Second, our 14-Day Spotless Guarantee: if rain, sprinklers or dust spot the exterior glass we cleaned within 14 days, we come back and redo it at no charge.',
    topics: ['guarantee', 'objections'],
  },
  {
    id: 'insured',
    q: 'Are you licensed and insured?',
    a: 'Yes — Wildcat Washers is a licensed and insured Tucson business, BBB accredited, and we are happy to provide documentation before we start work on a commercial property.',
    topics: ['objections', 'commercial'],
  },
  {
    id: 'areas',
    q: 'What areas do you serve?',
    a: 'Green Valley, Sahuarita, Oro Valley, Catalina Foothills, Marana, Tanque Verde, SaddleBrooke and Tucson, plus surrounding communities across Pima and Pinal County. If you are not sure whether you are in range, call and ask — the answer is usually yes.',
    topics: ['areas', 'process'],
  },
  {
    id: 'how-soon',
    q: 'How soon can you come out?',
    a: 'Most quotes go out the same day, and most jobs are scheduled within the same week. Autumn and spring are our busiest seasons in the retirement communities, so booking a week or two ahead is worth it around then.',
    topics: ['process'],
  },
  {
    id: 'payment',
    q: 'How do I pay, and when?',
    a: 'After the work is done and you have approved it. Not before. We take card, cheque and cash.',
    topics: ['process', 'pricing'],
  },
  {
    id: 'recurring',
    q: 'Do you offer recurring service?',
    a: 'Yes, and it is what most of our long-term customers do — usually twice a year for windows and two to three times a year for solar. We reach out when you are due rather than making you remember. Recurring customers get priority scheduling.',
    topics: ['process', 'maintenance'],
  },
  {
    id: 'commercial-hours',
    q: 'Can you work outside our business hours?',
    a: 'Yes. Commercial work is scheduled before opening, after closing, or on weekends so your customers and staff are not working around us.',
    topics: ['commercial'],
  },
];

export const faqById = Object.fromEntries(faqs.map((f) => [f.id, f])) as Record<string, Faq>;
export const faqsByTopic = (topic: string) => faqs.filter((f) => f.topics.includes(topic));

/* ------------------------------------------------------------ objections */

export const objections = [
  {
    id: 'worth',
    q: '“Is it really worth the money?”',
    a: 'Clean glass is the cheapest thing that makes a house look cared for — and it protects the glass itself. Hard water left on a pane for years etches it permanently, and etched glass gets replaced, not cleaned.',
    proof: 'Fixed price before we book. No hourly surprises.',
  },
  {
    id: 'again',
    q: '“It’ll just get dirty again.”',
    a: 'Maintained glass sheds dust. Neglected glass bonds it. And if weather spots your windows in the first 14 days, we come back and redo them free.',
    proof: '14-Day Spotless Guarantee.',
  },
  {
    id: 'diy',
    q: '“I could do it myself.”',
    a: 'You could. The ladder is where people get hurt, and a whole house takes a weekend to land somewhere short of streak-free. You are buying your Saturday back.',
    proof: 'Trained crews, proper equipment, second storey included.',
  },
  {
    id: 'showup',
    q: '“Will they actually show up?”',
    a: 'We confirm your appointment before the day, we arrive in a marked truck in uniform, and we introduce ourselves at the door.',
    proof: `${'1,000+'} customers served across Greater Tucson.`,
  },
  {
    id: 'trust',
    q: '“Can I trust them in my home?”',
    a: 'Uniformed, licensed and insured, BBB accredited, and every review we have ever received is five stars. You can see our actual crews all over this site.',
    proof: 'Licensed · Insured · BBB Accredited',
  },
  {
    id: 'damage',
    q: '“What if they damage something?”',
    a: 'Protection goes down before anything gets wet, fragile surfaces get assessed first, and we tell you immediately if something happens. We are fully insured.',
    proof: 'Property protection is step one, not an afterthought.',
  },
] as const;

/* --------------------------------------------------------- nav & routes */

export const nav = {
  primary: [
    { label: 'Services', href: '/services/', children: services.map((s) => ({ label: s.navName, href: `/services/${s.slug}/` })) },
    { label: 'Service Areas', href: '/areas/', children: locations.map((l) => ({ label: l.name, href: `/areas/${l.slug}/` })) },
    { label: 'Residential', href: '/residential/' },
    { label: 'Commercial', href: '/commercial/' },
    { label: 'Reviews', href: '/reviews/' },
    { label: 'About', href: '/about/' },
  ],
  footer: [
    {
      title: 'Services',
      links: [
        ...services.map((s) => ({ label: s.name, href: `/services/${s.slug}/` })),
        { label: 'Residential', href: '/residential/' },
        { label: 'Commercial', href: '/commercial/' },
      ],
    },
    {
      title: 'Service Areas',
      links: locations.map((l) => ({ label: `${l.name} Window Cleaning`, href: `/areas/${l.slug}/` })),
    },
    {
      title: 'Company',
      links: [
        { label: 'About Wildcat Washers', href: '/about/' },
        { label: 'Our Guarantees', href: '/guarantee/' },
        { label: 'Reviews', href: '/reviews/' },
        { label: 'Frequently Asked Questions', href: '/faq/' },
        { label: 'Contact', href: '/contact/' },
        { label: 'Get a Free Quote', href: '/quote/' },
      ],
    },
  ],
} as const;

/* ------------------------------------------------------------- helpers */

export const cta = {
  primary: 'Get Your Free Quote',
  primaryShort: 'Free Quote',
  secondary: `Call ${company.phone}`,
  secondaryShort: 'Call Now',
  reassurance: 'Same-day quotes · No obligation · You don’t pay until you’re happy',
} as const;

/** "Green Valley, Sahuarita, Oro Valley and 5 more" style strings. */
export function areaSentence(limit = 4): string {
  const names = locations.map((l) => l.name);
  const shown = names.slice(0, limit);
  const rest = names.length - limit;
  return rest > 0 ? `${shown.join(', ')} and ${rest} more` : shown.join(', ');
}

export function allAreaNames(): string {
  const names = locations.map((l) => l.name);
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}
