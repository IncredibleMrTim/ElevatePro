"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import logoImg from "@/assets/logo_1x.webp"

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Compliance", to: "/compliance" },
  { label: "Who We Serve", to: "/sectors" },
  { label: "Gallery", to: "/gallery" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const alwaysSolid = !isHome || scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        alwaysSolid
          ? "border-b border-border bg-background/97 py-3 backdrop-blur-md"
          : "border-b-0 bg-linear-to-b from-background/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl px-6 flex items-center justify-between">
        <div className="flex  font-display gap-4 items-end">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoImg}
              alt="ElevatePro Surveys"
              className="h-14 w-auto object-contain drop-shadow-glow"
              priority
            />
          </Link>

          <div className="flex flex-col leading-7 text-4xl font-bold">
            <div className="text-secondary-foreground">ELEVATEPRO</div>
            <div className="text-xl text-accent">SURVEYS</div>
          </div>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => {
            const isActive = pathname === to
            return (
              <li key={to}>
                <Link
                  href={to}
                  className={`font-mono-label text-xs tracking-widest uppercase transition-colors duration-200 ${
                    isActive ? "text-accent" : "text-secondary-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
          <li>
            <Link
              href="/contact"
              className={`block font-display font-bold text-sm tracking-widest uppercase px-5 py-2.5 text-background transition-all duration-200 ${
                pathname === "/contact" ? "bg-accent-hover" : "bg-accent"
              }`}
            >
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-accent transition-all duration-200 ${
              menuOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-accent transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-accent transition-all duration-200 ${
              menuOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-5 border-t border-border bg-background/98">
          {[...navLinks, { label: "Contact", to: "/contact" }].map(
            ({ label, to }) => (
              <Link
                key={to}
                href={to}
                onClick={() => setMenuOpen(false)}
                className={`font-display font-semibold text-lg tracking-wider uppercase ${
                  pathname === to ? "text-accent" : "text-foreground"
                }`}
              >
                {label}
              </Link>
            ),
          )}
        </div>
      )}
    </nav>
  )
}
