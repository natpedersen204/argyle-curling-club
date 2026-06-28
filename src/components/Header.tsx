import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/leagues", label: "Leagues" },
  { to: "/bonspiels", label: "Bonspiels" },
  { to: "/rentals", label: "Club Rentals" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#5A1620]/20 bg-[#5A1620] text-[#F8F5F0] shadow-soft backdrop-blur-md">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:py-6">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-3 sm:gap-4"
        >
          <img
            src="/src/assets/logos/argyle-logo1.png"
            alt="Argyle Curling Club logo"
            className="h-16 w-auto shrink-0 object-contain sm:h-20 lg:h-24"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeProps={{ className: "bg-[#7A1F2B]/20 text-[#D8B96A]" }}
                  inactiveProps={{ className: "text-[#F8F5F0] hover:text-[#D8B96A] hover:bg-[#F8F5F0]/10" }}
                  activeOptions={{ exact: l.to === "/" }}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-[#C8A24A] px-4 py-2 text-sm font-semibold text-[#5A1620] shadow-soft transition-colors hover:bg-[#D8B96A]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#F8F5F0]/25 text-[#F8F5F0] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#F8F5F0]/15 bg-[#5A1620] lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-[#D8B96A] bg-[#F8F5F0]/10" }}
                  inactiveProps={{ className: "text-[#F8F5F0]" }}
                  activeOptions={{ exact: l.to === "/" }}
                  className="block rounded-md px-3 py-2.5 text-base font-medium"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-[#C8A24A] px-4 py-3 text-center text-sm font-semibold text-[#5A1620]"
              >
                Contact the Club
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
