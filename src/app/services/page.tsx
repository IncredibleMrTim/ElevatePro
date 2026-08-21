"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "roof",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-accent">
        <path d="M6 38h36M6 38V14l18-8 18 8v24" strokeWidth="1.5" />
        <path d="M18 38V26h12v12" strokeWidth="1.5" />
        <path d="M24 14l-6 5h12l-6-5z" strokeWidth="1.5" />
        <circle cx="36" cy="10" r="3" strokeWidth="1.5" />
        <path d="M33 8l-3-3M36 7V4M39 8l3-3" strokeWidth="1.2" />
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
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-accent">
        <rect x="4" y="36" width="40" height="4" strokeWidth="1.5" />
        <rect x="8" y="28" width="4" height="8" strokeWidth="1.5" />
        <rect x="22" y="20" width="4" height="16" strokeWidth="1.5" />
        <rect x="36" y="12" width="4" height="24" strokeWidth="1.5" />
        <path d="M12 30h10M26 22h10" strokeWidth="1.5" />
        <path d="M38 14L28 24M14 32L4 42" strokeWidth="1.2" strokeDasharray="3 2" />
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
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-accent">
        <circle cx="24" cy="24" r="18" strokeWidth="1.5" />
        <path
          d="M6 24h36M24 6c-5 6-8 12-8 18s3 12 8 18M24 6c5 6 8 12 8 18s-3 12-8 18"
          strokeWidth="1.5"
        />
        <path d="M10 16h28M10 32h28" strokeWidth="1.2" strokeDasharray="3 2" />
        <circle cx="24" cy="24" r="3" className="fill-accent" />
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
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-accent">
        <rect x="8" y="14" width="32" height="22" rx="2" strokeWidth="1.5" />
        <circle cx="24" cy="25" r="6" strokeWidth="1.5" />
        <circle cx="24" cy="25" r="2.5" className="fill-accent" />
        <path d="M8 18h4M36 18h4M24 8v6" strokeWidth="1.5" />
        <path d="M16 12l2 2M32 12l-2 2" strokeWidth="1.2" />
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

export default function ServicesPage() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <div className="pt-36 pb-16 px-6 bg-linear-to-b from-surface to-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-px w-12 bg-accent" />
            <span className="font-mono-label text-xs tracking-widest uppercase text-accent">
              What We Do
            </span>
          </div>
          <h1 className="font-display font-extrabold leading-none text-page-title text-white">
            CORE SERVICES
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Service tabs */}
        <div className="flex flex-wrap gap-px mb-12 border border-border bg-border">
          {services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setActive(svc.id)}
              className={`flex-1 min-w-40 px-5 py-4 text-left border-b-2 transition-all duration-200 ${
                active === svc.id ? "bg-card border-accent" : "bg-background border-transparent"
              }`}
            >
              <div
                className={`font-mono-label text-xs tracking-widest uppercase mb-1 ${
                  active === svc.id ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {svc.subtitle}
              </div>
              <div
                className={`font-display font-bold text-base ${
                  active === svc.id ? "text-white" : "text-secondary-foreground"
                }`}
              >
                {svc.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="p-4 inline-block mb-6 border border-border bg-card">{current.icon}</div>
            <h2 className="font-display font-extrabold text-4xl mb-4 text-white">{current.title}</h2>
            <p className="text-base font-light leading-relaxed mb-8 text-muted-foreground">
              {current.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-label text-xs px-3 py-1.5 tracking-wide bg-card border border-border text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block font-display font-bold text-sm tracking-widest uppercase px-8 py-4 bg-accent text-background transition-all duration-200 hover:bg-accent-hover"
            >
              Get a Quote
            </Link>
          </div>

          <div>
            <div className="font-mono-label text-xs tracking-widest uppercase mb-5 text-accent">
              What&apos;s Included
            </div>
            <ul className="flex flex-col gap-3">
              {current.detail.map((item) => (
                <li key={item} className="flex items-start gap-4 py-4 px-5 border border-border bg-card">
                  <span className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center border border-accent">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 stroke-accent">
                      <path d="M2 6l3 3 5-5" strokeWidth="1.5" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-secondary-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-5 border border-border bg-surface">
              <div className="font-mono-label text-xs tracking-widest uppercase mb-3 text-muted-foreground">
                Typical Clients
              </div>
              <div className="flex flex-wrap gap-2">
                {current.clients.map((c) => (
                  <span
                    key={c}
                    className="font-display font-semibold text-sm px-4 py-1.5 bg-primary text-foreground"
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
