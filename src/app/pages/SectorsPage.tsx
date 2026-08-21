import { Link } from "react-router-dom";

const sectors = [
  {
    label: "Roofing Contractors",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M4 32h32M4 32V14l16-8 16 8v18" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M14 32V22h12v10" stroke="#c9a227" strokeWidth="1.5" />
      </svg>
    ),
    desc: "Commission detailed roof surveys without the cost and delay of scaffolding. HD imagery of tiles, leadwork, ridges, and chimney stacks delivered within 24 hours.",
    benefits: ["No access equipment needed", "24-hour turnaround", "CAA-compliant operation", "Insurance-grade documentation"],
  },
  {
    label: "Scaffolding Companies",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="4" y="30" width="32" height="3" stroke="#c9a227" strokeWidth="1.5" />
        <rect x="7" y="22" width="3" height="8" stroke="#c9a227" strokeWidth="1.5" />
        <rect x="19" y="15" width="3" height="15" stroke="#c9a227" strokeWidth="1.5" />
        <rect x="31" y="9" width="3" height="21" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M10 24h9M22 17h9" stroke="#c9a227" strokeWidth="1.5" />
      </svg>
    ),
    desc: "Pre-erection site surveys, access planning, and ongoing safety documentation for every phase of your project. Reduce site visits and improve planning precision.",
    benefits: ["Pre-erection site surveys", "Access and egress planning", "Safety inspection records", "Progress milestone photography"],
  },
  {
    label: "Building Surveyors",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="6" y="6" width="28" height="28" rx="1" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M6 14h28M14 14v20" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M20 20h8M20 25h6M20 30h4" stroke="#c9a227" strokeWidth="1.2" />
      </svg>
    ),
    desc: "Access elevations and roof planes that would otherwise require expensive access platforms. High-resolution imagery supports condition reports and structural assessments.",
    benefits: ["Full elevation coverage", "Measurement-grade imagery", "Defect identification", "Report-ready deliverables"],
  },
  {
    label: "Property Developers",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="4" y="16" width="14" height="18" stroke="#c9a227" strokeWidth="1.5" />
        <rect x="22" y="8" width="14" height="26" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M4 34h32" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M11 22h4M29 14h4M29 20h4M29 26h4" stroke="#c9a227" strokeWidth="1.2" />
      </svg>
    ),
    desc: "Site acquisition surveys, planning application imagery, and construction progress documentation. Aerial footage that communicates the scale and ambition of your development.",
    benefits: ["Site acquisition surveys", "Planning application support", "Marketing imagery", "Investor presentation content"],
  },
  {
    label: "Estate Agents",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M6 34h28M6 34V18l14-8 14 8v16" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M16 34V26h8v8" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M20 12l-4 4h8l-4-4z" stroke="#c9a227" strokeWidth="1.5" />
      </svg>
    ),
    desc: "Premium aerial photography that sets listings apart. Contextual neighbourhood shots, garden and plot overviews, and cinematic property fly-throughs.",
    benefits: ["Premium listing imagery", "Neighbourhood context shots", "Plot and garden overviews", "Video fly-throughs"],
  },
  {
    label: "Event Organisers",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="15" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M5 20h30M20 5c-4 5-6 10-6 15s2 10 6 15M20 5c4 5 6 10 6 15s-2 10-6 15" stroke="#c9a227" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2.5" fill="#c9a227" />
      </svg>
    ),
    desc: "Orthomosaic site maps for capacity planning, crowd flow analysis visuals for safety applications, and stunning aerial photography for press and promotion.",
    benefits: ["Site capacity mapping", "Crowd flow visuals", "Licensing application support", "Press and social imagery"],
  },
];

export function SectorsPage() {
  return (
    <div style={{ background: "#080f1e", minHeight: "100vh" }}>
      {/* Page header */}
      <div
        className="pt-36 pb-16 px-6"
        style={{
          background: "linear-gradient(to bottom, #0b1220, #080f1e)",
          borderBottom: "1px solid #1e3358",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-px w-12" style={{ background: "#c9a227" }} />
            <span className="font-mono-label text-xs tracking-widest uppercase" style={{ color: "#c9a227" }}>
              Who We Serve
            </span>
          </div>
          <h1
            className="font-display font-extrabold leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#ffffff" }}
          >
            OUR CLIENTS
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sectors.map(({ label, icon, desc, benefits }) => (
            <div
              key={label}
              className="group p-8 transition-all duration-300"
              style={{ border: "1px solid #1e3358", background: "#0e1a2e", cursor: "default" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#c9a227";
                el.style.background = "#0b1422";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#1e3358";
                el.style.background = "#0e1a2e";
              }}
            >
              <div className="flex items-start gap-5 mb-5">
                <div
                  className="shrink-0 p-3"
                  style={{ border: "1px solid #1e3358", background: "#080f1e" }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2" style={{ color: "#ffffff" }}>
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7a90b0" }}>
                    {desc}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <span
                      className="shrink-0 w-1 h-1 rounded-full"
                      style={{ background: "#c9a227" }}
                    />
                    <span className="text-xs" style={{ color: "#a8bcd8" }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="mt-6 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: "linear-gradient(to right, #c9a227, transparent)" }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ border: "1px solid #1e3358", background: "#0b1220" }}
        >
          <div>
            <div className="font-mono-label text-xs tracking-widest uppercase mb-2" style={{ color: "#c9a227" }}>
              Not sure which service fits?
            </div>
            <div className="font-display font-bold text-2xl" style={{ color: "#ffffff" }}>
              Tell us about your project.
            </div>
            <div className="text-sm mt-1" style={{ color: "#7a90b0" }}>
              We will recommend the right approach and provide a free no-obligation quote.
            </div>
          </div>
          <Link
            to="/contact"
            className="shrink-0 font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 inline-block"
            style={{ background: "#c9a227", color: "#080f1e", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#e0b82e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#c9a227")}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
