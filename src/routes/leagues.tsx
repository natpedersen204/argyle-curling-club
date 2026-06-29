import { Link } from '@tanstack/react-router'
import { PageHero, Section } from '../components/Section'
import { ArrowRight } from 'lucide-react'

const leagueTable = [
  {
    league: 'Seniors League',
    day: 'Tuesday',
    time: 'Mornings',
    contact: 'Lyle Appleyard',
    phone: '204-467-5826',
  },
  {
    league: "Men's League",
    day: 'Wednesday',
    time: 'Nights',
    contact: 'Robert Nolting',
    phone: '204-781-0853',
  },
  {
    league: 'Open Drop In',
    day: 'Thursday',
    time: 'Mornings',
    contact: 'Terry Billingham',
    phone: '204-981-9006',
  },
  {
    league: 'Ladies League',
    day: 'Thursday',
    time: 'Nights',
    contact: 'Virginia Crockatt',
    phone: '204-461-3653',
  },
  {
    league: 'Youth League',
    day: 'Every Second Sunday',
    time: 'Afternoon',
    contact: 'Sarah Barton',
    phone: '204-997-6651',
  },
]

const leagueCards = [
  {
    name: 'Seniors League',
    description: 'A welcoming Tuesday morning league with a long history in the club and a strong emphasis on community.',
    skill: 'All skill levels',
    welcome: 'Newcomers are always welcome to join the fun.',
  },
  {
    name: "Men's League",
    description: 'A Wednesday night league for members who enjoy a more structured weekly game.',
    skill: 'All skill levels',
    welcome: 'Friendly competition and a strong social atmosphere.',
  },
  {
    name: 'Open Drop In',
    description: 'A flexible Thursday morning option for curlers who want a relaxed, open session during the week.',
    skill: 'Open to all',
    welcome: 'A great way to try the game or get on the ice without committing to a full team schedule.',
  },
  {
    name: 'Ladies League',
    description: 'A Thursday night league with a strong social side and a welcoming atmosphere.',
    skill: 'All skill levels',
    welcome: 'A good fit for experienced curlers and first-time participants alike.',
  },
  {
    name: 'Youth League',
    description: 'A fun, supportive option for younger curlers and their families, held every second Sunday.',
    skill: 'Beginner to developing',
    welcome: 'The youth league is designed to be encouraging and easy to join.',
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
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leagueTable.map((league) => (
                <tr key={league.league}>
                  <td className="px-4 py-3 font-medium text-charcoal">{league.league}</td>
                  <td className="px-4 py-3 text-charcoal">{league.day}</td>
                  <td className="px-4 py-3 text-charcoal">{league.time}</td>
                  <td className="px-4 py-3 text-charcoal">{league.contact}</td>
                  <td className="px-4 py-3 text-muted-foreground">{league.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="League details" title="More about each league" className="bg-accent/20">
        <div className="grid gap-6 lg:grid-cols-2">
          {leagueCards.map((league) => (
            <div key={league.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl text-burgundy">{league.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{league.description}</p>
              <div className="mt-4 space-y-2 text-sm text-charcoal">
                <p><span className="font-semibold text-burgundy">Skill level:</span> {league.skill}</p>
                <p><span className="font-semibold text-burgundy">Welcoming message:</span> {league.welcome}</p>
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
