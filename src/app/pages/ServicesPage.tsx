import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "roof",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M6 38h36M6 38V14l18-8 18 8v24" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M18 38V26h12v12" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M24 14l-6 5h12l-6-5z" stroke="#c9a227" strokeWidth="1.5" />
        <circle cx="36" cy="10" r="3" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M33 8l-3-3M36 7V4M39 8l3-3" stroke="#c9a227" strokeWidth="1.2" />
      </svg>
    ),
    title: "Roof & Building Surveys",
    subtitle: "Structural Assessment",
    description:
      "Detailed high-resolution aerial imagery covering roof tiles, chimney stacks, leadwork, guttering, and external cladding. Identify defects and plan maintenance without scaffolding or expensive access equipment.",
    detail: [
      "Full 4K imagery of all roof surfaces and elevations",
      "Chimney stack and flaunching assessment",
      "Lead flashing, valleys, and ridgeline inspection",
      "Guttering, fascia, and soffit condition reports",
      "Moss, algae, and debris identification",
      "Thermal imaging available on request",
    ],
    tags: ["Chimney Inspection", "Leadwork", "Guttering", "Tile Assessment", "4K Imagery"],
    clients: ["Roofing Contractors", "Building Surveyors", "Property Managers"],
  },
  {
    id: "scaffolding",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="4" y="36" width="40" height="4" stroke="#c9a227" strokeWidth="1.5" />
        <rect x="8" y="28" width="4" height="8" stroke="#c9a227" strokeWidth="1.5" />
        <rect x="22" y="20" width="4" height="16" stroke="#c9a227" strokeWidth="1.5" />
        <rect x="36" y="12" width="4" height="24" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M12 30h10M26 22h10" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M38 14L28 24M14 32L4 42" stroke="#c9a227" strokeWidth="1.2" strokeDasharray="3 2" />
      </svg>
    ),
    title: "Scaffolding & Site Inspections",
    subtitle: "Construction Progress",
    description:
      "Pre-erection site planning photography, ongoing construction progression tracking, and safety inspections at height. Comprehensive documentation for contractors and project managers.",
    detail: [
      "Pre-erection site surveys and access planning",
      "Weekly or milestone-based progress photography",
      "Safety inspection imagery for compliance records",
      "Multi-angle site documentation packages",
      "Geo-tagged images with timestamps",
      "Fast 24-hour turnaround on deliverables",
    ],
    tags: ["Pre-erection Planning", "Progress Tracking", "Safety Compliance", "Documentation"],
    clients: ["Scaffolding Companies", "Building Contractors", "Structural Engineers"],
  },
  {
    id: "event",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" stroke="#c9a227" strokeWidth="1.5" />
        <path
          d="M6 24h36M24 6c-5 6-8 12-8 18s3 12 8 18M24 6c5 6 8 12 8 18s-3 12-8 18"
          stroke="#c9a227"
          strokeWidth="1.5"
        />
        <path d="M10 16h28M10 32h28" stroke="#c9a227" strokeWidth="1.2" strokeDasharray="3 2" />
        <circle cx="24" cy="24" r="3" fill="#c9a227" />
      </svg>
    ),
    title: "Event & Festival Surveys",
    subtitle: "Large-Scale Site Mapping",
    description:
      "Comprehensive site mapping, crowd flow analysis visuals, and aerial photography for music festivals and large-scale outdoor events. Essential data for organisers, safety teams, and local authorities.",
    detail: [
      "Full-site orthomosaic mapping and measurements",
      "Crowd density and flow analysis imagery",
      "Pre-event infrastructure and access road surveys",
      "Live aerial photography during events",
      "Post-event site condition documentation",
      "Deliverables suitable for licensing applications",
    ],
    tags: ["Site Mapping", "Crowd Flow", "Festival Photography", "Event Planning", "Licensing"],
    clients: ["Event Organisers", "Music Festival Promoters", "Local Authorities"],
  },
  {
    id: "media",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="14" width="32" height="22" rx="2" stroke="#c9a227" strokeWidth="1.5" />
        <circle cx="24" cy="25" r="6" stroke="#c9a227" strokeWidth="1.5" />
        <circle cx="24" cy="25" r="2.5" fill="#c9a227" />
        <path d="M8 18h4M36 18h4M24 8v6" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M16 12l2 2M32 12l-2 2" stroke="#c9a227" strokeWidth="1.2" />
      </svg>
    ),
    title: "Commercial Aerial Photography",
    subtitle: "Media & Marketing",
    description:
      "High-impact promotional drone photography and 4K video for marketing campaigns, real estate listings, and corporate portfolios. Cinematic quality that elevates your brand.",
    detail: [
      "4K Ultra HD video with stabilised gimbal",
      "RAW and JPEG stills for editorial flexibility",
      "Property listings and development site fly-throughs",
      "Corporate campus and facility showcases",
      "Construction marketing and progress reels",
      "Edited final deliverables within 48 hours",
    ],
    tags: ["4K Video", "Real Estate", "Marketing", "Corporate", "RAW Stills"],
    clients: ["Estate Agents", "Property Developers", "Marketing Agencies"],
  },
];

export function ServicesPage() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

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
              What We Do
            </span>
          </div>
          <h1
            className="font-display font-extrabold leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#ffffff" }}
          >
            CORE SERVICES
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service tabs */}
        <div
          className="flex flex-wrap gap-px mb-12"
          style={{ border: "1px solid #1e3358", background: "#1e3358" }}
        >
          {services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setActive(svc.id)}
              className="flex-1 min-w-[160px] px-5 py-4 text-left transition-all duration-200"
              style={{
                background: active === svc.id ? "#0e1a2e" : "#080f1e",
                borderBottom: active === svc.id ? "2px solid #c9a227" : "2px solid transparent",
              }}
            >
              <div
                className="font-mono-label text-xs tracking-widest uppercase mb-1"
                style={{ color: active === svc.id ? "#c9a227" : "#7a90b0" }}
              >
                {svc.subtitle}
              </div>
              <div
                className="font-display font-bold text-base"
                style={{ color: active === svc.id ? "#ffffff" : "#a8bcd8" }}
              >
                {svc.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div
              className="p-4 inline-block mb-6"
              style={{ border: "1px solid #1e3358", background: "#0e1a2e" }}
            >
              {current.icon}
            </div>
            <h2
              className="font-display font-extrabold text-4xl mb-4"
              style={{ color: "#ffffff" }}
            >
              {current.title}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#7a90b0", fontWeight: 300 }}>
              {current.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label text-xs px-3 py-1.5 tracking-wide"
                  style={{ background: "#0e1a2e", border: "1px solid #1e3358", color: "#a8bcd8" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 inline-block"
              style={{ background: "#c9a227", color: "#080f1e" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#e0b82e")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#c9a227")}
            >
              Get a Quote
            </Link>
          </div>

          <div>
            <div
              className="font-mono-label text-xs tracking-widest uppercase mb-5"
              style={{ color: "#c9a227" }}
            >
              What's Included
            </div>
            <ul className="flex flex-col gap-3">
              {current.detail.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 py-4 px-5"
                  style={{ border: "1px solid #1e3358", background: "#0e1a2e" }}
                >
                  <span
                    className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center"
                    style={{ border: "1px solid #c9a227" }}
                  >
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path d="M2 6l3 3 5-5" stroke="#c9a227" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "#a8bcd8" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className="mt-6 p-5"
              style={{ border: "1px solid #1e3358", background: "#0b1220" }}
            >
              <div className="font-mono-label text-xs tracking-widest uppercase mb-3" style={{ color: "#7a90b0" }}>
                Typical Clients
              </div>
              <div className="flex flex-wrap gap-2">
                {current.clients.map((c) => (
                  <span
                    key={c}
                    className="font-display font-semibold text-sm px-4 py-1.5"
                    style={{ background: "#1a3875", color: "#e8eef8" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
