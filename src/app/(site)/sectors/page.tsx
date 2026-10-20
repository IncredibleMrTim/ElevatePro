import Link from "next/link";

const sectors = [
  {
    label: "Roofing Contractors",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 stroke-accent">
        <path d="M4 32h32M4 32V14l16-8 16 8v18" strokeWidth="1.5" />
        <path d="M14 32V22h12v10" strokeWidth="1.5" />
      </svg>
    ),
    desc: "Commission detailed roof surveys without the cost and delay of scaffolding. HD imagery of tiles, leadwork, ridges, and chimney stacks delivered within 24 hours.",
    benefits: ["No access equipment needed", "24-hour turnaround", "CAA-compliant operation", "Insurance-grade documentation"],
  },
  {
    label: "Scaffolding Companies",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 stroke-accent">
        <rect x="4" y="30" width="32" height="3" strokeWidth="1.5" />
        <rect x="7" y="22" width="3" height="8" strokeWidth="1.5" />
        <rect x="19" y="15" width="3" height="15" strokeWidth="1.5" />
        <rect x="31" y="9" width="3" height="21" strokeWidth="1.5" />
        <path d="M10 24h9M22 17h9" strokeWidth="1.5" />
      </svg>
    ),
    desc: "Pre-erection site surveys, access planning, and ongoing safety documentation for every phase of your project. Reduce site visits and improve planning precision.",
    benefits: ["Pre-erection site surveys", "Access and egress planning", "Safety inspection records", "Progress milestone photography"],
  },
  {
    label: "Building Surveyors",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 stroke-accent">
        <rect x="6" y="6" width="28" height="28" rx="1" strokeWidth="1.5" />
        <path d="M6 14h28M14 14v20" strokeWidth="1.5" />
        <path d="M20 20h8M20 25h6M20 30h4" strokeWidth="1.2" />
      </svg>
    ),
    desc: "Access elevations and roof planes that would otherwise require expensive access platforms. High-resolution imagery supports condition reports and structural assessments.",
    benefits: ["Full elevation coverage", "Measurement-grade imagery", "Defect identification", "Report-ready deliverables"],
  },
  {
    label: "Property Developers",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 stroke-accent">
        <rect x="4" y="16" width="14" height="18" strokeWidth="1.5" />
        <rect x="22" y="8" width="14" height="26" strokeWidth="1.5" />
        <path d="M4 34h32" strokeWidth="1.5" />
        <path d="M11 22h4M29 14h4M29 20h4M29 26h4" strokeWidth="1.2" />
      </svg>
    ),
    desc: "Site acquisition surveys, planning application imagery, and construction progress documentation. Aerial footage that communicates the scale and ambition of your development.",
    benefits: ["Site acquisition surveys", "Planning application support", "Marketing imagery", "Investor presentation content"],
  },
  {
    label: "Estate Agents",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 stroke-accent">
        <path d="M6 34h28M6 34V18l14-8 14 8v16" strokeWidth="1.5" />
        <path d="M16 34V26h8v8" strokeWidth="1.5" />
        <path d="M20 12l-4 4h8l-4-4z" strokeWidth="1.5" />
      </svg>
    ),
    desc: "Premium aerial photography that sets listings apart. Contextual neighbourhood shots, garden and plot overviews, and cinematic property fly-throughs.",
    benefits: ["Premium listing imagery", "Neighbourhood context shots", "Plot and garden overviews", "Video fly-throughs"],
  },
  {
    label: "Event Organisers",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 stroke-accent">
        <circle cx="20" cy="20" r="15" strokeWidth="1.5" />
        <path d="M5 20h30M20 5c-4 5-6 10-6 15s2 10 6 15M20 5c4 5 6 10 6 15s-2 10-6 15" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2.5" className="fill-accent" />
      </svg>
    ),
    desc: "Orthomosaic site maps for capacity planning, crowd flow analysis visuals for safety applications, and stunning aerial photography for press and promotion.",
    benefits: ["Site capacity mapping", "Crowd flow visuals", "Licensing application support", "Press and social imagery"],
  },
];

export default function SectorsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <div className="pt-36 pb-16 px-6 bg-linear-to-b from-surface to-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-px w-12 bg-accent" />
            <span className="font-mono-label text-xs tracking-widest uppercase text-accent">
              Who We Serve
            </span>
          </div>
          <h1 className="font-display font-extrabold leading-none text-page-title text-white">
            OUR CLIENTS
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sectors.map(({ label, icon, desc, benefits }) => (
            <div
              key={label}
              className="group p-8 border border-border bg-card transition-all duration-300 hover:border-accent hover:bg-surface"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="shrink-0 p-3 border border-border bg-background">{icon}</div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 text-white">{label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="shrink-0 w-1 h-1 rounded-full bg-accent" />
                    <span className="text-xs text-secondary-foreground">{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-px w-0 bg-linear-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-border bg-surface">
          <div>
            <div className="font-mono-label text-xs tracking-widest uppercase mb-2 text-accent">
              Not sure which service fits?
            </div>
            <div className="font-display font-bold text-2xl text-white">
              Tell us about your project.
            </div>
            <div className="text-sm mt-1 text-muted-foreground">
              We will recommend the right approach and provide a free no-obligation quote.
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 whitespace-nowrap inline-block font-display font-bold text-sm tracking-widest uppercase px-8 py-4 bg-accent text-background transition-all duration-200 hover:bg-accent-hover"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
