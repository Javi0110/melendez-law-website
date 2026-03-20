import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact a Puerto Rico Real Estate & Inheritance Lawyer",
  description:
    "Contact Meléndez López & Robles LLC in Bayamón, Puerto Rico to request a consultation regarding real estate, inheritance, estate, or civil matters."
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.3fr,1fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Contact the firm
              </h1>
              <p className="mt-3 text-sm text-white/75">
                Please use this form to request a consultation regarding{" "}
                <strong className="font-semibold text-gold-soft">
                  real estate, inheritance, estate, or civil matters in Puerto
                  Rico
                </strong>
                . Sharing basic information helps us understand how we may
                assist you.
              </p>
            </div>
            <div className="card-surface p-6 sm:p-7">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-6 text-sm text-white/75">
            <div className="card-surface p-5 sm:p-6">
              <h2 className="font-serif text-xl font-semibold text-gold-soft">
                Office &amp; mailing
              </h2>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="font-semibold text-white">Office Address</p>
                  <p>
                    Urb Santa Rosa Ave Aguas Buenas 16-30
                    <br />
                    Bayamón PR 00959
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Mailing Address</p>
                  <p>
                    PO Box 55056
                    <br />
                    Bayamón PR 00960-4056
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>787-946-1810</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>bufetemlyr@outlook.com</p>
                </div>
              </div>
            </div>
            <div className="card-surface p-4 sm:p-5">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="Office location map"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.680626358312!2d-66.162!3d18.383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBayam%C3%B3n%2C%20Puerto%20Rico!5e0!3m2!1sen!2spr!4v1700000000000"
                />
              </div>
              <p className="mt-2 text-[11px] text-white/50">
                Map is approximate and provided for general location reference
                only.
              </p>
            </div>
            <p className="text-xs text-white/50">
              Using this form does not create an attorney‑client relationship.
              Please do not send confidential or time‑sensitive information
              until an engagement is confirmed.
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}


