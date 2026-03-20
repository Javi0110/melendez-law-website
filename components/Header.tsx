import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="border-b border-white/5 bg-navy-dark/80 backdrop-blur">
      <div className="page-container flex h-20 items-center justify-between gap-6">
        <div>
          <Link href="/" className="block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-gradient-to-br from-gold-soft to-gold shadow-md shadow-gold/30">
                <span className="text-sm font-bold tracking-tight text-navy">
                  ML
                </span>
              </div>
              <div className="leading-tight">
                <p className="font-serif text-lg font-semibold tracking-tight text-white">
                  Meléndez López &amp; Robles LLC
                </p>
                <p className="text-xs text-white/60">
                  Attorneys at Law – Puerto Rico
                </p>
              </div>
            </div>
          </Link>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}

