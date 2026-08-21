import Link from "next/link"
import Image from "next/image"
import mavicImg from "@/assets/hero_4x.webp"

const stats = [
  ["100%", "CAA Compliant"],
  ["HD", "4K Resolution"],
  ["24hr", "Turnaround"],
  ["£5M", "Liability Cover"],
]

const quickNav = [
  { label: "Services", to: "/services", sub: "4 specialisms" },
  { label: "Compliance", to: "/compliance", sub: "CAA · Insured" },
  { label: "Who We Serve", to: "/sectors", sub: "6 sectors" },
  { label: "Gallery", to: "/gallery", sub: "See our work" },
  { label: "Contact", to: "/contact", sub: "Free quote" },
]

export default function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={mavicImg}
          alt="DJI Mavic Mini drone in flight against clear blue sky"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/78 via-55% to-background/45" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block h-px w-12 bg-accent" />
          <span className="font-mono-label text-xs tracking-widest uppercase text-accent">
            UK CAA Licensed · Fully Insured
          </span>
        </div>

        <h1 className="font-display font-extrabold leading-none mb-6 text-hero text-white text-shadow-glow">
          PRECISION
          <br />
          <span className="text-accent">FROM ABOVE.</span>
        </h1>

        <p className="max-w-xl text-lg font-light leading-relaxed mb-10 text-secondary-foreground">
          Professional high-definition aerial drone services for construction,
          roofing, property management, and events. Safe. Rapid. Accurate.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-block font-display font-bold text-sm tracking-widest uppercase px-8 py-4 bg-accent text-background transition-all duration-200 hover:bg-accent-hover"
          >
            Request a Survey
          </Link>
          <Link
            href="/services"
            className="inline-block font-display font-bold text-sm tracking-widest uppercase px-8 py-4 border border-border bg-primary/20 text-foreground transition-all duration-200 hover:border-accent hover:text-accent"
          >
            Our Services
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mt-20 pt-10 border-t border-border">
          {stats.map(([val, label]) => (
            <div key={label}>
              <div className="font-display font-extrabold text-3xl text-accent">
                {val}
              </div>
              <div className="font-mono-label text-xs tracking-widest uppercase mt-1 text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono-label text-xs tracking-widest text-muted-foreground">
          EXPLORE
        </span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path
            d="M8 0v16M1 9l7 8 7-8"
            strokeWidth="1.5"
            className="stroke-accent"
          />
        </svg>
      </div>

      {/* Quick-nav strip */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:flex divide-x divide-border border-t border-border bg-background/85 backdrop-blur-sm">
        {quickNav.map(({ label, to, sub }) => (
          <Link
            key={to}
            href={to}
            className="flex-1 px-6 py-4 flex flex-col justify-center transition-all duration-200 hover:bg-primary/30"
          >
            <span className="font-display font-bold text-sm text-foreground">
              {label}
            </span>
            <span className="font-mono-label text-xs mt-0.5 text-muted-foreground">
              {sub}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
