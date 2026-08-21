import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "@/imports/logo.jpeg";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Compliance", to: "/compliance" },
  { label: "Who We Serve", to: "/sectors" },
  { label: "Gallery", to: "/gallery" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const alwaysSolid = !isHome || scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: alwaysSolid ? "0.75rem 0" : "1.25rem 0",
        background: alwaysSolid
          ? "rgba(8, 15, 30, 0.97)"
          : "linear-gradient(to bottom, rgba(8,15,30,0.9) 0%, transparent 100%)",
        borderBottom: alwaysSolid ? "1px solid #1e3358" : "none",
        backdropFilter: alwaysSolid ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="ElevatePro Surveys"
            className="h-14 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 8px rgba(201,162,39,0.4))" }}
          />
        </NavLink>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className="font-mono-label text-xs tracking-widest uppercase transition-colors duration-200"
                style={({ isActive }) => ({
                  color: isActive ? "#c9a227" : "#a8bcd8",
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              className="font-display font-bold text-sm tracking-widest uppercase px-5 py-2.5 transition-all duration-200"
              style={({ isActive }) => ({
                background: isActive ? "#e0b82e" : "#c9a227",
                color: "#080f1e",
                letterSpacing: "0.1em",
                display: "block",
              })}
            >
              Get a Quote
            </NavLink>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5"
              style={{
                background: "#c9a227",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
                transition: "all 0.2s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-5"
          style={{
            background: "rgba(8,15,30,0.98)",
            borderTop: "1px solid #1e3358",
          }}
        >
          {[...navLinks, { label: "Contact", to: "/contact" }].map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className="font-display font-semibold text-lg tracking-wider uppercase"
              style={({ isActive }) => ({ color: isActive ? "#c9a227" : "#e8eef8" })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
