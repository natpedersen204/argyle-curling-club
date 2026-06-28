import { Link } from '@tanstack/react-router'
import { PageHero, Section } from '../components/Section'
import { ArrowRight, Heart, Snowflake, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Community First',
    description: 'The club is built on volunteer effort, shared responsibility, and a strong sense of community.',
  },
  {
    icon: Users,
    title: 'All Are Welcome',
    description: 'Whether you are new to the sport or have been curling for years, there is a place for you here.',
  },
  {
    icon: Snowflake,
    title: 'Love of the Game',
    description: 'Curling brings people together for sport, laughter, and fellowship long after the final end.',
  },
]

const boardMembers = [
  { position: 'President', name: 'Chad Thoresby', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Treasurer', name: 'Pam Crockatt', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Bar Manager', name: 'Ryley Buchanan', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Ice Techs', name: 'Riley Buchanan & Trevor Buchanan', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Men’s League Rep', name: 'Robert Nolting', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Ladies League Rep', name: 'Virginia Crockatt', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Men’s Bonspiel Rep', name: 'Trevor Buchanan', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Ladies Bonspiel Rep', name: 'Pam Crockatt', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Mixed Glow Bonspiel Rep', name: 'Riley Buchanan', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Colin Crockatt Classic Rep', name: 'Travis Lawrence & Kyle Grandmont', phone: 'Phone TBD', email: 'Email TBD' },
  { position: 'Seniors League Rep', name: 'Bruce Buchanan', phone: 'Phone TBD', email: 'Email TBD' },
]

const facilityHighlights = [
  'Three sheets of ice maintained by volunteer ice techs',
  'A warm clubhouse and lounge for after-game visits and events',
  'A full kitchen and licensed bar service with advance notice',
  'Accessible entry and free parking on site',
]

const galleryPlaceholders = [
  'HISTORY-01.jpg',
  'HISTORY-02.jpg',
  'FACILITY-01.jpg',
  'CLUB-ROOM-01.jpg',
]

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About the Argyle Curling Club"
        description="The Argyle Curling Club is a volunteer-run gathering place for sport, community, and tradition in Argyle, Manitoba."
      />

      <Section eyebrow="Welcome" title="A place for community and curling">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              We are proud to be a small-town club with a strong tradition of welcoming neighbours, families, and visiting curlers alike.
            </p>
            <p>
              The club has long been a place for league play, bonspiels, social gatherings, and the kind of community connection that grows over time.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-xl text-burgundy">Quick facts</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• Founded in 1939</li>
              <li>• Located in Argyle, Manitoba</li>
              <li>• Volunteer-run and community focused</li>
              <li>• Home to leagues, bonspiels, and social events</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="Location" title="Visit the club" className="bg-accent/20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <p className="text-sm leading-relaxed text-muted-foreground">
              We are located in Argyle, Manitoba, in the RM of Rockwood, about a 20-minute drive northwest of the Perimeter Highway.
            </p>
            <a href="https://www.google.com/maps/search/Argyle+Manitoba" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center text-sm font-semibold text-burgundy hover:text-burgundy-dark">
              Open Google Maps <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </a>
          </div>
          <div className="rounded-xl border border-dashed border-[#C8A24A] bg-[#F8F5F0] p-8 text-center text-sm text-muted-foreground">
            Map placeholder: ARGYLE-MAP-01.jpg
          </div>
        </div>
      </Section>

      <Section eyebrow="History" title="Our story">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              The Argyle Curling Club began as a local effort to create a place for winter recreation, fellowship, and community connection.
            </p>
            <p>
              The first rink was built in 1939, with volunteer labour and community fundraising, and it quickly became a gathering place for local families and curlers.
            </p>
            <p>
              Over time, the club grew into the modern facility that serves the community today, with three sheets of ice, a clubhouse, and a long tradition of welcoming both members and visitors.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-xl text-burgundy">Read More</h3>
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-semibold text-burgundy">View the full historical story</summary>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The club grew out of community gatherings at the Brant-Argyle School, where dances, meetings, concerts, and checkers tournaments brought neighbours together in the 1920s.
                </p>
                <p>
                  By 1929, local volunteers recognized the need for a curling rink and began fundraising through raffle tickets, community donations, and public events. The first rink was built in 1939 with a great deal of volunteer help, and the opening night was a major community event.
                </p>
                <p>
                  In the 1970s, the need for a larger facility became clear, and fundraising efforts led to the construction of the present rink, which opened in 1979. Over the years the club has added new features, expanded its facilities, and continued to serve as a social and recreational centre for the area.
                </p>
              </div>
            </details>
          </div>
        </div>
      </Section>

      <Section eyebrow="Leadership" title="Volunteer Board" className="bg-accent/20">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <table className="min-w-full text-sm">
            <thead className="bg-accent/30">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Position</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {boardMembers.map((member) => (
                <tr key={member.position}>
                  <td className="px-4 py-3 font-medium text-charcoal">{member.position}</td>
                  <td className="px-4 py-3 text-charcoal">{member.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{member.phone}</td>
                  <td className="px-4 py-3 text-muted-foreground">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Our facility" title="What makes the club special">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-xl text-burgundy">Our Facility</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {facilityHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#C8A24A]" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display text-xl text-burgundy">Values</h3>
            <div className="mt-4 space-y-4">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title}>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-burgundy" />
                    <h4 className="font-semibold text-charcoal">{title}</h4>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Gallery" title="Photo placeholders" className="bg-accent/20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {galleryPlaceholders.map((placeholder) => (
            <div key={placeholder} className="rounded-xl border border-dashed border-[#C8A24A] bg-[#F8F5F0] p-6 text-center text-sm text-muted-foreground">
              Photo placeholder: {placeholder}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Get involved" title="Join the conversation" align="center" description="The club is shaped by volunteers, members, and neighbours who care about keeping the space welcoming and active each season.">
        <div className="flex justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center rounded-md bg-burgundy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-burgundy-dark">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link to="/leagues" className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-burgundy hover:text-burgundy">
            View Leagues
          </Link>
        </div>
      </Section>
    </>
  )
}
