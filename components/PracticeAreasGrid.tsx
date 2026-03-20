const practiceAreas = [
  {
    title: "Real Estate Law",
    description:
      "Guidance in residential and commercial purchases, sales, leases, and real estate contracts.",
    bullets: [
      "Purchase and sale agreements",
      "Title review and due diligence",
      "Residential and commercial leases"
    ]
  },
  {
    title: "Inheritance & Estate Matters",
    description:
      "Support in inheritance issues, estate planning, and administration under Puerto Rico law.",
    bullets: [
      "Inheritance and succession matters",
      "Estate planning strategies",
      "Coordination of estate administration"
    ]
  },
  {
    title: "Civil Practice",
    description:
      "Representation in a range of civil disputes and negotiations.",
    bullets: ["Civil litigation", "Contract disputes", "Negotiation and settlement"]
  }
];

export function PracticeAreasGrid() {
  return (
    <section className="section">
      <div className="page-container space-y-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practice Areas
          </h2>
          <p className="mt-3 text-base text-white/70">
            Focused on carefully selected practice areas to provide attentive,
            informed, and timely representation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {practiceAreas.map((area) => (
            <div key={area.title} className="card-surface p-6 sm:p-7">
              <h3 className="font-serif text-xl font-semibold text-gold-soft">
                {area.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{area.description}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-white/75">
                {area.bullets.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

