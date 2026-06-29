import { Link } from '@tanstack/react-router'
import { PageHero, Section } from '../components/Section'
import { ArrowRight } from 'lucide-react'

// Drop logo files into src/assets/sponsors/ and import them here.
// SVG preferred, PNG as fallback. Example:
//   import homeHardwareLogo from '../assets/sponsors/home-hardware.svg'
//   Then set logo: homeHardwareLogo on the matching entry below.

type Sponsor = {
  name: string
  logo?: string
}

const sponsors: Sponsor[] = [
  { name: 'Mike Crockatt Transport' },
  { name: 'Stonewall Home Hardware' },
  { name: 'Enns Brothers' },
  { name: 'Prairie Roots Co-op' },
  { name: 'R&B Diesel' },
  { name: 'Terraco' },
  { name: 'Unger Seed Farms Ltd.' },
  { name: 'Quarry Physiotherapy' },
  { name: 'Nurtien Ag Solutions' },
  { name: 'Steeltown Ford' },
  { name: 'Tuff Contracting' },
  { name: 'Complete Physiotherapy' },
  { name: "Leo's" },
  { name: 'Riddell Seed Co.' },
  { name: 'Big Block Auto' },
  { name: 'Trevor King MLA for Lakeside' },
  { name: 'Rona Rockwood Gimli' },
  { name: 'Warren Tire' },
  { name: 'Access Credit Union' },
  { name: 'Commercial Comfort' },
  { name: 'IDA Stonewall Pharmacy' },
  { name: 'Advance Exteriors' },
  { name: 'Slatcher Electric' },
  { name: 'Quarry Ridge Pharmacy' },
  { name: 'Richardson Pioneer' },
  { name: 'Roof Express' },
]

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="group flex h-[100px] items-center justify-center rounded-xl border border-[#e7dac4] bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:border-[#C8A24A]/60 hover:shadow-md">
      {sponsor.logo ? (
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="max-h-[64px] w-auto max-w-[160px] object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
        />
      ) : (
        <span className="text-center text-sm font-semibold leading-snug text-[#7a6a58] transition-colors duration-300 group-hover:text-[#7A1F2B]">
          {sponsor.name}
        </span>
      )}
    </div>
  )
}

export function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Thank You"
        title="Our Sponsors"
        description="The Argyle Curling Club is grateful for the generous support of the local businesses and community partners who make our season possible."
      />

      <Section eyebrow="Community Support" title="Our Sponsors">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
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
                'Name and logo listed on the club website',
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
