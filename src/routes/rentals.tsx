import { Link } from '@tanstack/react-router'
import { PageHero, Section } from '../components/Section'
import { ArrowRight, CheckCircle } from 'lucide-react'

const facilities = [
  {
    title: 'Main Lounge',
    description: 'A bright, welcoming area for smaller gatherings, meetings, and casual celebrations.',
  },
  {
    title: 'Clubhouse Gathering Room',
    description: 'A flexible space suited to birthdays, family events, team socials, and community get-togethers.',
  },
  {
    title: 'Ice-Side Hospitality Area',
    description: 'A relaxed space for post-game visits, meal gatherings, and friendly community events.',
  },
]

const amenities = [
  'Warm, welcoming indoor seating for groups of various sizes',
  'Full kitchen and easy access for catered meals',
  'Licensed bar service available with advance notice',
  'Tables, chairs, and basic AV setup available',
  'Free parking and accessible entry',
]

const suitableEvents = [
  'Meetings and community group gatherings',
  'Birthday parties and family celebrations',
  'Team socials and post-game events',
  'Season wrap-ups and volunteer appreciation',
  'Fundraisers and small public functions',
]


export function RentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Club Rentals"
        title="Club Rentals"
        description="The Argyle Curling Club offers a warm, welcoming setting for meetings, socials, birthdays, celebrations, and community gatherings."
      />

      <Section eyebrow="Facility overview" title="Available rental spaces">
        <div className="grid gap-6 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div key={facility.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl text-burgundy">{facility.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{facility.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Amenities" title="Features and amenities" className="bg-accent/20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              The club is known for its friendly atmosphere and practical event space. Whether you are planning a small meeting or a larger celebration, the space is designed to feel easy, welcoming, and comfortable.
            </p>
            <ul className="mt-6 space-y-3">
              {amenities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h4 className="font-display text-lg text-burgundy">Suitable for</h4>
            <ul className="mt-4 space-y-3">
              {suitableEvents.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Contact" title="Contact us about rentals">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <p className="text-base leading-relaxed text-muted-foreground">
            We are happy to help you learn more about available dates, room setup, and the best fit for your gathering. Availability can change quickly during the season, so please get in touch early.
          </p>
          <Link to="/contact" className="mt-6 inline-flex items-center rounded-full bg-[#C8A24A] px-6 py-3 text-sm font-semibold text-[#5A1620] transition-colors hover:bg-[#D8B96A]">
            Contact Us About Rentals <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}
