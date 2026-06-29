import { Link } from '@tanstack/react-router'
import { Section } from '../components/Section'
import { ArrowRight, BadgeCheck, PhoneCall, UsersRound } from 'lucide-react'
import heroPhoto from '../assets/images/IMG_0030.JPEG'
import leaguePhoto from '../assets/images/IMG_9944.JPEG'
import bonspielPhoto from '../assets/images/IMG_9977.JPEG'
import glowPhoto from '../assets/images/IMG_2627.jpeg'
import mensPhoto from '../assets/images/IMG_0025.JPEG'
import mixedGlowPhoto from '../assets/images/IMG_1364.jpeg'
import rentalsPhoto from '../assets/images/IMG_9908.jpeg'
import contactPhoto from '../assets/images/IMG_9944.JPEG'

const heroImage = heroPhoto

const quickLinks = [
  {
    title: 'How do I join a league?',
    description: 'We offer a range of leagues for seniors, men, ladies, mixed, and youth curlers.',
    to: '/leagues',
    image: leaguePhoto,
    icon: UsersRound,
  },
]

const upcomingBonspiels = [
  {
    name: 'Men’s Bonspiel',
    details: 'Typically held the first weekend after New Year’s and often runs through the weekend.',
    link: '/bonspiels',
    image: mensPhoto,
  },
  {
    name: 'Seniors Daytime Bonspiel',
    details: 'Usually held in the third or fourth week of January with daytime games and lunch.',
    link: '/bonspiels',
    image: bonspielPhoto,
  },
  {
    name: 'Ladies Bonspiel',
    details: 'Traditionally hosted the first weekend in February.',
    link: '/bonspiels',
    image: glowPhoto,
  },
  {
    name: 'Mixed Glow Bonspiel',
    details: 'Usually held in the third weekend in February.',
    link: '/bonspiels',
    image: mixedGlowPhoto,
  },
]





export function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#2d1718] text-white">
        <img
          src={heroImage}
          alt="Curling ice and community members in a bright club setting"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(90,22,32,0.88)_0%,rgba(90,22,32,0.65)_42%,rgba(26,26,26,0.25)_100%)]" />
        <div className="container-page relative z-10 flex min-h-[78vh] items-end py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#f7ddb0] backdrop-blur-sm">
              <BadgeCheck className="mr-2 h-3.5 w-3.5" />
              Established 1939
            </div>
            <h1
              className="mt-5 text-balance text-5xl text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
            >
              Welcome to the Argyle Curling Club
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              Located in Argyle, Manitoba, the club has long been a centre for sport, recreation, and community fellowship. Whether you are joining a league, attending a bonspiel, or looking for a welcoming place to gather, there is a place for you here.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/leagues"
                className="inline-flex items-center rounded-full bg-[#C8A24A] px-7 py-3.5 text-sm font-semibold text-[#5A1620] shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D8B96A]"
              >
                Explore Leagues <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-8 sm:-mt-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#e7dac4] bg-[#f8f3e8] px-4 py-8 shadow-[0_16px_45px_rgba(26,26,26,0.06)] sm:px-6 lg:px-8 lg:py-10">
          <Section eyebrow="Start here" title="How do I join a league?" description="We offer a range of leagues for seniors, men, ladies, mixed, and youth curlers. The best first step is to visit the league page and get in touch with the club.">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#e7dac4] bg-[#efe2ca] shadow-sm">
                <img
                  src={leaguePhoto}
                  alt="Members gathered around the curling club"
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                {quickLinks.slice(0, 2).map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-[1.25rem] border border-[#e7dac4] bg-white/80 p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A24A]/15 text-[#7A1F2B]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-display text-xl text-[#7A1F2B]">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      <Link to={item.to} className="mt-4 inline-flex items-center text-sm font-semibold text-[#7A1F2B] hover:text-[#5A1620]">
                        Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </Section>
        </div>
      </div>

      <Section eyebrow="Coming up" title="What bonspiels are coming up?" className="rounded-[2rem] border border-[#e7dac4] bg-[#f7efe0] px-4 py-14 shadow-[0_16px_45px_rgba(26,26,26,0.05)] sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#e7dac4] bg-[#efe2ca] shadow-sm">
            <img
              src={bonspielPhoto}
              alt="Curling club event layout"
              className="h-72 w-full object-cover"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingBonspiels.map((spiel) => (
              <div key={spiel.name} className="rounded-[1.25rem] border border-[#e7dac4] bg-white/80 p-6 shadow-sm">
                <img src={spiel.image} alt={spiel.name} className="h-32 w-full rounded-[1rem] object-cover" />
                <h3 className="mt-4 font-display text-xl text-[#7A1F2B]">{spiel.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{spiel.details}</p>
                <Link to={spiel.link} className="mt-4 inline-flex items-center text-sm font-semibold text-[#7A1F2B] hover:text-[#5A1620]">
                  View event details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Gatherings & events" title="Can I rent the club?" description="Our clubhouse and event spaces are available for meetings, socials, birthdays, and community celebrations." className="rounded-[2rem] border border-[#e7dac4] bg-[#f8f3e8] px-4 py-14 shadow-[0_16px_45px_rgba(26,26,26,0.05)] sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#e7dac4] bg-[#efe2ca] shadow-sm">
            <img
              src={rentalsPhoto}
              alt="Warm interior gathering space"
              className="h-72 w-full object-cover"
            />
          </div>
          <div className="rounded-[1.5rem] border border-[#e7dac4] bg-white/80 p-7 shadow-sm">
            <p className="text-sm leading-relaxed text-muted-foreground">
              The club offers a warm, welcoming environment for private gatherings. The space is practical for everything from smaller meetings to larger celebrations.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C8A24A]" /> Meetings and community group gatherings</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C8A24A]" /> Birthday parties and family celebrations</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C8A24A]" /> Team socials and post-game events</li>
            </ul>
            <Link to="/rentals" className="mt-6 inline-flex items-center rounded-full bg-[#C8A24A] px-5 py-3 text-sm font-semibold text-[#5A1620] transition-colors hover:bg-[#D8B96A]">
              Contact us about rentals <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>



      <Section eyebrow="Get in touch" title="Contact Information" className="rounded-[2rem] border border-[#e7dac4] bg-[#f7efe0] px-4 py-14 shadow-[0_16px_45px_rgba(26,26,26,0.05)] sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="overflow-hidden rounded-[1.5rem] border border-[#e7dac4] bg-[#efe2ca] shadow-sm">
            <img
              src={contactPhoto}
              alt="Friendly club contact setting"
              className="h-72 w-full object-cover"
            />
          </div>
          <div className="rounded-[1.5rem] border border-[#e7dac4] bg-white/80 p-7 shadow-sm">
            <div className="flex items-center gap-2 text-[#7A1F2B]">
              <PhoneCall className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8A24A]">Reach out</p>
            </div>
            <h3 className="mt-3 font-display text-3xl text-[#7A1F2B]">We would love to hear from you</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For questions about joining, hosting an event, or staying connected, the club is glad to help.
            </p>
            <div className="mt-5 space-y-3 text-sm text-muted-foreground">
              <p><span className="font-semibold text-[#7A1F2B]">Phone:</span> (204) 461-0009</p>
              <p><span className="font-semibold text-[#7A1F2B]">Address:</span> 41 E PR 323, Argyle, MB R0C 0B0</p>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center rounded-full bg-[#C8A24A] px-5 py-3 text-sm font-semibold text-[#5A1620] transition-colors hover:bg-[#D8B96A]">
              Contact us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
