import { Link } from '@tanstack/react-router'
import { PageHero, Section } from '../components/Section'
import { ArrowRight } from 'lucide-react'
import menPhoto from '../assets/images/IMG_0025.JPEG'
import seniorsPhoto from '../assets/images/IMG_6270.JPEG'
import ladiesPhoto from '../assets/images/IMG_2627.jpeg'
import glowPhoto from '../assets/images/IMG_3064.JPEG'
import crockattPhoto from '../assets/images/IMG_3636.jpeg'

const bonspiels = [
  {
    name: "Men's Bonspiel",
    title: "Men's Bonspiel",
    typicalDates: "First weekend after New Year's",
    format: 'Often runs from Wednesday or Thursday evening through Sunday. Depending on the number of teams, the event may include a three-game guarantee with 8-end games.',
    included: 'Saturday night supper, Calcutta Auction, live entertainment, and food and drink specials throughout the event.',
    contact: 'Chad Thoresby',
    registration: 'Registration often fills quickly. Please contact the club president or email argylecurlingclub@gmail.com for updates.',
    photo: menPhoto,
    photoPosition: 'object-center',
  },
  {
    name: 'Seniors Daytime Bonspiel',
    title: 'Seniors Daytime Bonspiel',
    typicalDates: 'Third or fourth week of January',
    format: 'Held during the day on a Tuesday or Wednesday, with 6-end games and two games per day.',
    included: 'Breakfast of donuts and muffins, plus lunch of soup and sandwiches.',
    contact: 'Bruce Buchanan',
    registration: 'Please contact the club for current registration details and availability.',
    photo: seniorsPhoto,
    photoPosition: 'object-center',
  },
  {
    name: 'Ladies Bonspiel',
    title: 'Ladies Bonspiel',
    typicalDates: 'First weekend in February',
    format: 'A long-standing community event that has become a one-day Saturday bonspiel in recent years.',
    included: 'A fun, social day of curling with an emphasis on community and fellowship.',
    contact: 'Pam Crockatt',
    registration: 'Registration information is shared through the club as the event approaches. Contact the club for updates.',
    photo: ladiesPhoto,
    photoPosition: 'object-center',
  },
  {
    name: 'Mixed Glow Bonspiel',
    title: 'Mixed Glow Bonspiel',
    typicalDates: 'Third weekend in February',
    format: 'A mixed event that brings together curlers for a memorable evening of friendly competition.',
    included: 'A festive atmosphere with community spirit and a fun event format.',
    contact: 'Riley Buchanan',
    registration: 'Please reach out to the club president or email argylecurlingclub@gmail.com for registration information.',
    photo: glowPhoto,
    photoPosition: 'object-center',
  },
  {
    name: 'Colin Crockatt Classic',
    title: 'Colin Crockatt Classic',
    typicalDates: 'Third weekend in March',
    format: 'An open and mixed bonspiel that is popular with both local and visiting teams.',
    included: "A full event day with friendly competition and the club's usual warm hospitality.",
    contact: 'Travis Lawrence & Kyle Grandmont',
    registration: 'Please contact the club for registration timing and details.',
    photo: crockattPhoto,
    photoPosition: 'object-top',
  },
]

export function BonspielsPage() {
  return (
    <>
      <PageHero
        eyebrow="Bonspiels"
        title="Bonspiels & Events"
        description="The Argyle Curling Club has a strong tradition of hosting fun, community-focused bonspiels throughout the season."
      />

      <Section eyebrow="Season highlights" title="Upcoming bonspiels">
        <div className="space-y-8">
          {bonspiels.map((spiel) => (
            <div key={spiel.name} className="rounded-xl border border-border bg-card p-8 shadow-card">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                  <h3 className="font-display text-2xl text-burgundy">{spiel.title}</h3>
                  <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <p className="font-semibold text-charcoal">Overview</p>
                      <p className="mt-1">{spiel.format}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">Typical dates</p>
                      <p className="mt-1">{spiel.typicalDates}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">What's included</p>
                      <p className="mt-1">{spiel.included}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-accent/20 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold">Contact person</p>
                  <p className="mt-2 font-semibold text-charcoal">{spiel.contact}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{spiel.registration}</p>
                  <div className="mt-6 overflow-hidden rounded-xl border border-dashed border-[#C8A24A] bg-[#F8F5F0] shadow-sm">
                    <img src={spiel.photo} alt={`${spiel.name} photo`} className={`h-48 w-full object-cover ${spiel.photoPosition}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Registration" title="Please check early" description="Bonspiel registration often fills quickly. We recommend reaching out early if you would like to be part of one of these community events.">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <p className="text-sm leading-relaxed text-muted-foreground">
            For the latest registration information, please contact the club president or email argylecurlingclub@gmail.com.
          </p>
          <Link to="/contact" className="mt-5 inline-flex items-center rounded-md bg-burgundy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-burgundy-dark">
            Contact the club <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}

