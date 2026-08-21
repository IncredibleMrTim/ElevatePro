import { useState } from "react";

export function ContactPage() {
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

  const inputStyle: React.CSSProperties = {
    background: "#0e1a2e",
    border: "1px solid #1e3358",
    color: "#e8eef8",
    padding: "0.875rem 1rem",
    width: "100%",
    fontFamily: "Barlow, sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

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
              Get in Touch
            </span>
          </div>
          <h1
            className="font-display font-extrabold leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#ffffff" }}
          >
            REQUEST
            <br />
            <span style={{ color: "#c9a227" }}>A SURVEY</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-16">
          {/* Left: contact info */}
          <div className="md:col-span-2">
            <p className="text-base leading-relaxed mb-10" style={{ color: "#7a90b0", fontWeight: 300 }}>
              Ready to get aerial data for your project? We provide a free
              consultation and same-day quote. Our team covers projects
              across the UK with rapid mobilisation.
            </p>

            <div className="flex flex-col gap-5 mb-12">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M3 5h18v14H3V5zm0 0l9 7 9-7" stroke="#c9a227" strokeWidth="1.5" />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@elevateprosurveys.co.uk",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path
                        d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0122 16.9z"
                        stroke="#c9a227"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+44 (0) 7700 900 123",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path
                        d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                        stroke="#c9a227"
                        strokeWidth="1.5"
                      />
                    </svg>
                  ),
                  label: "Coverage",
                  value: "Nationwide UK Operations",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10" stroke="#c9a227" strokeWidth="1.5" />
                      <path d="M12 6v6l4 2" stroke="#c9a227" strokeWidth="1.5" />
                    </svg>
                  ),
                  label: "Response Time",
                  value: "Within 24 hours",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ border: "1px solid #1e3358", background: "#0e1a2e" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div
                      className="font-mono-label text-xs tracking-widest uppercase mb-0.5"
                      style={{ color: "#7a90b0" }}
                    >
                      {label}
                    </div>
                    <div className="font-display font-semibold text-base" style={{ color: "#e8eef8" }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="flex flex-col gap-3">
              {[
                { badge: "CAA", bg: "#c9a227", color: "#080f1e", text: "A2 CoC Certified Pilot" },
                { badge: "£5M", bg: "#1a3875", color: "#c9a227", text: "Commercial Liability Insurance" },
                { badge: "24h", bg: "#c9a227", color: "#080f1e", text: "Quote Turnaround Guaranteed" },
              ].map(({ badge, bg, color, text }) => (
                <div
                  key={badge}
                  className="flex items-center gap-4 px-4 py-3"
                  style={{ border: "1px solid #1e3358", background: "#0e1a2e" }}
                >
                  <div
                    className="w-10 h-10 shrink-0 flex items-center justify-center font-display font-extrabold text-xs"
                    style={{ background: bg, color }}
                  >
                    {badge}
                  </div>
                  <span className="font-display font-semibold text-sm" style={{ color: "#e8eef8" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="md:col-span-3 p-8"
            style={{ border: "1px solid #1e3358", background: "#0e1a2e" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-6"
                  style={{ border: "2px solid #c9a227" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <path d="M20 6L9 17l-5-5" stroke="#c9a227" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl mb-3" style={{ color: "#ffffff" }}>
                  Enquiry Received
                </h3>
                <p style={{ color: "#7a90b0" }}>
                  We will be in touch within 24 hours with your personalised quote.
                </p>
                <button
                  className="mt-8 font-mono-label text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200"
                  style={{ border: "1px solid #1e3358", color: "#a8bcd8", background: "transparent" }}
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" }); }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-label text-xs tracking-widest uppercase block mb-2" style={{ color: "#c9a227" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      required
                      style={inputStyle}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                      onBlur={(e) => (e.target.style.borderColor = "#1e3358")}
                    />
                  </div>
                  <div>
                    <label className="font-mono-label text-xs tracking-widest uppercase block mb-2" style={{ color: "#c9a227" }}>
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Smith Roofing Ltd"
                      style={inputStyle}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                      onBlur={(e) => (e.target.style.borderColor = "#1e3358")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-label text-xs tracking-widest uppercase block mb-2" style={{ color: "#c9a227" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.co.uk"
                      required
                      style={inputStyle}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                      onBlur={(e) => (e.target.style.borderColor = "#1e3358")}
                    />
                  </div>
                  <div>
                    <label className="font-mono-label text-xs tracking-widest uppercase block mb-2" style={{ color: "#c9a227" }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7700 900 000"
                      style={inputStyle}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                      onBlur={(e) => (e.target.style.borderColor = "#1e3358")}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-label text-xs tracking-widest uppercase block mb-2" style={{ color: "#c9a227" }}>
                    Service Required *
                  </label>
                  <select
                    required
                    style={{ ...inputStyle, appearance: "none" }}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                    onBlur={(e) => (e.target.style.borderColor = "#1e3358")}
                  >
                    <option value="" style={{ background: "#0e1a2e" }}>Select a service…</option>
                    <option value="roof" style={{ background: "#0e1a2e" }}>Roof & Building Survey</option>
                    <option value="scaffolding" style={{ background: "#0e1a2e" }}>Scaffolding & Site Inspection</option>
                    <option value="event" style={{ background: "#0e1a2e" }}>Event & Festival Survey</option>
                    <option value="media" style={{ background: "#0e1a2e" }}>Commercial Aerial Photography</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono-label text-xs tracking-widest uppercase block mb-2" style={{ color: "#c9a227" }}>
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project — location, scope, timeline, and any access considerations…"
                    style={{ ...inputStyle, resize: "vertical" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "#c9a227")}
                    onBlur={(e) => (e.target.style.borderColor = "#1e3358")}
                  />
                </div>

                <button
                  type="submit"
                  className="font-display font-bold text-sm tracking-widest uppercase py-4 transition-all duration-200 mt-2"
                  style={{ background: "#c9a227", color: "#080f1e", letterSpacing: "0.12em" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#e0b82e")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#c9a227")}
                >
                  Submit Enquiry
                </button>

                <p className="text-xs text-center" style={{ color: "#7a90b0" }}>
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
