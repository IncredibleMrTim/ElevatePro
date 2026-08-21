import Link from "next/link"
import Image from "next/image"
import logoImg from "@/assets/logo_1x.webp"

const serviceLinks = [
  { label: "Roof & Building Surveys", to: "/services" },
  { label: "Scaffolding & Site Inspections", to: "/services" },
  { label: "Event & Festival Surveys", to: "/services" },
  { label: "Commercial Aerial Photography", to: "/services" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-deep">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src={logoImg}
              alt="ElevatePro Surveys"
              className="h-20 w-auto object-contain mb-4 drop-shadow-glow"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Professional aerial drone services for construction, roofing,
              property, and events across the UK.
            </p>
          </div>

          <div>
            <div className="font-mono-label text-xs tracking-widest uppercase mb-5 text-accent">
              Services
            </div>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    href={to}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono-label text-xs tracking-widest uppercase mb-5 text-accent">
              Compliance
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-4 py-3 flex items-center gap-3 border border-border bg-card">
                <div className="font-display font-extrabold text-xs w-10 h-10 flex items-center justify-center shrink-0 bg-accent text-background">
                  CAA
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-foreground">
                    A2 CoC Certified
                  </div>
                  <div className="text-xs text-muted-foreground">
                    UK CAA Approved Pilot
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center gap-3 border border-border bg-card">
                <div className="font-display font-extrabold text-xs w-10 h-10 flex items-center justify-center shrink-0 bg-primary text-accent">
                  £5M
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-foreground">
                    Fully Insured
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Commercial Liability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="font-mono-label text-xs text-muted-foreground">
            © 2026 ElevatePro Surveys Ltd. All rights reserved.
          </div>
          <div className="font-mono-label text-xs text-muted-foreground">
            CAA Registration · Commercial Liability Insured · UK Operations
          </div>
        </div>
      </div>
    </footer>
  )
}
