/**
 * The Ask Wildcat search index, served as a single cacheable JSON file rather
 * than inlined into all 47 pages. Cuts ~35 KB from every HTML document and lets
 * the browser reuse one copy across the whole site.
 */
import type { APIRoute } from 'astro';
import { services, locations, faqs, guarantees, company } from '@/data/business';

type Entry = {
  id: string;
  kind: 'service' | 'location' | 'combo' | 'faq' | 'guarantee' | 'contact';
  title: string;
  answer: string;
  href: string;
  cta: string;
  terms: string[];
  service?: string;
  location?: string;
};

export const GET: APIRoute = () => {
  const entries: Entry[] = [];

  for (const s of services) {
    entries.push({
      id: `service-${s.slug}`,
      kind: 'service',
      title: s.name,
      answer: s.summary,
      href: `/services/${s.slug}/`,
      cta: `See ${s.name.toLowerCase()}`,
      terms: [s.name, s.keywords.primary, ...s.keywords.variants, s.shortName],
      service: s.slug,
    });
  }

  for (const l of locations) {
    entries.push({
      id: `location-${l.slug}`,
      kind: 'location',
      title: l.name,
      answer: `Yes — we work in ${l.name} every week. ${l.blurb}`,
      href: `/areas/${l.slug}/`,
      cta: `${l.name} services`,
      terms: [l.name, l.fullName, ...l.zips, ...l.communities],
      location: l.slug,
    });

    for (const s of services) {
      entries.push({
        id: `combo-${s.slug}-${l.slug}`,
        kind: 'combo',
        title: `${s.name} in ${l.name}`,
        answer: `We provide ${s.name.toLowerCase()} throughout ${l.name} and its communities — ${l.communities
          .slice(0, 3)
          .join(', ')} and more. ${s.tagline}`,
        href: `/services/${s.slug}/${l.slug}/`,
        cta: `${s.name} in ${l.name}`,
        terms: [
          `${s.keywords.primary} ${l.name}`,
          ...s.keywords.variants.map((v) => `${v} ${l.name}`),
          ...l.communities,
        ],
        service: s.slug,
        location: l.slug,
      });
    }
  }

  for (const f of faqs) {
    entries.push({
      id: `faq-${f.id}`,
      kind: 'faq',
      title: f.q,
      answer: f.a,
      href: `/faq/#${f.id}`,
      cta: 'Read the full answer',
      terms: [f.q, ...f.topics, ...(f.terms ?? [])],
    });
  }

  for (const g of guarantees) {
    entries.push({
      id: `guarantee-${g.id}`,
      kind: 'guarantee',
      title: g.name,
      answer: `${g.headline} ${g.body}`,
      href: '/guarantee/',
      cta: 'How our guarantees work',
      terms: [g.name, 'guarantee', 'warranty', 'money back', 'refund', 'promise', 'risk'],
    });
  }

  entries.push({
    id: 'quote',
    kind: 'contact',
    title: 'Get a free quote',
    answer:
      'Tell us what needs cleaning and roughly where you are. You get a fixed price — usually the same day — with no site visit needed for most homes, no obligation, and no payment until the work is done and you are happy with it.',
    href: '/quote/',
    cta: 'Start your free quote',
    terms: [
      'quote', 'free quote', 'estimate', 'book', 'booking', 'schedule', 'appointment',
      'hire', 'get started', 'sign up', 'price list', 'how do i book', 'come out',
    ],
  });

  entries.push({
    id: 'contact',
    kind: 'contact',
    title: 'Talk to a person',
    answer: `Call or text ${company.phone}, or email ${company.email}. We answer during ${company.hoursHuman}, and most quotes go out the same day.`,
    href: '/contact/',
    cta: 'Contact us',
    terms: ['contact', 'phone', 'call', 'text', 'email', 'talk', 'speak', 'reach', 'number', 'hours', 'open'],
  });

  return new Response(
    JSON.stringify({ entries, phone: company.phoneRaw, phoneLabel: company.phone }),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // Short freshness window so a content change reaches visitors quickly,
        // with stale-while-revalidate keeping it instant in the meantime.
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=86400',
      },
    }
  );
};
