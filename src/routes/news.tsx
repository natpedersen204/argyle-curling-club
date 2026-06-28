import { Link } from '@tanstack/react-router'
import { PageHero, Section } from '../components/Section'
import { Calendar } from 'lucide-react'

const articles = [
  {
    date: 'November 10, 2025',
    tag: 'Leagues',
    title: 'Registration Still Open for Friday Mixed League',
    excerpt:
      'A few spots remain in our popular Friday Night Mixed League. Teams are two men and two women — great for couples, friends, or anyone looking for a lively end-of-week game. Registration closes November 22.',
  },
  {
    date: 'November 3, 2025',
    tag: 'Club News',
    title: 'New Members Welcome Night a Great Success',
    excerpt:
      'Over 20 prospective members attended our New Members Welcome Night on November 1. Our volunteers ran two learn-to-curl sessions and welcomed everyone into the lounge afterwards. A warm welcome to all who joined!',
  },
  {
    date: 'October 22, 2025',
    tag: 'Results',
    title: 'Argyle Fall Classic Results',
    excerpt:
      'Congratulations to all teams who competed in this year\'s Fall Classic. A Event champions will be announced — check the club bulletin board or contact us for the full results. A huge thank you to our volunteers and sponsors.',
  },
  {
    date: 'October 4, 2025',
    tag: 'Season',
    title: 'Ice is Open — 2025–26 Season Has Begun',
    excerpt:
      'The ice is pebbled, the rocks are out, and the 2025–26 curling season is officially underway. All leagues begin the week of October 6. Contact us if you have questions about your draw time or team placement.',
  },
  {
    date: 'September 15, 2025',
    tag: 'Volunteers',
    title: 'Volunteer Appreciation Night Recap',
    excerpt:
      'We honoured our incredible volunteers at our annual appreciation event in September. Without the dozens of members who give their time to maintain the ice, run events, and keep the club running, none of this would be possible. Thank you.',
  },
  {
    date: 'March 22, 2025',
    tag: 'Season',
    title: '2024–25 Season Wrap-Up and Awards',
    excerpt:
      'The 2024–25 season came to a close with our Spring Closing Bonspiel and Awards Night. Congratulations to all league champions and to our Curler of the Year award recipients. We look forward to seeing everyone on the ice again in October.',
  },
]

const tagColors: Record<string, string> = {
  'Leagues': 'bg-burgundy/10 text-burgundy',
  'Club News': 'bg-gold/15 text-gold',
  'Results': 'bg-green-50 text-green-700',
  'Season': 'bg-blue-50 text-blue-700',
  'Volunteers': 'bg-purple-50 text-purple-700',
}

export function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Latest Updates"
        title="News & Announcements"
        description="Stay up to date with draws, results, events, and everything happening at the Argyle Curling Club."
      />

      <Section eyebrow="Recent Posts" title="Club News">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.title} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <time className="text-xs text-muted-foreground">{a.date}</time>
                <span className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagColors[a.tag] ?? 'bg-muted text-muted-foreground'}`}>
                  {a.tag}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg leading-snug text-burgundy">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Stay connected */}
      <Section eyebrow="Stay in the Loop" title="Never Miss an Update" className="bg-accent/20" align="center"
        description="Follow us on social media for draw updates, event reminders, and behind-the-scenes looks at life at the club.">
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:border-burgundy hover:text-burgundy"
          >
            Follow on Facebook
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-charcoal transition-colors hover:border-burgundy hover:text-burgundy"
          >
            Follow on Instagram
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Or{' '}
          <Link to="/contact" className="font-medium text-burgundy hover:underline">
            contact us directly
          </Link>{' '}
          to be added to our email list.
        </p>
      </Section>
    </>
  )
}
