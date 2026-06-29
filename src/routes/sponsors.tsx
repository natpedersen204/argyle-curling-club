import { Link } from '@tanstack/react-router'
import { PageHero, Section } from '../components/Section'
import { ArrowRight } from 'lucide-react'

const sponsors = [
  'Mike Crockatt Transport',
  'Stonewall Home Hardware',
  'Enns Brothers',
  'Prairie Roots Co-op',
  'R&B Diesel',
  'Terraco',
  'Unger Seed Farms Ltd.',
  'Quarry Physiotherapy',
  'Nurtien Ag Solutions (Grosse Isle)',
  'Steeltown Ford (Mitch Wicklund)',
  'Tuff Contracting',
  'Complete Physiotherapy',
  "Leo's",
  'Riddell Seed Co.',
  'Big Block Auto',
  'Trevor King MLA for Lakeside',
  'Rona Rockwood Gimli',
  'Warren Tire',
  'Access Credit Union',
  'Commercial Comfort',
  'IDA Stonewall Pharmacy',
  'Advance Exteriors',
  'Slatcher Electric',
  'Quarry Ridge Pharmacy',
  'Richardson Pioneer',
  'Roof Express',
]

export function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Thank You"
        title="Our Sponsors"
        description="The Argyle Curling Club is grateful for the generous support of the local businesses and community partners who make our season possible."
      />

      <Section eyebrow="Community Support" title="Our Sponsors">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((name) => (
            <div
              key={name}
              className="flex items-center rounded-xl border border-[#e7dac4] bg-white/80 px-5 py-4 shadow-sm"
            >
              <span className="mr-3 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#C8A24A]" />
              <span className="text-sm font-medium text-[#3a2a1a]">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Partner With Us" title="Become a Sponsor" className="bg-accent/20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sponsoring the Argyle Curling Club puts your business in front of hundreds of community
              members throughout the season — at the rink, in the lounge, and at our bonspiels and
              events.
            </p>
            <p>
              We offer flexible arrangements to fit any budget and are always open to discussing what
              works best for your business. Your support helps keep membership fees accessible and
              our facility in top condition.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-[#C8A24A] px-6 py-3 text-sm font-semibold text-[#5A1620] shadow-soft transition-colors hover:bg-[#D8B96A]"
            >
              Talk to Us About Sponsorship <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-xl border border-[#e7dac4] bg-white/80 p-6 shadow-sm">
            <h4 className="font-display text-xl text-[#7A1F2B]">What Your Support Provides</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                'Name listed on the club website',
                'Recognition at bonspiels and club events',
                'Signage opportunities at the rink',
                'Logo placement on social media',
                'Acknowledgement at the year-end banquet',
              ].map((perk) => (
                <li key={perk} className="flex items-start gap-2">
                  <span className="mt-0.5 font-semibold text-[#C8A24A]">✓</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
