"use client"

import { useState } from "react"
import Image from "next/image"
import img1 from "@/assets/img1.jpeg"
import img2 from "@/assets/img2_1x_webp"
import img3 from "@/assets/img3_1x_webp"
import droneImg from "@/assets/drone_1x.webp"
import mavicImg from "@/assets/WhatsApp_Image_2026-08-19_at_19.21.26.jpeg"

const photos = [
  {
    src: img1,
    alt: "Drone conducting aerial survey over construction site with crane",
    category: "Construction",
    title: "Site Inspection & Progress Tracking",
    desc: "Aerial documentation of an active construction site, showing multi-storey build progress and crane operations.",
  },
  {
    src: img2,
    alt: "Safety engineer with hard hat surveying large wind turbine infrastructure",
    category: "Industrial",
    title: "Structural Engineering Survey",
    desc: "Ground-to-aerial coordination for industrial infrastructure assessment.",
  },
  {
    src: img3,
    alt: "Drone in flight near satellite dishes at sunset",
    category: "Commercial",
    title: "Technology & Media",
    desc: "Commercial aerial photography for tech infrastructure and media clients.",
  },
  {
    src: droneImg,
    alt: "Professional DJI Phantom drone in flight at dusk over mountain landscape",
    category: "Equipment",
    title: "Professional Fleet",
    desc: "Our professional-grade drone fleet, capable of operation in varied conditions and environments.",
  },
  {
    src: mavicImg,
    alt: "DJI Mavic Mini drone in flight against clear blue sky",
    category: "Equipment",
    title: "DJI Mavic Mini Operations",
    desc: "The DJI Mavic Mini — compact, precise, and capable of 4K imagery in tight spaces.",
  },
]

const categories = [
  "All",
  "Construction",
  "Industrial",
  "Commercial",
  "Equipment",
]

export default function GalleryPage() {
  const [filter, setFilter] = useState("All")
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered =
    filter === "All" ? photos : photos.filter((p) => p.category === filter)

  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <div className="pt-36 pb-16 px-6 bg-linear-to-b from-surface to-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-px w-12 bg-accent" />
            <span className="font-mono-label text-xs tracking-widest uppercase text-accent">
              Capabilities
            </span>
          </div>
          <h1 className="font-display font-extrabold leading-none text-page-title text-white">
            IN THE FIELD
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono-label text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                filter === cat
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border bg-card text-muted-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((photo) => (
            <div
              key={photo.title}
              className="relative overflow-hidden group cursor-pointer h-70"
              onClick={() => setLightbox(photos.indexOf(photo))}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 bg-linear-to-t from-background/95 via-background/40 via-60% to-transparent">
                <span className="font-mono-label text-xs tracking-widest uppercase mb-1 text-accent">
                  {photo.category}
                </span>
                <div className="font-display font-bold text-base text-white">
                  {photo.title}
                </div>
                <div className="text-xs mt-1 text-secondary-foreground">
                  {photo.desc}
                </div>
              </div>
              {/* Always visible label */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 group-hover:opacity-0 transition-opacity duration-200 bg-linear-to-t from-background/85 to-transparent">
                <span className="font-mono-label text-xs tracking-widest uppercase text-accent">
                  {photo.category}
                </span>
                <div className="font-display font-semibold text-sm mt-0.5 text-white">
                  {photo.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-surface-deep/97 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="w-full max-h-lightbox object-contain"
            />
            <div className="p-5 bg-card border border-border border-t-0">
              <span className="font-mono-label text-xs tracking-widest uppercase text-accent">
                {photos[lightbox].category}
              </span>
              <div className="font-display font-bold text-xl mt-1 text-white">
                {photos[lightbox].title}
              </div>
              <div className="text-sm mt-1 text-muted-foreground">
                {photos[lightbox].desc}
              </div>
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-background/80 border border-border text-foreground transition-colors duration-200"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            {/* Prev / Next */}
            {lightbox > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 border border-border text-foreground"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox(lightbox - 1)
                }}
              >
                ‹
              </button>
            )}
            {lightbox < photos.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/80 border border-border text-foreground"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox(lightbox + 1)
                }}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
