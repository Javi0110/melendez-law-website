import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PracticeAreasGrid } from "@/components/PracticeAreasGrid";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeAreasGrid />
        <section className="section pt-0">
          <div className="page-container grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="card-surface p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-white">
                A focused, client‑oriented Puerto Rico practice.
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Every matter is handled with care, clear communication, and
                respect for your time and objectives. You will work directly
                with the attorney, not passed from person to person.
              </p>
              <p className="mt-3 text-sm text-white/70">
                Whether you are completing a real estate transaction, addressing
                an inheritance issue, or facing a civil dispute in Puerto Rico,
                the firm aims to provide practical, well‑reasoned guidance at
                every step.
              </p>
            </div>
            <div className="space-y-4 text-sm text-white/75">
              <div>
                <p className="font-semibold text-gold-soft">Office</p>
                <p>
                  Urb Santa Rosa Ave Aguas Buenas 16-30
                  <br />
                  Bayamón PR 00959
                </p>
              </div>
              <div>
                <p className="font-semibold text-gold-soft">Mailing</p>
                <p>
                  PO Box 55056
                  <br />
                  Bayamón PR 00960-4056
                </p>
              </div>
              <div>
                <p className="font-semibold text-gold-soft">Contact</p>
                <p>Phone: 787-946-1810</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:bufetemlyr@outlook.com"
                    className="underline decoration-gold/70 underline-offset-4"
                  >
                    bufetemlyr@outlook.com
                  </a>
                </p>
              </div>
              <div>
                <Link href="/contact" className="btn-primary">
                  Schedule a consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


