/**
 * REVIEWS
 * -----------------------------------------------------------------------------
 * ⚠️  NOTHING IN HERE IS REAL YET.
 *
 * Wildcat has 1,000+ customers and has never received a review below five stars,
 * but no verbatim review text was supplied for this build. Rather than invent
 * testimonials for a real business, every entry below is an obvious placeholder
 * that shows the layout and the character budget it has to fit.
 *
 * TO GO LIVE:
 *   1. Paste real review text into `text` (Google Business Profile, Nextdoor,
 *      BBB, Angi, Thumbtack — wherever it was actually left).
 *   2. Set the reviewer's first name + last initial, their town, and the service.
 *   3. Attach a `photo` key from src/data/media.ts where you have a real photo of
 *      that customer's job — a review with the job photo beside it converts far
 *      harder than a review alone.
 *   4. Set `placeholder: false`. Any entry still marked `placeholder: true` is
 *      filtered out of production builds automatically (see `publishedReviews`).
 */

export type Review = {
  id: string;
  text: string;
  name: string;
  town: string;
  service: 'window-cleaning' | 'solar-panel-cleaning' | 'pressure-washing';
  /** Where the review was actually left. Shown to the visitor. */
  source: 'Google' | 'Nextdoor' | 'BBB' | 'Angi' | 'Thumbtack' | 'Direct';
  rating: 5;
  /** Media key from src/data/media.ts, if you have a photo of this job. */
  photo?: string;
  placeholder: boolean;
};

export const reviews: Review[] = [
  {
    id: 'r1',
    text: 'PLACEHOLDER — paste a real 5-star review here. Aim for one that proves quality AND communication. This slot comfortably fits about 240 characters before it starts to crowd the card.',
    name: 'First name L.',
    town: 'Green Valley',
    service: 'window-cleaning',
    source: 'Google',
    rating: 5,
    photo: 'clean-glass-wall-golf-course',
    placeholder: true,
  },
  {
    id: 'r2',
    text: 'PLACEHOLDER — pick a review that mentions the crew by name or praises how they treated the home. Trust language beats "great job" every time.',
    name: 'First name L.',
    town: 'SaddleBrooke',
    service: 'window-cleaning',
    source: 'Nextdoor',
    rating: 5,
    photo: 'two-techs-window-ladder',
    placeholder: true,
  },
  {
    id: 'r3',
    text: 'PLACEHOLDER — a solar panel review. Ideally one that mentions production going back up, or how carefully the roof was handled.',
    name: 'First name L.',
    town: 'Sahuarita',
    service: 'solar-panel-cleaning',
    source: 'Google',
    rating: 5,
    photo: 'tech-cleaning-solar-mountains',
    placeholder: true,
  },
  {
    id: 'r4',
    text: 'PLACEHOLDER — a pressure washing review. Before/after language works well here.',
    name: 'First name L.',
    town: 'Marana',
    service: 'pressure-washing',
    source: 'Google',
    rating: 5,
    photo: 'before-after-patio-1',
    placeholder: true,
  },
  {
    id: 'r5',
    text: 'PLACEHOLDER — a repeat customer. "Third year in a row" style reviews are the single most persuasive kind for this audience.',
    name: 'First name L.',
    town: 'Oro Valley',
    service: 'window-cleaning',
    source: 'Google',
    rating: 5,
    photo: 'clean-window-mountain-view',
    placeholder: true,
  },
  {
    id: 'r6',
    text: 'PLACEHOLDER — one that speaks to punctuality, showing up when promised, and easy scheduling.',
    name: 'First name L.',
    town: 'Catalina Foothills',
    service: 'window-cleaning',
    source: 'BBB',
    rating: 5,
    photo: 'tech-high-window-reach',
    placeholder: true,
  },
];

/** Reviews that are safe to publish. Placeholders never reach production. */
export const publishedReviews = reviews.filter((r) => !r.placeholder);

/** In dev we show placeholders so the layout is visible; in prod we never do. */
export const displayReviews = import.meta.env.DEV ? reviews : publishedReviews;

export const reviewsFor = (service?: string, town?: string) =>
  displayReviews.filter(
    (r) => (!service || r.service === service) && (!town || r.town === town)
  );
