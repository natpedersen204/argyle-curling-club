import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { X, ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react'
import glowHeroImg from '../assets/images/IMG_3064.JPEG'
import g1 from '../assets/images/IMG_2627.jpeg'
import g2 from '../assets/images/IMG_1364.jpeg'
import g3 from '../assets/images/IMG_3062.JPEG'
import g4 from '../assets/images/IMG_3063.JPEG'
import g5 from '../assets/images/IMG_2626.jpeg'
import g6 from '../assets/images/IMG_2624.jpeg'

const galleryImages = [
  { src: g1, caption: 'Glow Curling Night' },
  { src: g2, caption: 'Teams lighting up the ice' },
  { src: g3, caption: 'The rink under black lights' },
  { src: g4, caption: 'Curling under the glow' },
  { src: g5, caption: 'Neon night on the ice' },
  { src: g6, caption: 'Another great glow night' },
]

const features = [
  { icon: '🥌', title: 'Curling Under Black Lights', description: 'The ice comes alive with neon stones and glowing targets. Everything you know about curling, turned up a few notches.' },
  { icon: '🎵', title: 'Music All Night', description: 'A great playlist keeps the energy up from the first rock to the last end.' },
  { icon: '👕', title: 'Creative Costumes', description: 'Neon, glow-in-the-dark, and blacklight outfits are highly encouraged. The more creative, the better.' },
  { icon: '🍕', title: 'Food & Drinks', description: 'The bar is open and the kitchen is running. Fuel up between ends.' },
  { icon: '😂', title: 'Community Atmosphere', description: 'Friendly, fun, and wide open to all skill levels. This is curling the way it was meant to be enjoyed.' },
  { icon: '🏆', title: 'Friendly Competition', description: 'Teams compete but the real prize is the memories. Bragging rights included.' },
]

const faqs = [
  { q: 'What should I wear?', a: 'Anything that glows, fluoresces, or lights up under black lights. White and neon colours work great. The more creative, the better.' },
  { q: 'Do I need curling experience?', a: 'Not at all. Glow Curling is designed to be fun and accessible for everyone, from first-timers to seasoned curlers.' },
  { q: 'Is equipment supplied?', a: 'Yes. Rocks and brooms are provided. Just bring yourself, your team, and a sense of fun.' },
  { q: 'Can kids participate?', a: 'Absolutely. Glow Curling is a family-friendly event and kids tend to be the most enthusiastic participants.' },
  { q: 'How many people are on a team?', a: 'Standard curling teams are four players, but we can accommodate different group sizes. Contact us for details.' },
]

const facts = [
  { label: 'Years Running', value: '5+' },
  { label: 'Teams Per Event', value: '16' },
  { label: 'Best Costume', value: 'TBD' },
  { label: 'Avg. Attendance', value: '60+' },
]

export function GlowPage() {
  const [glow, setGlow] = useState(() => {
    try { return localStorage.getItem('argyle-glow') === 'true' } catch { return false }
  })
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggle = () => {
    setGlow(prev => {
      const next = !prev
      try { localStorage.setItem('argyle-glow', String(next)) } catch {}
      return next
    })
  }

  useEffect(() => {
    if (lightboxIdx === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null)
      if (e.key === 'ArrowRight') setLightboxIdx(i => i !== null ? Math.min(i + 1, galleryImages.length - 1) : null)
      if (e.key === 'ArrowLeft') setLightboxIdx(i => i !== null ? Math.max(i - 1, 0) : null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIdx])

  const tr = 'transition-all duration-[400ms]'

  const theme = {
    bg:          glow ? '#080808' : '#f8f3e8',
    altBg:       glow ? '#0d0d0d' : '#f0e9d8',
    cardBg:      glow ? '#111111' : '#ffffff',
    cardBorder:  glow ? 'rgba(255,0,170,0.25)' : '#e7dac4',
    heading:     glow ? '#ff2eff' : '#7A1F2B',
    accent:      glow ? '#ffee00' : '#C8A24A',
    text:        glow ? '#f0f0f0' : '#2B2B2B',
    muted:       glow ? 'rgba(240,240,240,0.6)' : 'rgba(43,43,43,0.65)',
    headingGlow: glow ? '0 0 12px rgba(255,0,170,0.7)' : 'none',
    cardShadow:  glow ? '0 0 16px rgba(255,0,170,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
    photoBorder: glow ? '1px solid rgba(255,0,170,0.4)' : '1px solid #e7dac4',
    photoShadow: glow ? '0 0 16px rgba(255,0,170,0.25)' : '0 2px 8px rgba(0,0,0,0.06)',
  }

  return (
    <div style={{ background: theme.bg, color: theme.text }} className={tr}>

      {/* Mode toggle strip */}
      <div style={{ background: theme.altBg, borderBottom: `1px solid ${theme.cardBorder}` }} className={tr}>
        <div className="container-page flex items-center justify-between py-3">
          <span style={{ color: theme.accent }} className={`text-xs font-semibold uppercase tracking-[0.2em] ${tr}`}>
            Glow Curling Night
          </span>
          <button
            onClick={toggle}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${tr}`}
            style={{
              background: glow ? 'rgba(255,0,170,0.12)' : 'rgba(122,31,43,0.08)',
              border: `1px solid ${glow ? 'rgba(255,0,170,0.35)' : 'rgba(122,31,43,0.2)'}`,
              color: glow ? '#ff2eff' : '#7A1F2B',
              boxShadow: glow ? '0 0 10px rgba(255,0,170,0.15)' : 'none',
            }}
          >
            {glow ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {glow ? 'Classic Mode' : 'Enter Glow Mode'}
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="relative isolate overflow-hidden" style={{ minHeight: '80vh' }}>
        <img
          src={glowHeroImg}
          alt="Glow Curling at Argyle Curling Club"
          className={`absolute inset-0 h-full w-full object-cover ${tr}`}
          style={{ filter: glow ? 'brightness(0.45) saturate(1.8)' : 'brightness(0.55)' }}
        />
        <div
          className={`absolute inset-0 ${tr}`}
          style={{
            background: glow
              ? 'linear-gradient(135deg, rgba(60,0,80,0.92) 0%, rgba(8,0,20,0.65) 70%, transparent 100%)'
              : 'linear-gradient(135deg, rgba(26,8,12,0.9) 0%, rgba(26,8,12,0.5) 70%, transparent 100%)'
          }}
        />
        <div className="container-page relative z-10 flex min-h-[80vh] items-end py-20">
          <div className="max-w-2xl">
            <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${tr}`} style={{ color: theme.accent, textShadow: glow ? '0 0 8px rgba(255,238,0,0.7)' : 'none' }}>
              Argyle Curling Club
            </p>
            <h1 className={`mt-4 font-display text-5xl text-white sm:text-6xl lg:text-7xl ${tr}`} style={{ textShadow: glow ? '0 0 30px rgba(255,0,170,0.6), 0 0 60px rgba(255,0,170,0.3)' : 'none' }}>
              Experience Glow Curling
            </h1>
            <p className="mt-5 text-lg text-white/80">
              When the lights go out, the fun begins.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={toggle}
                className={`rounded-full px-7 py-3.5 text-sm font-semibold ${tr}`}
                style={{
                  background: glow ? '#C8A24A' : '#ff00aa',
                  color: '#000000',
                  boxShadow: glow ? 'none' : '0 0 24px rgba(255,0,170,0.55)',
                }}
              >
                {glow ? 'Return to Classic' : 'Enter Glow Mode'}
              </button>
              <Link
                to="/bonspiels"
                className={`rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:border-white/60 ${tr}`}
              >
                View All Bonspiels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={`container-page py-24 ${tr}`}>
        <div className="mx-auto max-w-3xl">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${tr}`} style={{ color: theme.accent }}>Our Story</p>
          <h2 className={`mt-3 font-display text-4xl sm:text-5xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>
            How Glow Curling Began
          </h2>
          <div className={`mt-8 space-y-5 text-base leading-relaxed ${tr}`} style={{ color: theme.muted }}>
            <p>
              A few years ago, a small group of club members had a simple idea: what would happen if we turned off the lights, switched on the black lights, and let a curling night unfold? The answer, it turned out, was one of the most memorable evenings in recent club history.
            </p>
            <blockquote
              className={`my-10 border-l-4 py-2 pl-6 font-display text-2xl italic ${tr}`}
              style={{ borderColor: theme.accent, color: theme.heading, textShadow: theme.headingGlow }}
            >
              Nobody knew exactly what to expect. By the third end, nobody wanted it to stop.
            </blockquote>
            <p>
              What started as a one-off experiment quickly became one of the most anticipated events on the Argyle calendar. Teams started showing up in neon outfits. The costumes got more creative each year. The music got louder. The laughter never stopped.
            </p>
            <p>
              Today, the Mixed Glow Bonspiel is a signature event for the club. A night where the spirit of curling meets a whole lot of fun.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-20 ${tr}`} style={{ background: theme.altBg }}>
        <div className="container-page">
          <div className="mx-auto max-w-xl text-center mb-14">
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${tr}`} style={{ color: theme.accent }}>Why Everyone Loves It</p>
            <h2 className={`mt-3 font-display text-4xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>
              What Makes Glow Night Special
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(f => (
              <div
                key={f.title}
                className={`rounded-2xl border p-7 ${tr}`}
                style={{ background: theme.cardBg, borderColor: theme.cardBorder, boxShadow: theme.cardShadow }}
              >
                <span className="text-4xl">{f.icon}</span>
                <h3 className={`mt-4 font-display text-xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>{f.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${tr}`} style={{ color: theme.muted }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`container-page py-24 ${tr}`}>
        <div className="mx-auto max-w-xl text-center mb-14">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${tr}`} style={{ color: theme.accent }}>From the Ice</p>
          <h2 className={`mt-3 font-display text-4xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>
            Glow Nights in Photos
          </h2>
          <p className={`mt-3 text-sm ${tr}`} style={{ color: theme.muted }}>Click any photo to view full size.</p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl ${tr}`}
              style={{ border: theme.photoBorder, boxShadow: theme.photoShadow }}
              onClick={() => setLightboxIdx(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setLightboxIdx(i)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className={`py-20 ${tr}`} style={{ background: theme.altBg }}>
        <div className="container-page">
          <div className="mx-auto max-w-xl text-center mb-10">
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${tr}`} style={{ color: theme.accent }}>Watch</p>
            <h2 className={`mt-3 font-display text-4xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>
              See Glow Curling in Action
            </h2>
          </div>
          <div
            className={`mx-auto flex max-w-3xl aspect-video items-center justify-center rounded-2xl ${tr}`}
            style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}`, boxShadow: theme.cardShadow }}
          >
            <p className={`text-sm ${tr}`} style={{ color: theme.muted }}>Video coming soon</p>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className={`container-page py-24 ${tr}`}>
        <div className="mx-auto max-w-xl text-center mb-14">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${tr}`} style={{ color: theme.accent }}>By the Numbers</p>
          <h2 className={`mt-3 font-display text-4xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>
            Glow Night Facts
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {facts.map(fact => (
            <div
              key={fact.label}
              className={`rounded-2xl border p-8 text-center ${tr}`}
              style={{ background: theme.cardBg, borderColor: theme.cardBorder, boxShadow: theme.cardShadow }}
            >
              <p className={`font-display text-5xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>{fact.value}</p>
              <p className={`mt-3 text-xs font-semibold uppercase tracking-widest ${tr}`} style={{ color: theme.muted }}>{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-20 ${tr}`} style={{ background: theme.altBg }}>
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${tr}`} style={{ color: theme.accent }}>Questions</p>
              <h2 className={`mt-3 font-display text-4xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>
                Frequently Asked
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl border ${tr}`}
                  style={{ background: theme.cardBg, borderColor: theme.cardBorder }}
                >
                  <button
                    className={`flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold ${tr}`}
                    style={{ color: theme.heading }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span
                      className="ml-4 shrink-0 text-xl transition-transform duration-300"
                      style={{ color: theme.accent, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)', display: 'inline-block' }}
                    >+</span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === i ? '200px' : '0px' }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: theme.muted }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`relative overflow-hidden py-28 ${tr}`}
        style={{ background: glow ? '#0a0020' : '#7A1F2B' }}
      >
        {glow && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, rgba(255,0,170,0.18) 0%, transparent 65%)' }}
          />
        )}
        <div className="container-page relative text-center">
          <h2
            className={`font-display text-4xl text-white sm:text-5xl ${tr}`}
            style={{ textShadow: glow ? '0 0 24px rgba(255,0,170,0.6), 0 0 48px rgba(255,0,170,0.3)' : 'none' }}
          >
            Ready to Try Glow Curling?
          </h2>
          <p className="mt-4 text-lg text-white/75">Join us for the next Mixed Glow Bonspiel at the Argyle Curling Club.</p>
          <Link
            to="/contact"
            className={`mt-10 inline-flex items-center rounded-full px-8 py-4 text-sm font-semibold ${tr}`}
            style={{
              background: glow ? '#ff00aa' : '#C8A24A',
              color: glow ? '#000000' : '#5A1620',
              boxShadow: glow ? '0 0 28px rgba(255,0,170,0.55)' : 'none',
            }}
          >
            Register for the Next Glow Bonspiel
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={() => setLightboxIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20"
            onClick={() => setLightboxIdx(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 disabled:opacity-20"
            onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? Math.max(i - 1, 0) : null) }}
            disabled={lightboxIdx === 0}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="max-w-4xl px-16" onClick={e => e.stopPropagation()}>
            <img
              src={galleryImages[lightboxIdx].src}
              alt={galleryImages[lightboxIdx].caption}
              className="max-h-[80vh] rounded-xl object-contain"
              style={{ boxShadow: glow ? '0 0 40px rgba(255,0,170,0.3)' : '0 8px 32px rgba(0,0,0,0.5)' }}
            />
            <p className="mt-3 text-center text-sm text-white/60">{galleryImages[lightboxIdx].caption}</p>
            <p className="mt-1 text-center text-xs text-white/30">{lightboxIdx + 1} / {galleryImages.length}</p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 disabled:opacity-20"
            onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? Math.min(i + 1, galleryImages.length - 1) : null) }}
            disabled={lightboxIdx === galleryImages.length - 1}
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
