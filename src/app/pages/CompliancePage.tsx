import droneImg from "@/imports/drone.jpeg";

export function CompliancePage() {
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
              Trust & Credentials
            </span>
          </div>
          <h1
            className="font-display font-extrabold leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#ffffff" }}
          >
            LICENSED.
            <br />
            <span style={{ color: "#c9a227" }}>INSURED.</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero split */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="relative">
            <img
              src={droneImg}
              alt="Professional drone in flight at dusk over mountainous terrain"
              className="w-full object-cover"
              style={{ height: "500px", filter: "brightness(0.85) contrast(1.1)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(8,15,30,0.7) 0%, transparent 60%)" }}
            />
            <div
              className="absolute bottom-6 left-6 px-5 py-4"
              style={{
                background: "rgba(8,15,30,0.92)",
                border: "1px solid #c9a227",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="font-mono-label text-xs tracking-widest uppercase mb-1" style={{ color: "#c9a227" }}>
                Certification Status
              </div>
              <div className="font-display font-bold text-lg" style={{ color: "#ffffff" }}>
                UK CAA A2 CoC — Active
              </div>
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#7a90b0", fontWeight: 300 }}>
              Every flight is operated by a fully licensed pilot under UK Civil
              Aviation Authority regulations. Our compliance framework is not a
              box-ticking exercise — it is the foundation of every operation we
              conduct, protecting your project, your site, and the public.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  badge: "CAA",
                  badgeBg: "#c9a227",
                  badgeColor: "#080f1e",
                  title: "UK CAA A2 Certificate of Competency",
                  body: "The A2 CoC is the UK's gold-standard drone pilot certification issued by the Civil Aviation Authority. It authorises close-proximity commercial operations, enabling surveys near buildings and people that other operators cannot legally conduct.",
                },
                {
                  badge: "£5M",
                  badgeBg: "#1a3875",
                  badgeColor: "#c9a227",
                  title: "Commercial Liability Insurance",
                  body: "Comprehensive public and commercial liability cover up to £5 million for all drone operations. Every client, every site, every flight — fully protected.",
                },
                {
                  badge: "GVC",
                  badgeBg: "#c9a227",
                  badgeColor: "#080f1e",
                  title: "Ground Risk Category Assessments",
                  body: "All operations are preceded by thorough site risk assessments and NOTAM checks. We coordinate with relevant authorities and air traffic control where required.",
                },
              ].map(({ badge, badgeBg, badgeColor, title, body }) => (
                <div
                  key={badge}
                  className="flex gap-5 p-5 transition-all duration-200"
                  style={{ border: "1px solid #1e3358", background: "#0e1a2e" }}
                >
                  <div
                    className="shrink-0 w-12 h-12 flex items-center justify-center font-display font-extrabold text-sm"
                    style={{ background: badgeBg, color: badgeColor, letterSpacing: "0.05em" }}
                  >
                    {badge}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-base mb-1" style={{ color: "#e8eef8" }}>
                      {title}
                    </div>
                    <div className="text-sm leading-relaxed" style={{ color: "#7a90b0" }}>
                      {body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regulatory framework */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-block h-px w-12" style={{ background: "#c9a227" }} />
            <span className="font-mono-label text-xs tracking-widest uppercase" style={{ color: "#c9a227" }}>
              Regulatory Framework
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                code: "UK-001",
                label: "CAA Registration",
                desc: "Registered operator with the UK Civil Aviation Authority.",
              },
              {
                code: "A2-CoC",
                label: "A2 Certificate",
                desc: "Highest civilian drone pilot certification in the UK.",
              },
              {
                code: "NOTAM",
                label: "Airspace Checks",
                desc: "Full NOTAM and airspace restriction checks before every flight.",
              },
              {
                code: "GDPR",
                label: "Data Compliance",
                desc: "All imagery captured and stored in line with UK data protection law.",
              },
            ].map(({ code, label, desc }) => (
              <div
                key={code}
                className="p-6"
                style={{ border: "1px solid #1e3358", background: "#0e1a2e" }}
              >
                <div
                  className="font-mono-label text-xs tracking-widest mb-3 inline-block px-2 py-1"
                  style={{ background: "#1a3875", color: "#c9a227" }}
                >
                  {code}
                </div>
                <div className="font-display font-bold text-base mb-2" style={{ color: "#e8eef8" }}>
                  {label}
                </div>
                <div className="text-sm leading-relaxed" style={{ color: "#7a90b0" }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
