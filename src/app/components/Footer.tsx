import { NavLink } from "react-router-dom";
import logoImg from "@/imports/logo.jpeg";

export function Footer() {
  return (
    <footer style={{ background: "#050b14", borderTop: "1px solid #1e3358" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <img
              src={logoImg}
              alt="ElevatePro Surveys"
              className="h-20 w-auto object-contain mb-4"
              style={{ filter: "drop-shadow(0 0 8px rgba(201,162,39,0.3))" }}
            />
            <p className="text-sm leading-relaxed" style={{ color: "#7a90b0" }}>
              Professional aerial drone services for construction, roofing,
              property, and events across the UK.
            </p>
          </div>

          <div>
            <div
              className="font-mono-label text-xs tracking-widest uppercase mb-5"
              style={{ color: "#c9a227" }}
            >
              Services
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Roof & Building Surveys", to: "/services" },
                { label: "Scaffolding & Site Inspections", to: "/services" },
                { label: "Event & Festival Surveys", to: "/services" },
                { label: "Commercial Aerial Photography", to: "/services" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#7a90b0" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#c9a227")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#7a90b0")
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="font-mono-label text-xs tracking-widest uppercase mb-5"
              style={{ color: "#c9a227" }}
            >
              Compliance
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="px-4 py-3 flex items-center gap-3"
                style={{ border: "1px solid #1e3358", background: "#0e1a2e" }}
              >
                <div
                  className="font-display font-extrabold text-xs w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ background: "#c9a227", color: "#080f1e" }}
                >
                  CAA
                </div>
                <div>
                  <div
                    className="font-display font-semibold text-sm"
                    style={{ color: "#e8eef8" }}
                  >
                    A2 CoC Certified
                  </div>
                  <div className="text-xs" style={{ color: "#7a90b0" }}>
                    UK CAA Approved Pilot
                  </div>
                </div>
              </div>
              <div
                className="px-4 py-3 flex items-center gap-3"
                style={{ border: "1px solid #1e3358", background: "#0e1a2e" }}
              >
                <div
                  className="font-display font-extrabold text-xs w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ background: "#1a3875", color: "#c9a227" }}
                >
                  £5M
                </div>
                <div>
                  <div
                    className="font-display font-semibold text-sm"
                    style={{ color: "#e8eef8" }}
                  >
                    Fully Insured
                  </div>
                  <div className="text-xs" style={{ color: "#7a90b0" }}>
                    Commercial Liability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid #1e3358" }}
        >
          <div className="font-mono-label text-xs" style={{ color: "#7a90b0" }}>
            © 2026 ElevatePro Surveys Ltd. All rights reserved.
          </div>
          <div className="font-mono-label text-xs" style={{ color: "#7a90b0" }}>
            CAA Registration · Commercial Liability Insured · UK Operations
          </div>
        </div>
      </div>
    </footer>
  );
}
