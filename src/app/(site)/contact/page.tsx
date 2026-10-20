"use client";

import { useState } from "react";

const inputClasses =
  "w-full bg-card border border-border text-foreground px-4 py-3.5 font-sans text-sm outline-none transition-colors duration-200 focus:border-accent";

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-accent">
        <path d="M3 5h18v14H3V5zm0 0l9 7 9-7" strokeWidth="1.5" />
      </svg>
    ),
    label: "Email",
    value: "info@elevateprosurveys.co.uk",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-accent">
        <path
          d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0122 16.9z"
          strokeWidth="1.5"
        />
      </svg>
    ),
    label: "Phone",
    value: "+44 (0) 7700 900 123",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-accent">
        <path
          d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
          strokeWidth="1.5"
        />
      </svg>
    ),
    label: "Coverage",
    value: "Nationwide UK Operations",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-accent">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" strokeWidth="1.5" />
      </svg>
    ),
    label: "Response Time",
    value: "Within 24 hours",
  },
];

const trustStrip = [
  { badge: "CAA", badgeClass: "bg-accent text-background", text: "A2 CoC Certified Pilot" },
  { badge: "£5M", badgeClass: "bg-primary text-accent", text: "Commercial Liability Insurance" },
  { badge: "24h", badgeClass: "bg-accent text-background", text: "Quote Turnaround Guaranteed" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <div className="pt-36 pb-16 px-6 bg-linear-to-b from-surface to-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-px w-12 bg-accent" />
            <span className="font-mono-label text-xs tracking-widest uppercase text-accent">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display font-extrabold leading-none text-page-title text-white">
            REQUEST
            <br />
            <span className="text-accent">A SURVEY</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-16">
          {/* Left: contact info */}
          <div className="md:col-span-2">
            <p className="text-base font-light leading-relaxed mb-10 text-muted-foreground">
              Ready to get aerial data for your project? We provide a free
              consultation and same-day quote. Our team covers projects
              across the UK with rapid mobilisation.
            </p>

            <div className="flex flex-col gap-5 mb-12">
              {contactDetails.map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 border border-border bg-card">
                    {icon}
                  </div>
                  <div>
                    <div className="font-mono-label text-xs tracking-widest uppercase mb-0.5 text-muted-foreground">
                      {label}
                    </div>
                    <div className="font-display font-semibold text-base text-foreground">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="flex flex-col gap-3">
              {trustStrip.map(({ badge, badgeClass, text }) => (
                <div key={badge} className="flex items-center gap-4 px-4 py-3 border border-border bg-card">
                  <div
                    className={`w-10 h-10 shrink-0 flex items-center justify-center font-display font-extrabold text-xs ${badgeClass}`}
                  >
                    {badge}
                  </div>
                  <span className="font-display font-semibold text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3 p-8 border border-border bg-card">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 flex items-center justify-center mb-6 border-2 border-accent">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 stroke-accent">
                    <path d="M20 6L9 17l-5-5" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 text-white">Enquiry Received</h3>
                <p className="text-muted-foreground">
                  We will be in touch within 24 hours with your personalised quote.
                </p>
                <button
                  className="mt-8 font-mono-label text-xs tracking-widest uppercase px-6 py-3 border border-border text-secondary-foreground bg-transparent transition-colors duration-200"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
                  }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-label text-xs tracking-widest uppercase block mb-2 text-accent">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      required
                      className={inputClasses}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-mono-label text-xs tracking-widest uppercase block mb-2 text-accent">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Smith Roofing Ltd"
                      className={inputClasses}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-label text-xs tracking-widest uppercase block mb-2 text-accent">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.co.uk"
                      required
                      className={inputClasses}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-mono-label text-xs tracking-widest uppercase block mb-2 text-accent">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7700 900 000"
                      className={inputClasses}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-label text-xs tracking-widest uppercase block mb-2 text-accent">
                    Service Required *
                  </label>
                  <select
                    required
                    className={`${inputClasses} appearance-none`}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service…</option>
                    <option value="roof">Roof & Building Survey</option>
                    <option value="scaffolding">Scaffolding & Site Inspection</option>
                    <option value="event">Event & Festival Survey</option>
                    <option value="media">Commercial Aerial Photography</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono-label text-xs tracking-widest uppercase block mb-2 text-accent">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project — location, scope, timeline, and any access considerations…"
                    className={`${inputClasses} resize-y`}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="font-display font-bold text-sm tracking-widest uppercase py-4 mt-2 bg-accent text-background transition-all duration-200 hover:bg-accent-hover"
                >
                  Submit Enquiry
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  Free no-obligation quote · Response within 24 hours · Nationwide UK coverage
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
