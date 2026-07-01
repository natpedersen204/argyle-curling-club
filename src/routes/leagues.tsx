import { Link } from '@tanstack/react-router'
import { PageHero, Section } from '../components/Section'
import { ArrowRight } from 'lucide-react'

const leagueTable = [
  {
    league: 'Seniors League',
    day: 'Tuesday',
    time: 'Mornings',
    contact: 'Lyle Appleyard'
  },
  {
    league: "Men's League",
    day: 'Wednesday',
    time: 'Nights',
    contact: 'Robert Nolting'
  },
  {
    league: 'Open Drop In',
    day: 'Thursday',
    time: 'Mornings',
    contact: 'Terry Billingham'
  },
  {
    league: 'Ladies League',
    day: 'Thursday',
    time: 'Nights',
    contact: 'Virginia Crockatt'
  },
  {
    league: 'Youth League',
    day: 'Every Second Sunday',
    time: 'Afternoon',
    contact: 'Sarah Barton'
  },
]

const leagueCards = [
  {
    name: 'Seniors League',
    description: 'A Tuesday morning tradition where good curling, coffee, and conversation go hand in hand.',
    skill: 'All skill levels',
    welcome: 'Daytime curlers, retirees, returning players, and anyone looking for a relaxed social league.',
  },
  {
    name: "Men's League",
    description: 'A Wednesday evening league where competition, sportsmanship, and tradition come together on the ice.',
    skill: 'All skill levels',
    welcome: 'Curlers who enjoy competitive games and the club atmosphere.',
  },
  {
    name: 'Open Drop-In',
    description: 'A casual Thursday morning option for anyone looking to get on the ice without committing to a full season.',
    skill: 'Open to all',
    welcome: 'New curlers, flexible schedules, extra practice, or anyone who wants to try curling in a relaxed setting.',
  },
  {
    name: 'Ladies League',
    description: "A Thursday evening league that combines friendly competition with one of the club's most social nights.",
    skill: 'All skill levels',
    welcome: 'Experienced curlers, new players, and anyone looking for a welcoming weekly league.',
  },
  {
    name: 'Youth League',
    description: 'Held every second Sunday, our youth program helps young curlers build skills, confidence, and a love for the game.',
    skill: 'Beginner to developing',
    welcome: 'Kids and families looking for a fun, encouraging introduction to curling.',
  },
]

export function LeaguesPage() {
  return (
    <>
      <PageHero
        eyebrow="Leagues"
        title="Leagues at Argyle"
        description="The club offers a variety of leagues throughout the season. Each one is designed to be welcoming, easy to join, and rooted in the community spirit of Argyle."
      />

      <Section eyebrow="Season overview" title="League schedule">
        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-card">
          <table className="min-w-full text-sm">
            <thead className="bg-accent/30">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">League</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Day</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Time</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contact Person</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leagueTable.map((league) => (
                <tr key={league.league}>
                  <td className="px-4 py-3 font-medium text-charcoal">{league.league}</td>
                  <td className="px-4 py-3 text-charcoal">{league.day}</td>
                  <td className="px-4 py-3 text-charcoal">{league.time}</td>
                  <td className="px-4 py-3 text-charcoal">{league.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">To get in touch with a league contact, visit the <a href="/contact" className="font-semibold text-burgundy hover:text-burgundy-dark">Contact page</a>.</p>
      </Section>

      <Section eyebrow="League details" title="More about each league" className="bg-accent/20">
        <div className="grid gap-6 lg:grid-cols-2">
          {leagueCards.map((league) => (
            <div key={league.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl text-burgundy">{league.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{league.description}</p>
              <div className="mt-4 space-y-2 text-sm text-charcoal">
                <p><span className="font-semibold text-burgundy">Skill level:</span> {league.skill}</p>
                <p><span className="font-semibold text-burgundy">Best for:</span> {league.welcome}</p>
              </div>
              <Link to="/contact" className="mt-5 inline-flex items-center text-sm font-semibold text-burgundy hover:text-burgundy-dark">
                Contact about this league <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="New to curling" title="A welcoming place to begin">
        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          <p className="text-sm leading-relaxed text-muted-foreground">
            New curlers are always welcome. We encourage first-time participants to reach out to the club and ask about the best way to get started. Learn-to-curl sessions are offered at the start of the season, and club equipment is available to help make the first visit easier.
          </p>
          <Link to="/contact" className="mt-5 inline-flex items-center rounded-md bg-burgundy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-burgundy-dark">
            Contact the club <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  )
}
