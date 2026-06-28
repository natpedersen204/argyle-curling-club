import { Link } from '@tanstack/react-router'
import { PageHero, Section } from '../components/Section'
import { ArrowRight } from 'lucide-react'

const goldSponsors = [
  { name: 'Prairie Agri-Supply Ltd.', description: 'Serving Manitoba farmers for over 40 years' },
  { name: 'Argyle Co-operative', description: 'Community-owned, community-focused' },
  { name: 'Northern Trust Credit Union', description: 'Your local financial partner' },
]

const silverSponsors = [
  { name: 'Morris Implement Ltd.' },
  { name: 'Sunshine Feeds & Grain' },
  { name: 'Whitehorse Dairy Farm' },
  { name: 'Red River Motors' },
]

const communitySponsors = [
  { name: 'Argyle Hardware & Supply' },
  { name: 'Prairie Café & Bakery' },
  { name: 'Interlake Insurance Services' },
  { name: 'Meadow Ridge Veterinary Clinic' },
  { name: 'Sunrise Plumbing & Heating' },
  { name: 'Lakewood Lumber Co.' },
]

const benefits = [
  { tier: 'Gold', price: 'Contact for pricing', perks: ['Name & logo on rink signage', 'Logo on website & social media', 'Announcement at all club events', '4 complimentary bonspiel entries', 'Sponsor recognition at year-end banquet'] },
  { tier: 'Silver', price: 'Contact for pricing', perks: ['Name on website & social media', 'Announcement at club events', '2 complimentary bonspiel entries', 'Recognition at year-end banquet'] },
  { tier: 'Community', price: 'Contact for pricing', perks: ['Name listed on website', 'Announcement at club events', 'Recognition at year-end banquet'] },
]

export function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Thank You"
        title="Our Sponsors"
        description="The Argyle Curling Club is made possible by the generous support of local businesses and community partners who believe in what we do."
      />

      {/* Gold sponsors */}
      <Section eyebrow="Gold Sponsors" title="Premier Partners">
        <div className="grid gap-6 sm:grid-cols-3">
          {goldSponsors.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center rounded-xl border-2 border-gold bg-card p-8 text-center shadow-card"
            >
              <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold">
                Gold Sponsor
              </span>
              <div className="mt-4 flex h-20 w-full items-center justify-center rounded-lg bg-accent/30">
                <span className="font-display text-lg font-semibold text-burgundy">{s.name}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Silver sponsors */}
      <Section eyebrow="Silver Sponsors" title="Supporting Partners" className="bg-accent/20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {silverSponsors.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
            >
              <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Silver
              </span>
              <div className="mt-3 flex h-14 w-full items-center justify-center rounded-lg bg-accent/30">
                <span className="text-center text-sm font-semibold text-charcoal">{s.name}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Community sponsors */}
      <Section eyebrow="Community Supporters" title="Community Sponsors">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {communitySponsors.map((s) => (
            <div
              key={s.name}
              className="flex items-center rounded-lg border border-border bg-card px-5 py-4 text-sm font-medium text-charcoal"
            >
              <span className="mr-3 h-2 w-2 rounded-full bg-gold" />
              {s.name}
            </div>
          ))}
        </div>
      </Section>

      {/* Become a sponsor */}
      <Section eyebrow="Partner With Us" title="Become a Sponsor" className="bg-accent/20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sponsoring the Argyle Curling Club puts your business in front of hundreds of community
              members throughout the season — at the rink, in the lounge, and at our bonspiels and
              events.
            </p>
            <p>
              We offer flexible sponsorship tiers to fit any budget, and we are always open to
              discussing custom arrangements. Your support helps keep membership fees accessible
              and our facility in top condition.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-burgundy px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-burgundy-dark"
            >
              Talk to Us About Sponsorship <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {benefits.map((b) => (
              <div key={b.tier} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg text-burgundy">{b.tier} Tier</h4>
                  <span className="text-sm font-medium text-gold">{b.price}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {b.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-0.5 text-gold">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
