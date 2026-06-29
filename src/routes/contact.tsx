import { Phone, MapPin } from 'lucide-react'

export function ContactPage() {
  return (
    <div className="min-h-[70vh] bg-[#f8f3e8] px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-lg text-center">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A24A]">Get in Touch</p>
        <h1 className="mt-2 font-display text-4xl text-[#7A1F2B] sm:text-5xl">Contact Us</h1>

        <p className="mt-5 text-base leading-relaxed text-[#3D3D3D]/75">
          As a volunteer-run club, all inquiries are filtered through our club president. Whether you have questions about leagues, bonspiels, club rentals, or just want to get in touch, give us a call or send a text.
        </p>

        <div className="mt-8 rounded-2xl border border-[#e7dac4] bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A1F2B]/10">
              <Phone className="h-5 w-5 text-[#7A1F2B]" />
            </span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#3D3D3D]/50">Call or Text</p>
            <a
              href="tel:+12044610009"
              className="font-display text-3xl text-[#7A1F2B] transition-colors hover:text-[#5A1620]"
            >
              (204) 461-0009
            </a>
          </div>

          <div className="mt-8 border-t border-[#e7dac4] pt-6 flex items-center justify-center gap-2 text-sm text-[#3D3D3D]/60">
            <MapPin className="h-4 w-4 shrink-0 text-[#C8A24A]" />
            <span>41 E PR 323, Argyle, MB R0C 0B0</span>
          </div>
        </div>

      </div>
    </div>
  )
}
