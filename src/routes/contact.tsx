import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { PageHero, Section } from '../components/Section'
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(2, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const contactTopics = [
  {
    title: 'Leagues & Membership',
    description: 'Ask about league schedules, registration questions, and beginner-friendly ways to get involved.',
    to: '/leagues',
  },
  {
    title: 'Facility Rentals',
    description: 'Inquire about renting the ice, lounge, or clubhouse for events and community gatherings.',
    to: '/rentals',
  },
  {
    title: 'Sponsorships',
    description: 'Reach out about local partnerships, sponsorship opportunities, and community support.',
    to: '/sponsors',
  },
  {
    title: 'General Club Questions',
    description: 'Use this for general information, club updates, or to be directed to the right volunteer.',
    to: '/contact',
  },
]

const hours = [
  { day: 'Monday', time: 'Closed (no league play)' },
  { day: 'Tuesday', time: 'Closed (no league play)' },
  { day: 'Wednesday', time: '12:00 PM – 4:00 PM (Ladies\' League)' },
  { day: 'Thursday', time: '6:00 PM – 10:00 PM (Men\'s League)' },
  { day: 'Friday', time: '6:00 PM – 10:00 PM (Mixed League)' },
  { day: 'Saturday', time: '8:30 AM – 12:00 PM (Youth League)' },
  { day: 'Sunday', time: 'Closed' },
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: FormData) => {
    // TODO: wire up to a backend, Formspree, or email service
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a question about joining, renting the facility, or upcoming events? We'd love to hear from you."
      />

      <Section eyebrow="Who to Contact" title="Start with the right place" description="These quick paths make it easier for visitors to reach the right information without needing to sort through the whole site first.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactTopics.map((topic) => (
            <div key={topic.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-xl text-burgundy">{topic.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
              <a href={topic.to} className="mt-4 inline-flex items-center text-sm font-semibold text-burgundy hover:text-burgundy-dark">
                Open page <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Reach Out" title="Send Us a Message">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-xl border border-border bg-accent/30 p-10 text-center">
                <span className="text-4xl">🎿</span>
                <h3 className="mt-4 font-display text-2xl text-burgundy">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. We will get back to you within one to two business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-burgundy hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      {...register('name')}
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-charcoal placeholder:text-muted-foreground focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20"
                      placeholder="Jane Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...register('email')}
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-charcoal placeholder:text-muted-foreground focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20"
                      placeholder="jane@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    {...register('subject')}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-charcoal placeholder:text-muted-foreground focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20"
                    placeholder="League registration, rental inquiry, etc."
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-charcoal placeholder:text-muted-foreground focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20"
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-burgundy px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-burgundy-dark disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-xl text-burgundy">Club Information</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-charcoal">Address</p>
                    <p className="text-muted-foreground">41 E PR 323<br />Argyle, MB R0C 0B0</p>
                  </div>
                </li>
                <li className="flex gap-3 text-sm">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-charcoal">Phone</p>
                    <a href="tel:+12045550100" className="text-muted-foreground hover:text-burgundy">
                      (204) 555-0100
                    </a>
                  </div>
                </li>
                <li className="flex gap-3 text-sm">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <div>
                    <p className="font-medium text-charcoal">Email</p>
                    <a href="mailto:info@argylecurling.ca" className="text-muted-foreground hover:text-burgundy">
                      info@argylecurling.ca
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                <h3 className="font-display text-xl text-burgundy">Club Hours</h3>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">During the 2025–26 season (Oct – Mar)</p>
              <ul className="mt-4 space-y-2">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex justify-between gap-4 text-sm">
                    <span className="font-medium text-charcoal">{day}</span>
                    <span className="text-right text-muted-foreground">{time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Hours extend for bonspiel weekends. Check our news page for updates.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
