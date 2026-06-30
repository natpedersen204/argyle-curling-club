import { useState, useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import {
  X, ChevronLeft, ChevronRight, Moon, Sun,
  Zap, Music, Sparkles, Coffee, Heart, Trophy, ArrowRight,
} from 'lucide-react'
import glowHeroImg from '../assets/images/IMG_3064.JPEG'
import g1 from '../assets/images/IMG_3074.JPEG'
import g1b from '../assets/images/IMG_3065.JPEG'
import g2 from '../assets/images/IMG_2627.jpeg'
import g3 from '../assets/images/74874A57-CCCA-49CF-B15A-D2FEAEEA1C36.JPG'
import g4 from '../assets/images/IMG_1364.jpeg'
import g5 from '../assets/images/IMG_3062.JPEG'
import g6 from '../assets/images/IMG_3063.JPEG'
import g7 from '../assets/images/IMG_2626.jpeg'
import g8 from '../assets/images/IMG_2624.jpeg'
import news2021 from '../assets/images/glow/dec 2021 glow.png'
import news2023 from '../assets/images/glow/2023 glow.png'
import news2024 from '../assets/images/glow/2nd ladies.png'
import news2025 from '../assets/images/glow/3rd ladies.png'
import newsGlowThrow from '../assets/images/glow/feb202025 tribune.png'
import newsLadies2026 from '../assets/images/glow/ladies 2026.png'
import newsMixed2026 from '../assets/images/glow/mixed2026.png'

const galleryImages = [
  { src: g1,  caption: 'The Rock Bottoms — costumes are part of the tradition' },
  { src: g1b, caption: 'The full rink under black lights' },
  { src: g2,  caption: 'The rink transformed under black lights' },
  { src: g3,  caption: 'A full sheet of glow curling in action' },
  { src: g4,  caption: 'Neon outfits and glowing rocks' },
  { src: g5,  caption: 'Competing under the lights' },
  { src: g6,  caption: 'Curlers on the glowing ice' },
  { src: g7,  caption: 'Glow Night at the Argyle Curling Club' },
  { src: g8,  caption: 'A night to remember' },
]

interface NewsArticle {
  year: string
  headline: string
  articleTitle: string
  publication: string
  date: string
  summary: string
  src: string
  alt: string
}

const newsArticles: NewsArticle[] = [
  {
    year: 'December 2021',
    headline: 'The Lights Go On',
    articleTitle: 'Argyle Curling Club Offers Glow Curling and Bonspiels',
    publication: 'Stonewall Teulon Tribune',
    date: 'December 23, 2021',
    summary: 'Glow Curling debuts as an exciting new way to experience the sport. Originally introduced for Friday League curlers, it quickly expands to birthday parties, Christmas parties and community rentals, proving there is enthusiasm for a new kind of curling experience.',
    src: news2021,
    alt: 'Stonewall Teulon Tribune, December 23 2021: Argyle Curling Club offers glow curling, bonspiels',
  },
  {
    year: 'February 2023',
    headline: 'Bigger Than Before',
    articleTitle: 'Argyle Glow Bonspiel to Light Up the Rink',
    publication: 'Stonewall Teulon Tribune',
    date: 'February 2, 2023',
    summary: 'After a winter storm postponed the inaugural Glow Bonspiel, volunteers return with an even bigger vision featuring additional lighting, glowing rocks, music, decorations and themed prizes.',
    src: news2023,
    alt: 'Stonewall Teulon Tribune, February 2 2023: Argyle Glow Bonspiel to light up the rink',
  },
  {
    year: 'February 2024',
    headline: 'Glow Becomes a Tradition',
    articleTitle: 'Glowing Reviews for Argyle Ladies Bonspiel',
    publication: 'Stonewall Teulon Tribune',
    date: 'February 8, 2024',
    summary: 'The Ladies Bonspiel embraces the Glow theme, welcoming teams from across Manitoba. Costumes, music and community become just as important as the curling itself.',
    src: news2024,
    alt: 'Stonewall Teulon Tribune, February 8 2024: Glowing reviews for Argyle ladies bonspiel',
  },
  {
    year: 'February 2025',
    headline: 'Glow Keeps Growing',
    articleTitle: 'Third Annual Argyle Ladies Bonspiel a Glowing Success',
    publication: 'Stonewall Teulon Tribune',
    date: 'February 13, 2025',
    summary: 'With approximately 20 teams, Glow Curling evolves into a full event experience featuring music, dancing, glow games, clubhouse activities and unforgettable costumes.',
    src: news2025,
    alt: 'Stonewall Teulon Tribune, February 13 2025: Third annual Argyle Ladies Bonspiel a glowing success',
  },
  {
    year: 'February 2025',
    headline: 'Something for Everyone',
    articleTitle: "Argyle's Glow and Throw Bonspiel: A Family-Friendly Event",
    publication: 'Stonewall Teulon Tribune',
    date: 'February 2025',
    summary: 'The Open Glow and Throw Bonspiel welcomes 18 teams and reinforces that Glow Curling is for everyone — from experienced curlers to families and first-time participants. Creative costumes, community spirit and friendly competition continue to define the weekend.',
    src: newsGlowThrow,
    alt: "Stonewall Teulon Tribune: Argyle's glow and throw bonspiel, a family-friendly event",
  },
  {
    year: 'February 2026',
    headline: 'Grannies Glow Wild!',
    articleTitle: 'Grannies Glow Wild at Argyle Bonspiel',
    publication: 'Stonewall Teulon Tribune',
    date: 'February 12, 2026',
    summary: 'The sold-out Ladies Glow Bonspiel returns with another imaginative theme, twenty teams and incredible creativity. Returning participants and new teams alike help continue one of the most anticipated events on the club calendar.',
    src: newsLadies2026,
    alt: 'Stonewall Teulon Tribune, February 12 2026: Grannies glow wild at Argyle bonspiel',
  },
  {
    year: 'February 2026',
    headline: 'Lighting Up Another Weekend',
    articleTitle: 'Glow Bonspiel Lights Up Argyle Weekend',
    publication: 'Stonewall Teulon Tribune',
    date: 'February 2026',
    summary: 'The Mixed Glow Bonspiel welcomes eighteen teams, including many travelling from outside the Interlake. Creative costumes, returning competitors and another successful weekend demonstrate how Glow Curling has become a signature event on the club calendar.',
    src: newsMixed2026,
    alt: 'Stonewall Teulon Tribune: Glow Bonspiel lights up Argyle weekend',
  },
]

const features = [
  { Icon: Zap,      title: 'Black Light Ice',        description: 'The rink transforms completely under black lights. Glowing rocks, neon lane dividers, and fluorescent outfits make the whole sheet come alive.' },
  { Icon: Music,    title: 'Music All Night',         description: 'A great playlist runs from the first rock to the last end. The soundtrack has become as much a part of Glow Night as the curling itself.' },
  { Icon: Sparkles, title: 'Creative Costumes',       description: 'Neon outfits and blacklight-reactive clothing are part of the tradition. Teams plan their looks weeks in advance. Costume prizes are awarded every year.' },
  { Icon: Coffee,   title: 'Food and Drinks',         description: 'The bar is open and the kitchen is running. Fuel up between ends and linger after your last rock.' },
  { Icon: Heart,    title: 'Community at the Centre', description: 'Friendly and welcoming at all skill levels. Glow Night brings together first-timers and experienced curlers in the same spirit.' },
  { Icon: Trophy,   title: 'Friendly Competition',    description: 'There are games to win and prizes to earn. But the real prize is the stories you leave with.' },
]

const faqs = [
  { q: 'What should I wear?',             a: 'White clothing does not glow particularly well under black lights. Neon, fluorescent, and high-visibility colours create the brightest glow effect.' },
  { q: 'Do I need curling experience?',    a: 'Not at all. Glow Curling is designed for everyone, from experienced curlers to complete beginners. The atmosphere is welcoming at all skill levels.' },
  { q: 'Is equipment provided?',           a: 'Curlers should bring their own brooms and sliders. Clean shoes must be worn on all ice surfaces.' },
  { q: 'Can I wear a costume?',            a: 'Absolutely. Creative costumes have become one of the highlights of Glow Curling. Many teams coordinate their outfits and costume prizes are often awarded throughout the evening.' },
  { q: 'Is Glow Curling family friendly?', a: 'Yes. Glow Curling has hosted league events, birthday parties, community groups, and full bonspiels. All ages are welcome.' },
  { q: 'How many people are on a team?',   a: 'Standard curling teams have four players. Contact us if your group has different numbers and we will do our best to accommodate.' },
  { q: 'Can I book a private Glow event?', a: 'Yes. The club has hosted private birthday parties, corporate groups, and community events. Reach out through the Contact page to discuss availability and pricing.' },
]


export function GlowPage() {
  const [glow, setGlow] = useState(() => {
    try { return localStorage.getItem('argyle-glow') === 'true' } catch { return false }
  })
  const [lightboxIdx, setLightboxIdx]       = useState<number | null>(null)
  const [newsLightboxIdx, setNewsLightboxIdx] = useState<number | null>(null)
  const [openFaq, setOpenFaq]               = useState<number | null>(null)
  const [newsVisible, setNewsVisible]       = useState(false)
  const newsRef   = useRef<HTMLElement>(null)
  const touchStartX = useRef(0)

  const toggle = () => {
    setGlow(prev => {
      const next = !prev
      try { localStorage.setItem('argyle-glow', String(next)) } catch {}
      return next
    })
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setLightboxIdx(null); setNewsLightboxIdx(null) }
      if (lightboxIdx !== null) {
        if (e.key === 'ArrowRight') setLightboxIdx(i => i !== null ? Math.min(i + 1, galleryImages.length - 1) : null)
        if (e.key === 'ArrowLeft')  setLightboxIdx(i => i !== null ? Math.max(i - 1, 0) : null)
      }
      if (newsLightboxIdx !== null) {
        if (e.key === 'ArrowRight') setNewsLightboxIdx(i => i !== null ? Math.min(i + 1, newsArticles.length - 1) : null)
        if (e.key === 'ArrowLeft')  setNewsLightboxIdx(i => i !== null ? Math.max(i - 1, 0) : null)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIdx, newsLightboxIdx])

  useEffect(() => {
    const el = newsRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setNewsVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const tr = 'transition-all duration-[400ms]'

  const theme = {
    bg:           glow ? '#080808' : '#f8f3e8',
    altBg:        glow ? '#0d0d0d' : '#f0e9d8',
    cardBg:       glow ? '#111111' : '#ffffff',
    cardBorder:   glow ? 'rgba(255,0,170,0.22)' : '#e7dac4',
    heading:      glow ? '#ff2eff' : '#7A1F2B',
    accent:       glow ? '#ffee00' : '#C8A24A',
    text:         glow ? '#f0f0f0' : '#2B2B2B',
    muted:        glow ? 'rgba(240,240,240,0.55)' : 'rgba(43,43,43,0.65)',
    headingGlow:  glow ? '0 0 14px rgba(255,0,170,0.65), 0 0 40px rgba(255,0,170,0.2)' : 'none',
    accentGlow:   glow ? '0 0 10px rgba(255,238,0,0.55)' : 'none',
    cardShadow:   glow ? '0 0 20px rgba(255,0,170,0.05), 0 2px 12px rgba(0,0,0,0.5)' : '0 2px 8px rgba(0,0,0,0.04)',
    photoBorder:  glow ? '1px solid rgba(255,0,170,0.3)' : '1px solid #e7dac4',
    photoShadow:  glow ? '0 0 20px rgba(255,0,170,0.18)' : '0 2px 8px rgba(0,0,0,0.06)',
    divider:      glow ? 'rgba(255,0,170,0.12)' : '#e7dac4',
    timelineDot:  glow ? '#ff2eff' : '#7A1F2B',
    timelineLine: glow ? 'rgba(255,0,170,0.3)' : '#e7dac4',
    dotGlow:      glow ? '0 0 10px rgba(255,0,170,0.5), 0 0 20px rgba(255,0,170,0.2)' : 'none',
    newsGlow:     glow ? '0 0 0 1px rgba(255,0,170,0.35), 0 0 16px rgba(255,0,170,0.12)' : '0 4px 16px rgba(0,0,0,0.08)',
  }

  return (
    <div style={{ background: theme.bg, color: theme.text }} className={tr}>

      {/* Toggle strip */}
      <div style={{ background: theme.altBg, borderBottom: `1px solid ${theme.divider}` }} className={tr}>
        <div className="container-page flex items-center justify-between py-3">
          <span className={`text-xs font-semibold uppercase tracking-[0.22em] ${tr}`} style={{ color: theme.accent, textShadow: theme.accentGlow }}>
            Glow Curling
          </span>
          <button
            onClick={toggle}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${tr}`}
            style={{
              background: glow ? 'rgba(255,0,170,0.1)' : 'rgba(122,31,43,0.07)',
              border: `1px solid ${glow ? 'rgba(255,0,170,0.3)' : 'rgba(122,31,43,0.18)'}`,
              color: glow ? '#ff2eff' : '#7A1F2B',
              boxShadow: glow ? '0 0 12px rgba(255,0,170,0.12)' : 'none',
            }}
            aria-label={glow ? 'Switch to Classic Mode' : 'Switch to Glow Mode'}
          >
            {glow ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {glow ? 'Classic Mode' : 'Enter Glow Mode'}
          </button>
        </div>
      </div>

      {/* Hero */}
      <section className="relative isolate overflow-hidden" style={{ minHeight: '82vh' }}>
        <img src={glowHeroImg} alt="Glow Curling at Argyle Curling Club"
          className={`absolute inset-0 h-full w-full object-cover ${tr}`}
          style={{ filter: glow ? 'brightness(0.4) saturate(1.9)' : 'brightness(0.52)' }} />
        <div className={`absolute inset-0 ${tr}`} style={{ background: glow
          ? 'linear-gradient(135deg,rgba(55,0,75,0.94) 0%,rgba(8,0,22,0.6) 65%,transparent 100%)'
          : 'linear-gradient(135deg,rgba(26,8,12,0.92) 0%,rgba(26,8,12,0.5) 65%,transparent 100%)' }} />
        <div className="container-page relative z-10 flex min-h-[82vh] items-end py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${tr}`}
              style={{ color: theme.accent, textShadow: glow ? '0 0 8px rgba(255,238,0,0.65)' : 'none' }}>
              Argyle Curling Club
            </p>
            <h1 className={`mt-4 font-display text-5xl text-white sm:text-6xl lg:text-7xl ${tr}`}
              style={{ textShadow: glow ? '0 0 28px rgba(255,0,170,0.55),0 0 60px rgba(255,0,170,0.25)' : 'none' }}>
              Experience Glow Curling
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Trade your white sweaters for neon and experience one of Manitoba's most unique curling events. Under black lights, glowing rocks, illuminated house rings, and vibrant decorations transform the rink into an unforgettable weekend of curling, costumes, music, and laughs.
            </p>
            <p className="mt-4 max-w-xl text-sm text-white/55">
              Tip: White clothing doesn't glow well under black lights. Neon, fluorescent, and high-visibility colours create the brightest glow.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={toggle}
                className={`rounded-full px-7 py-3.5 text-sm font-semibold ${tr}`}
                style={{ background: glow ? '#C8A24A' : '#ff00aa', color: '#000', boxShadow: glow ? 'none' : '0 0 24px rgba(255,0,170,0.5)' }}>
                {glow ? 'Return to Classic' : 'Enter Glow Mode'}
              </button>
              <Link to="/bonspiels"
                className={`rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:border-white/55 hover:bg-white/15 ${tr}`}>
                View All Bonspiels
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`py-20 lg:py-24 ${tr}`} style={{ background: theme.altBg }}>
        <div className="container-page">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${tr}`} style={{ color: theme.accent, textShadow: theme.accentGlow }}>What to Expect</p>
            <h2 className={`mt-3 font-display text-4xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>What Makes Glow Night Special</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, description }) => (
              <div key={title} className={`rounded-2xl border p-7 ${tr}`}
                style={{ background: theme.cardBg, borderColor: theme.cardBorder, boxShadow: theme.cardShadow }}>
                <Icon className="h-6 w-6" style={{ color: theme.accent, filter: glow ? 'drop-shadow(0 0 6px rgba(255,238,0,0.5))' : 'none' }} />
                <h3 className={`mt-4 font-display text-xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>{title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${tr}`} style={{ color: theme.muted }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={`container-page py-24 ${tr}`}>
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${tr}`} style={{ color: theme.accent, textShadow: theme.accentGlow }}>From the Ice</p>
          <h2 className={`mt-3 font-display text-4xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>Glow Nights in Photos</h2>
          <p className={`mt-3 text-sm ${tr}`} style={{ color: theme.muted }}>Click any photo to view full size.</p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <div key={i} className={`mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl ${tr}`}
              style={{ border: theme.photoBorder, boxShadow: theme.photoShadow }}
              onClick={() => setLightboxIdx(i)} role="button" tabIndex={0}
              aria-label={`View photo: ${img.caption}`}
              onKeyDown={e => e.key === 'Enter' && setLightboxIdx(i)}>
              <img src={img.src} alt={img.caption} className="w-full object-cover transition-transform duration-300 hover:scale-[1.03]" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* In the News */}
      <section ref={newsRef} className={`py-20 lg:py-28 ${tr}`} style={{ background: theme.altBg }}>
        <div className="container-page">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${tr}`} style={{ color: theme.accent, textShadow: theme.accentGlow }}>In the News</p>
            <h2 className={`mt-3 font-display text-4xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>A Tradition in the Making</h2>
            <p className={`mt-4 text-sm leading-relaxed max-w-2xl mx-auto ${tr}`} style={{ color: theme.muted }}>
              Since 2021, the Stonewall Teulon Tribune has documented the evolution of Glow Curling at the Argyle Curling Club. What began as an experiment has grown into a collection of signature events that attract participants from across Manitoba. Explore the journey through the stories that helped tell it.
            </p>
          </div>

          {/* Desktop alternating timeline */}
          <div className="hidden lg:block relative">
            <div className={`absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 ${tr}`}
              style={{ background: glow
                ? 'linear-gradient(to bottom,transparent,rgba(255,0,170,0.4) 10%,rgba(255,0,170,0.4) 90%,transparent)'
                : 'linear-gradient(to bottom,transparent,#e7dac4 10%,#e7dac4 90%,transparent)' }} />
            <div className="space-y-20">
              {newsArticles.map((article, i) => {
                const cardLeft = i % 2 === 0
                const delay = i * 180
                return (
                  <div key={i} className="relative flex items-center gap-0"
                    style={{ opacity: newsVisible ? 1 : 0, transform: newsVisible ? 'none' : 'translateY(28px)', transition: `opacity 600ms ${delay}ms ease-out,transform 600ms ${delay}ms ease-out` }}>
                    {/* Left slot */}
                    <div className="flex flex-1 justify-end pr-10">
                      {cardLeft ? (
                        <button onClick={() => setNewsLightboxIdx(i)}
                          className="group max-w-sm w-full overflow-hidden rounded-xl text-left transition-all duration-300 hover:-translate-y-1"
                          style={{ background: '#fffdf7', boxShadow: theme.newsGlow, border: glow ? '1px solid rgba(255,0,170,0.25)' : '1px solid #e8e0d0' }}
                          aria-label={`View article: ${article.headline}`}>
                          <img src={article.src} alt={article.alt} className="w-full object-cover" loading="lazy" />
                          <div className="px-4 py-3">
                            <p className="text-xs font-semibold text-[#7A1F2B]">{article.articleTitle}</p>
                            <p className="text-xs text-[#3D3D3D]/50">{article.publication} · {article.date}</p>
                          </div>
                        </button>
                      ) : (
                        <div className="max-w-sm w-full text-right pr-2">
                          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accent, textShadow: theme.accentGlow }}>{article.year}</p>
                          <h3 className={`mt-2 font-display text-2xl leading-snug ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>{article.headline}</h3>
                          <p className="mt-1 text-xs" style={{ color: theme.muted }}>{article.publication} · {article.date}</p>
                          <p className="mt-3 text-sm leading-relaxed" style={{ color: theme.muted }}>{article.summary}</p>
                          <button onClick={() => setNewsLightboxIdx(i)}
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                            style={{ color: theme.accent }}>
                            View article <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                    {/* Centre dot */}
                    <div className="shrink-0 flex flex-col items-center z-10">
                      <div className={`h-4 w-4 rounded-full border-2 ${tr}`}
                        style={{ background: theme.cardBg, borderColor: theme.timelineDot, boxShadow: theme.dotGlow }} />
                    </div>
                    {/* Right slot */}
                    <div className="flex flex-1 pl-10">
                      {!cardLeft ? (
                        <button onClick={() => setNewsLightboxIdx(i)}
                          className="group max-w-sm w-full overflow-hidden rounded-xl text-left transition-all duration-300 hover:-translate-y-1"
                          style={{ background: '#fffdf7', boxShadow: theme.newsGlow, border: glow ? '1px solid rgba(255,0,170,0.25)' : '1px solid #e8e0d0' }}
                          aria-label={`View article: ${article.headline}`}>
                          <img src={article.src} alt={article.alt} className="w-full object-cover" loading="lazy" />
                          <div className="px-4 py-3">
                            <p className="text-xs font-semibold text-[#7A1F2B]">{article.articleTitle}</p>
                            <p className="text-xs text-[#3D3D3D]/50">{article.publication} · {article.date}</p>
                          </div>
                        </button>
                      ) : (
                        <div className="max-w-sm w-full pl-2">
                          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accent, textShadow: theme.accentGlow }}>{article.year}</p>
                          <h3 className={`mt-2 font-display text-2xl leading-snug ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>{article.headline}</h3>
                          <p className="mt-1 text-xs" style={{ color: theme.muted }}>{article.publication} · {article.date}</p>
                          <p className="mt-3 text-sm leading-relaxed" style={{ color: theme.muted }}>{article.summary}</p>
                          <button onClick={() => setNewsLightboxIdx(i)}
                            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                            style={{ color: theme.accent }}>
                            View article <ArrowRight className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* The Next Chapter */}
              <div className="relative flex items-center gap-0"
                style={{ opacity: newsVisible ? 1 : 0, transform: newsVisible ? 'none' : 'translateY(28px)', transition: `opacity 600ms ${newsArticles.length * 180}ms ease-out,transform 600ms ${newsArticles.length * 180}ms ease-out` }}>
                <div className="flex flex-1 justify-end pr-10" />
                <div className="shrink-0 flex flex-col items-center z-10">
                  <div className="h-4 w-4 rounded-full border-2 border-dashed" style={{ borderColor: theme.accent, background: theme.altBg }} />
                </div>
                <div className="flex flex-1 pl-10">
                  <div className="max-w-sm">
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accent, textShadow: theme.accentGlow }}>What Comes Next</p>
                    <h3 className={`mt-2 font-display text-2xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>The Next Chapter</h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: theme.muted }}>Every year brings:</p>
                    <ul className="mt-2 space-y-1">
                      {['New costumes','New themes','New volunteers','New friendships','New memories'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: theme.muted }}>
                          <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: theme.accent }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: theme.muted }}>The next headline has not been written yet.</p>
                    <p className="mt-1 text-sm font-semibold italic" style={{ color: theme.heading, textShadow: theme.headingGlow }}>Maybe it will feature your team.</p>
                    <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
                      style={{ background: glow ? 'rgba(255,0,170,0.12)' : 'rgba(122,31,43,0.08)', border: `1px solid ${theme.cardBorder}`, color: theme.heading }}>
                      Join us for the next Glow Bonspiel <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-10">
            {newsArticles.map((article, i) => {
              const delay = i * 150
              return (
                <div key={i} className="flex gap-4"
                  style={{ opacity: newsVisible ? 1 : 0, transform: newsVisible ? 'none' : 'translateY(20px)', transition: `opacity 500ms ${delay}ms ease-out,transform 500ms ${delay}ms ease-out` }}>
                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-4 w-4 rounded-full border-2 mt-1" style={{ background: theme.cardBg, borderColor: theme.timelineDot, boxShadow: theme.dotGlow }} />
                    {i < newsArticles.length - 1 && <div className="mt-1 w-px flex-1" style={{ background: theme.timelineLine, minHeight: '1.5rem' }} />}
                  </div>
                  <div className="pb-4 flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accent }}>{article.year}</p>
                    <h3 className={`mt-1 font-display text-xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>{article.headline}</h3>
                    <p className="mt-1 text-xs" style={{ color: theme.muted }}>{article.date}</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: theme.muted }}>{article.summary}</p>
                    <button onClick={() => setNewsLightboxIdx(i)}
                      className="mt-4 w-full overflow-hidden rounded-xl text-left transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
                      style={{ background: '#fffdf7', boxShadow: theme.newsGlow, border: glow ? '1px solid rgba(255,0,170,0.25)' : '1px solid #e8e0d0' }}
                      aria-label={`View article: ${article.headline}`}>
                      <img src={article.src} alt={article.alt} className="w-full object-cover" loading="lazy" />
                    </button>
                  </div>
                </div>
              )
            })}
            {/* The Next Chapter mobile */}
            <div className="flex gap-4"
              style={{ opacity: newsVisible ? 1 : 0, transition: `opacity 500ms ${newsArticles.length * 150}ms ease-out` }}>
              <div className="flex flex-col items-center shrink-0 mt-1">
                <div className="h-4 w-4 rounded-full border-2 border-dashed" style={{ borderColor: theme.accent, background: theme.altBg }} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: theme.accent }}>What Comes Next</p>
                <h3 className={`mt-1 font-display text-xl ${tr}`} style={{ color: theme.heading }}>The Next Chapter</h3>
                <ul className="mt-2 space-y-1">
                  {['New costumes','New themes','New volunteers','New friendships','New memories'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: theme.muted }}>
                      <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: theme.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm" style={{ color: theme.muted }}>The next headline has not been written yet.</p>
                <p className="mt-1 text-sm font-semibold italic" style={{ color: theme.heading }}>Maybe it will feature your team.</p>
                <Link to="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: theme.accent }}>
                  Join us <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-20 lg:py-24 ${tr}`} style={{ background: theme.altBg }}>
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${tr}`} style={{ color: theme.accent, textShadow: theme.accentGlow }}>Good to Know</p>
              <h2 className={`mt-3 font-display text-4xl ${tr}`} style={{ color: theme.heading, textShadow: theme.headingGlow }}>Frequently Asked</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`overflow-hidden rounded-xl border ${tr}`}
                  style={{ background: theme.cardBg, borderColor: theme.cardBorder }}>
                  <button className={`flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold ${tr}`}
                    style={{ color: theme.heading }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}>
                    <span>{faq.q}</span>
                    <span className="ml-4 shrink-0 text-xl"
                      style={{ color: theme.accent, display: 'inline-block', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 300ms', filter: glow ? 'drop-shadow(0 0 4px rgba(255,238,0,0.5))' : 'none' }}>+</span>
                  </button>
                  <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '240px' : '0px' }}>
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: theme.muted }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`relative overflow-hidden py-28 ${tr}`} style={{ background: glow ? '#08001a' : '#7A1F2B' }}>
        {glow && <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 60%,rgba(255,0,170,0.16) 0%,transparent 65%)' }} />}
        <div className="container-page relative text-center">
          <h2 className={`font-display text-4xl text-white sm:text-5xl ${tr}`}
            style={{ textShadow: glow ? '0 0 24px rgba(255,0,170,0.55),0 0 50px rgba(255,0,170,0.25)' : 'none' }}>
            Ready to Try Glow Curling?
          </h2>
          <p className="mt-4 text-lg text-white/75">Join us for the next Glow event at the Argyle Curling Club.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold ${tr}`}
              style={{ background: glow ? '#ff00aa' : '#C8A24A', color: glow ? '#000' : '#5A1620', boxShadow: glow ? '0 0 28px rgba(255,0,170,0.5)' : 'none' }}>
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/bonspiels"
              className={`inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:border-white/50 ${tr}`}>
              View Bonspiels
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md"
          onClick={() => setLightboxIdx(null)} role="dialog" aria-modal="true" aria-label="Photo gallery">
          <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20"
            onClick={() => setLightboxIdx(null)} aria-label="Close"><X className="h-5 w-5" /></button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 disabled:opacity-20"
            onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? Math.max(i - 1, 0) : null) }}
            disabled={lightboxIdx === 0} aria-label="Previous photo"><ChevronLeft className="h-5 w-5" /></button>
          <div className="max-w-4xl px-16" onClick={e => e.stopPropagation()}>
            <img src={galleryImages[lightboxIdx].src} alt={galleryImages[lightboxIdx].caption}
              className="max-h-[80vh] rounded-xl object-contain"
              style={{ boxShadow: glow ? '0 0 40px rgba(255,0,170,0.25),0 8px 32px rgba(0,0,0,0.6)' : '0 8px 32px rgba(0,0,0,0.5)' }} />
            <p className="mt-3 text-center text-sm text-white/60">{galleryImages[lightboxIdx].caption}</p>
            <p className="mt-1 text-center text-xs text-white/30">{lightboxIdx + 1} / {galleryImages.length}</p>
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 disabled:opacity-20"
            onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? Math.min(i + 1, galleryImages.length - 1) : null) }}
            disabled={lightboxIdx === galleryImages.length - 1} aria-label="Next photo"><ChevronRight className="h-5 w-5" /></button>
        </div>
      )}

      {/* News Lightbox */}
      {newsLightboxIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md"
          onClick={() => setNewsLightboxIdx(null)} role="dialog" aria-modal="true" aria-label="Newspaper article"
          onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const diff = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(diff) > 50) {
              if (diff > 0) setNewsLightboxIdx(i => i !== null ? Math.min(i + 1, newsArticles.length - 1) : null)
              else setNewsLightboxIdx(i => i !== null ? Math.max(i - 1, 0) : null)
            }
          }}>
          <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20"
            onClick={() => setNewsLightboxIdx(null)} aria-label="Close"><X className="h-5 w-5" /></button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 disabled:opacity-20"
            onClick={e => { e.stopPropagation(); setNewsLightboxIdx(i => i !== null ? Math.max(i - 1, 0) : null) }}
            disabled={newsLightboxIdx === 0} aria-label="Previous article"><ChevronLeft className="h-5 w-5" /></button>
          <div className="max-w-3xl w-full px-16" onClick={e => e.stopPropagation()}>
            <div className="overflow-hidden rounded-xl" style={{ background: '#fffdf7', boxShadow: glow ? '0 0 0 1px rgba(255,0,170,0.4),0 0 40px rgba(255,0,170,0.15),0 16px 48px rgba(0,0,0,0.6)' : '0 16px 48px rgba(0,0,0,0.5)' }}>
              <img src={newsArticles[newsLightboxIdx].src} alt={newsArticles[newsLightboxIdx].alt}
                className="w-full object-contain" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-white/80">{newsArticles[newsLightboxIdx].articleTitle}</p>
              <p className="mt-1 text-xs text-white/40">{newsArticles[newsLightboxIdx].publication} · {newsArticles[newsLightboxIdx].date}</p>
              <p className="mt-1 text-xs text-white/30">{newsLightboxIdx + 1} / {newsArticles.length}</p>
            </div>
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 disabled:opacity-20"
            onClick={e => { e.stopPropagation(); setNewsLightboxIdx(i => i !== null ? Math.min(i + 1, newsArticles.length - 1) : null) }}
            disabled={newsLightboxIdx === newsArticles.length - 1} aria-label="Next article"><ChevronRight className="h-5 w-5" /></button>
        </div>
      )}

    </div>
  )
}
