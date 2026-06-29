import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import footerLogo from "../assets/logos/argyle-logo1.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-white/85">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={footerLogo}
              alt="Argyle Curling Club crest"
              className="h-14 w-auto shrink-0 object-contain"
            />
            <div>
              <p className="font-display text-lg text-white">Argyle Curling Club</p>
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Small Community · Big Heart</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            A volunteer-run, family-friendly curling club proudly serving Argyle and surrounding
            communities in Manitoba since 1939.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Visit</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              <span>41 E PR 323<br />Argyle, MB R0C 0B0</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <a href="tel:+12044610009" className="transition-colors hover:text-white">(204) 461-0009</a>
            </li>

          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/leagues", "Leagues"],
              ["/bonspiels", "Bonspiels"],
              ["/rentals", "Club Rentals"],
              ["/sponsors", "Sponsors"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/75 transition-colors hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Follow</h4>
          <p className="mt-4 text-sm text-white/70">
            Stay up to date with draws, results, and community happenings.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Argyle Curling Club. All rights reserved.</p>
          <p>Built with heart in Manitoba.</p>
        </div>
      </div>
    </footer>
  );
}
