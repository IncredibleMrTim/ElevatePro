import { Link } from "react-router-dom";
import mavicImg from "@/imports/WhatsApp_Image_2026-08-19_at_19.21.26.jpeg";

export function HomePage() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={mavicImg}
          alt="DJI Mavic Mini drone in flight against clear blue sky"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(8,15,30,0.95) 0%, rgba(8,15,30,0.78) 55%, rgba(8,15,30,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#1e3358 1px, transparent 1px), linear-gradient(90deg, #1e3358 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="inline-block h-px w-12"
            style={{ background: "#c9a227" }}
          />
          <span className="font-mono-label text-xs tracking-widest uppercase" style={{ color: "#c9a227" }}>
            UK CAA Licensed · Fully Insured
          </span>
        </div>

        <h1
          className="font-display font-extrabold leading-none mb-6"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "#ffffff",
            textShadow: "0 0 60px rgba(201,162,39,0.15)",
          }}
        >
          PRECISION
          <br />
          <span style={{ color: "#c9a227" }}>FROM ABOVE.</span>
        </h1>

        <p
          className="max-w-xl text-lg leading-relaxed mb-10"
          style={{ color: "#a8bcd8", fontWeight: 300 }}
        >
          Professional high-definition aerial drone services for construction,
          roofing, property management, and events. Safe. Rapid. Accurate.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 inline-block"
            style={{ background: "#c9a227", color: "#080f1e" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#e0b82e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#c9a227")}
          >
            Request a Survey
          </Link>
          <Link
            to="/services"
            className="font-display font-bold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 inline-block"
            style={{
              border: "1px solid #1e3358",
              color: "#e8eef8",
              background: "rgba(26,56,117,0.2)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#c9a227";
              el.style.color = "#c9a227";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#1e3358";
              el.style.color = "#e8eef8";
            }}
          >
            Our Services
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap gap-8 mt-20 pt-10"
          style={{ borderTop: "1px solid #1e3358" }}
        >
          {[
            ["100%", "CAA Compliant"],
            ["HD", "4K Resolution"],
            ["24hr", "Turnaround"],
            ["£5M", "Liability Cover"],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="font-display font-extrabold text-3xl" style={{ color: "#c9a227" }}>
                {val}
              </div>
              <div
                className="font-mono-label text-xs tracking-widest uppercase mt-1"
                style={{ color: "#7a90b0" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="font-mono-label text-xs tracking-widest" style={{ color: "#7a90b0" }}>
          EXPLORE
        </span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 0v16M1 9l7 8 7-8" stroke="#c9a227" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Quick-nav strip */}
      <div
        className="absolute bottom-0 left-0 right-0 hidden md:flex"
        style={{ borderTop: "1px solid #1e3358", background: "rgba(8,15,30,0.85)", backdropFilter: "blur(8px)" }}
      >
        {[
          { label: "Services", to: "/services", sub: "4 specialisms" },
          { label: "Compliance", to: "/compliance", sub: "CAA · Insured" },
          { label: "Who We Serve", to: "/sectors", sub: "6 sectors" },
          { label: "Gallery", to: "/gallery", sub: "See our work" },
          { label: "Contact", to: "/contact", sub: "Free quote" },
        ].map(({ label, to, sub }, i, arr) => (
          <Link
            key={to}
            to={to}
            className="flex-1 px-6 py-4 flex flex-col justify-center transition-all duration-200 group"
            style={{
              borderRight: i < arr.length - 1 ? "1px solid #1e3358" : "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "rgba(26,56,117,0.3)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "transparent")
            }
          >
            <span
              className="font-display font-bold text-sm transition-colors duration-200"
              style={{ color: "#e8eef8" }}
            >
              {label}
            </span>
            <span className="font-mono-label text-xs mt-0.5" style={{ color: "#7a90b0" }}>
              {sub}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
