import { Link } from '@tanstack/react-router'
import { Section } from '../components/Section'
import { ArrowRight } from 'lucide-react'

const heroImage = '/src/assets/images/HERO-01.jpg'
const heroBackgroundClass = heroImage ? 'bg-charcoal' : 'bg-burgundy'

const quickLinks = [
  {
    title: 'How do I join a league?',
    description: 'We offer a range of leagues for seniors, men, ladies, mixed, and youth curlers.',
    to: '/leagues',
  },
  {
    title: 'What bonspiels are coming up?',
    description: 'Our season includes several community bonspiels and special events.',
    to: '/bonspiels',
  },
  {
    title: 'Can I rent the club?',
    description: 'The clubhouse and event space are available for community gatherings and celebrations.',
    to: '/rentals',
  },
  {
    title: 'What’s happening at the club?',
    description: 'Follow the latest updates, announcements, and community news here.',
    to: '/news',
  },
]

const upcomingBonspiels = [
  {
    name: 'Men’s Bonspiel',
    details: 'Typically held the first weekend after New Year’s and often runs through the weekend.',
    link: '/bonspiels',
  },
  {
    name: 'Seniors Daytime Bonspiel',
    details: 'Usually held in the third or fourth week of January with daytime games and lunch.',
    link: '/bonspiels',
  },
  {
    name: 'Ladies Bonspiel',
    details: 'Traditionally hosted the first weekend in February.',
    link: '/bonspiels',
  },
  {
    name: 'Mixed Glow Bonspiel',
    details: 'Usually held the third weekend in February.',
    link: '/bonspiels',
  },
]

const newsItems = [
  {
    title: 'Season updates and announcements',
    summary: 'Visit the club news page for current information about draws, events, and volunteer updates.',
  },
  {
    title: 'Community connection',
    summary: 'The club remains a welcoming place for league play, social gatherings, and local fellowship.',
  },
]

const socialLinks = [
  { name: 'Facebook', handle: '@argylecurlingclub', url: '#' },
  { name: 'Instagram', handle: '@argylecurlingclub', url: '#' },
  { name: 'TikTok', handle: '@argylecurlingclub', url: '#' },
]

const sponsors = [
  { name: 'Sponsor Name TBD', blurb: 'Local support for club events and community activities.' },
  { name: 'Sponsor Name TBD', blurb: 'Community partnership placeholder.' },
  { name: 'Sponsor Name TBD', blurb: 'Supporter of the club and its events.' },
]

export function HomePage() {
  return (
    <>
      <section className={`relative overflow-hidden ${heroBackgroundClass} text-white`}>
        {heroImage ? (
          <img
            src={heroImage}
            alt="Curling ice and community members in a bright club setting"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(90,22,32,0.9)_0%,rgba(90,22,32,0.7)_48%,rgba(26,26,26,0.55)_100%)]" />
        <div className="container-page relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B96A]">
              Argyle, Manitoba · Since 1939
            </p>
            <h1
              className="mt-4 text-balance text-5xl text-white sm:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
            >
              Welcome to the Argyle Curling Club
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Located in Argyle, Manitoba, the club has long been a centre for sport, recreation, and community fellowship. Whether you are joining a league, attending a bonspiel, or looking for a welcoming place to gather, there is a place for you here.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/leagues"
                className="inline-flex items-center rounded-md bg-[#C8A24A] px-7 py-3.5 text-sm font-semibold text-[#5A1620] shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D8B96A]"
              >
                Explore Leagues <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D8B96A] hover:text-[#D8B96A]"
              >
                Contact the Club
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Start here" title="How do I join a league?" description="We offer a range of leagues for seniors, men, ladies, mixed, and youth curlers. The best first step is to visit the league page and get in touch with the club.">
        <div className="grid gap-6 lg:grid-cols-2">
          {quickLinks.slice(0, 2).map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl text-[#7A1F2B]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <Link to={item.to} className="mt-4 inline-flex items-center text-sm font-semibold text-[#7A1F2B] hover:text-[#5A1620]">
                Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Coming up" title="What bonspiels are coming up?" className="bg-[#F4EFE8]/70">
        <div className="grid gap-6 lg:grid-cols-2">
          {upcomingBonspiels.map((spiel) => (
            <div key={spiel.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl text-[#7A1F2B]">{spiel.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{spiel.details}</p>
              <Link to={spiel.link} className="mt-4 inline-flex items-center text-sm font-semibold text-[#7A1F2B] hover:text-[#5A1620]">
                View event details <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Gatherings & events" title="Can I rent the club?" description="Our clubhouse and event spaces are available for meetings, socials, birthdays, and community celebrations.">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-sm leading-relaxed text-muted-foreground">
              The club offers a warm, welcoming environment for private gatherings. The space is practical for everything from smaller meetings to larger celebrations.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Meetings and community group gatherings</li>
              <li>• Birthday parties and family celebrations</li>
              <li>• Team socials and post-game events</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-[#5A1620] p-8 text-[#F8F5F0] shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B96A]">Club Rentals</p>
            <h3 className="mt-3 font-display text-3xl text-white">A welcoming place to host your next gathering</h3>
            <Link to="/rentals" className="mt-6 inline-flex items-center rounded-md bg-[#C8A24A] px-5 py-3 text-sm font-semibold text-[#5A1620] transition-colors hover:bg-[#D8B96A]">
              Contact us about rentals <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Club news" title="What’s happening at the club?" className="bg-[#F4EFE8]/70">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-[#7A1F2B]">Club News & Announcements</h3>
            {newsItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h4 className="font-display text-xl text-[#7A1F2B]">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-2xl text-[#7A1F2B]">Life at Argyle Curling Club</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A live Instagram feed can be added here in a future update. Until then, we are using photo placeholders and social links to keep the section ready for fresh content.
            </p>
            <div className="mt-6 rounded-xl border border-dashed border-[#C8A24A] bg-[#F8F5F0] p-6 text-center text-sm text-muted-foreground">
              Photo placeholder: LIFE-AT-CLUB-01.jpg
            </div>
            <div className="mt-6 space-y-3">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-[#7A1F2B] hover:bg-[#F8F5F0]">
                  <span>{link.name}</span>
                  <span className="text-muted-foreground">{link.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Community support" title="Sponsors">
        <div className="grid gap-4 md:grid-cols-3">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl text-[#7A1F2B]">{sponsor.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sponsor.blurb}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Get in touch" title="Contact Information">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Questions about leagues, rentals, events, or volunteering? The club is happy to help direct you to the right person.
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p><span className="font-semibold text-[#7A1F2B]">Phone:</span> (204) 555-0100</p>
              <p><span className="font-semibold text-[#7A1F2B]">Email:</span> info@argylecurling.ca</p>
              <p><span className="font-semibold text-[#7A1F2B]">Address:</span> 41 E PR 323, Argyle, MB R0C 0B0</p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#5A1620] p-8 text-[#F8F5F0] shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B96A]">Reach out</p>
            <h3 className="mt-3 font-display text-3xl text-white">We would love to hear from you</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              For questions about joining, hosting an event, or staying connected, the club is glad to help.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center rounded-md bg-[#C8A24A] px-5 py-3 text-sm font-semibold text-[#5A1620] transition-colors hover:bg-[#D8B96A]">
              Contact us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
