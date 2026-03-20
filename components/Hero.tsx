import Link from "next/link";

export function Hero() {
  return (
    <section className="section pb-10">
      <div className="page-container grid gap-10 lg:grid-cols-[1.5fr,1fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Puerto Rico Real Estate &amp; Inheritance Law
          </p>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trusted Puerto Rico{" "}
            <span className="text-gold">
              real estate, inheritance &amp; civil
            </span>{" "}
            counsel.
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            At Meléndez López &amp; Robles LLC, we provide attentive,
            detail‑oriented representation in complex real estate transactions,
            inheritance and estate matters, and civil practice throughout Puerto
            Rico.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request consultation
            </Link>
            <Link href="/practice-areas" className="btn-ghost">
              View practice areas
            </Link>
          </div>
          <div className="mt-4 grid gap-4 text-sm text-white/60 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-gold-soft">Practice Focus</p>
              <p>Real estate, inheritance &amp; estate, civil practice.</p>
            </div>
            <div>
              <p className="font-semibold text-gold-soft">Location</p>
              <p>Bayamón, Puerto Rico – serving clients island‑wide.</p>
            </div>
            <div>
              <p className="font-semibold text-gold-soft">Attorney</p>
              <p>Lic. Fernando L. Meléndez López</p>
            </div>
          </div>
        </div>
        <div className="card-surface relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_55%)]" />
          <div className="relative space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-soft">
              Areas of focus
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>• Residential and commercial real estate transactions</li>
              <li>• Title review, due diligence, and contract drafting</li>
              <li>• Inheritance and estate planning and administration</li>
              <li>• Civil litigation and dispute resolution</li>
            </ul>
            <div className="mt-4 rounded-xl border border-gold/25 bg-navy-dark/60 px-4 py-3 text-sm">
              <p className="font-semibold text-gold-soft">
                Consultations by appointment
              </p>
              <p className="text-white/70">
                Call <span className="font-semibold">787‑946‑1810</span> or
                email{" "}
                <a
                  href="mailto:bufetemlyr@outlook.com"
                  className="underline decoration-gold/70 underline-offset-4"
                >
                  bufetemlyr@outlook.com
                </a>{" "}
                to schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


