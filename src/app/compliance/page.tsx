import Image from "next/image"
import droneImg from "@/assets/drone_1x.webp"

const credentials = [
  {
    badge: "CAA",
    badgeClass: "bg-accent text-background",
    title: "UK CAA A2 Certificate of Competency",
    body: "The A2 CoC is the UK's gold-standard drone pilot certification issued by the Civil Aviation Authority. It authorises close-proximity commercial operations, enabling surveys near buildings and people that other operators cannot legally conduct.",
  },
  {
    badge: "£5M",
    badgeClass: "bg-primary text-accent",
    title: "Commercial Liability Insurance",
    body: "Comprehensive public and commercial liability cover up to £5 million for all drone operations. Every client, every site, every flight — fully protected.",
  },
  {
    badge: "GVC",
    badgeClass: "bg-accent text-background",
    title: "Ground Risk Category Assessments",
    body: "All operations are preceded by thorough site risk assessments and NOTAM checks. We coordinate with relevant authorities and air traffic control where required.",
  },
]

const framework = [
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
]

export default function CompliancePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <div className="pt-36 pb-16 px-6 bg-linear-to-b from-surface to-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block h-px w-12 bg-accent" />
            <span className="font-mono-label text-xs tracking-widest uppercase text-accent">
              Trust & Credentials
            </span>
          </div>
          <h1 className="font-display font-extrabold leading-none text-page-title text-white">
            LICENSED.
            <br />
            <span className="text-accent">INSURED.</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero split */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <div className="relative h-125 w-full">
            <Image
              src={droneImg}
              alt="Professional drone in flight at dusk over mountainous terrain"
              fill
              className="object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent to-60%" />
            <div className="absolute bottom-6 left-6 px-5 py-4 bg-background/92 border border-accent backdrop-blur">
              <div className="font-mono-label text-xs tracking-widest uppercase mb-1 text-accent">
                Certification Status
              </div>
              <div className="font-display font-bold text-lg text-white">
                UK CAA A2 CoC — Active
              </div>
            </div>
          </div>

          <div>
            <p className="text-base font-light leading-relaxed mb-10 text-muted-foreground">
              Every flight is operated by a fully licensed pilot under UK Civil
              Aviation Authority regulations. Our compliance framework is not a
              box-ticking exercise — it is the foundation of every operation we
              conduct, protecting your project, your site, and the public.
            </p>

            <div className="flex flex-col gap-5">
              {credentials.map(({ badge, badgeClass, title, body }) => (
                <div
                  key={badge}
                  className="flex gap-5 p-5 border border-border bg-card transition-all duration-200"
                >
                  <div
                    className={`shrink-0 w-12 h-12 flex items-center justify-center font-display font-extrabold text-sm tracking-wider ${badgeClass}`}
                  >
                    {badge}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-base mb-1 text-foreground">
                      {title}
                    </div>
                    <div className="text-sm leading-relaxed text-muted-foreground">
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
            <span className="inline-block h-px w-12 bg-accent" />
            <span className="font-mono-label text-xs tracking-widest uppercase text-accent">
              Regulatory Framework
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {framework.map(({ code, label, desc }) => (
              <div key={code} className="p-6 border border-border bg-card">
                <div className="font-mono-label text-xs tracking-widest mb-3 inline-block px-2 py-1 bg-primary text-accent">
                  {code}
                </div>
                <div className="font-display font-bold text-base mb-2 text-foreground">
                  {label}
                </div>
                <div className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
