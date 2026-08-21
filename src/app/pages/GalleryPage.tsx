import { useState } from "react";
import img1 from "@/imports/img1.jpeg";
import img2 from "@/imports/img2.jpeg";
import img3 from "@/imports/img3.jpeg";
import droneImg from "@/imports/drone.jpeg";
import mavicImg from "@/imports/WhatsApp_Image_2026-08-19_at_19.21.26.jpeg";

const photos = [
  {
    src: img1,
    alt: "Drone conducting aerial survey over construction site with crane",
    category: "Construction",
    title: "Site Inspection & Progress Tracking",
    desc: "Aerial documentation of an active construction site, showing multi-storey build progress and crane operations.",
    span: "col-span-2 row-span-2",
  },
  {
    src: img2,
    alt: "Safety engineer with hard hat surveying large wind turbine infrastructure",
    category: "Industrial",
    title: "Structural Engineering Survey",
    desc: "Ground-to-aerial coordination for industrial infrastructure assessment.",
    span: "",
  },
  {
    src: img3,
    alt: "Drone in flight near satellite dishes at sunset",
    category: "Commercial",
    title: "Technology & Media",
    desc: "Commercial aerial photography for tech infrastructure and media clients.",
    span: "",
  },
  {
    src: droneImg,
    alt: "Professional DJI Phantom drone in flight at dusk over mountain landscape",
    category: "Equipment",
    title: "Professional Fleet",
    desc: "Our professional-grade drone fleet, capable of operation in varied conditions and environments.",
    span: "",
  },
  {
    src: mavicImg,
    alt: "DJI Mavic Mini drone in flight against clear blue sky",
    category: "Equipment",
    title: "DJI Mavic Mini Operations",
    desc: "The DJI Mavic Mini — compact, precise, and capable of 4K imagery in tight spaces.",
    span: "",
  },
];

const categories = ["All", "Construction", "Industrial", "Commercial", "Equipment"];

export function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? photos : photos.filter((p) => p.category === filter);

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
              Capabilities
            </span>
          </div>
          <h1
            className="font-display font-extrabold leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#ffffff" }}
          >
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
              className="font-mono-label text-xs tracking-widest uppercase px-4 py-2 transition-all duration-200"
              style={{
                border: "1px solid",
                borderColor: filter === cat ? "#c9a227" : "#1e3358",
                background: filter === cat ? "rgba(201,162,39,0.1)" : "#0e1a2e",
                color: filter === cat ? "#c9a227" : "#7a90b0",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((photo, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer"
              style={{ height: "280px" }}
              onClick={() => setLightbox(photos.indexOf(photo))}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ transition: "transform 0.7s ease" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
                style={{
                  background: "linear-gradient(to top, rgba(8,15,30,0.95) 0%, rgba(8,15,30,0.4) 60%, transparent 100%)",
                }}
              >
                <span
                  className="font-mono-label text-xs tracking-widest uppercase mb-1"
                  style={{ color: "#c9a227" }}
                >
                  {photo.category}
                </span>
                <div className="font-display font-bold text-base" style={{ color: "#ffffff" }}>
                  {photo.title}
                </div>
                <div className="text-xs mt-1" style={{ color: "#a8bcd8" }}>
                  {photo.desc}
                </div>
              </div>
              {/* Always visible label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 group-hover:opacity-0 transition-opacity duration-200"
                style={{ background: "linear-gradient(to top, rgba(8,15,30,0.85), transparent)" }}
              >
                <span className="font-mono-label text-xs tracking-widest uppercase" style={{ color: "#c9a227" }}>
                  {photo.category}
                </span>
                <div className="font-display font-semibold text-sm mt-0.5" style={{ color: "#ffffff" }}>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(5,11,20,0.97)", backdropFilter: "blur(12px)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="w-full object-contain"
              style={{ maxHeight: "75vh" }}
            />
            <div
              className="p-5"
              style={{ background: "#0e1a2e", border: "1px solid #1e3358", borderTop: "none" }}
            >
              <span className="font-mono-label text-xs tracking-widest uppercase" style={{ color: "#c9a227" }}>
                {photos[lightbox].category}
              </span>
              <div className="font-display font-bold text-xl mt-1" style={{ color: "#ffffff" }}>
                {photos[lightbox].title}
              </div>
              <div className="text-sm mt-1" style={{ color: "#7a90b0" }}>
                {photos[lightbox].desc}
              </div>
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(8,15,30,0.8)", border: "1px solid #1e3358", color: "#e8eef8" }}
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            {/* Prev / Next */}
            {lightbox > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                style={{ background: "rgba(8,15,30,0.8)", border: "1px solid #1e3358", color: "#e8eef8" }}
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              >
                ‹
              </button>
            )}
            {lightbox < photos.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                style={{ background: "rgba(8,15,30,0.8)", border: "1px solid #1e3358", color: "#e8eef8" }}
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
