import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About Our Puerto Rico Law Firm",
  description:
    "Learn about Meléndez López & Robles LLC, a Bayamón, Puerto Rico law firm led by Lic. Fernando L. Meléndez López, focused on real estate, inheritance, estate, and civil law."
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="page-container grid gap-10 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-6">
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A focused Puerto Rico law firm
            </h1>
            <div className="space-y-4 text-sm text-white/75">
              <p>
                Meléndez López &amp; Robles LLC is a law firm based in Bayamón,
                Puerto Rico. The firm is dedicated to providing careful,
                attentive legal representation in{" "}
                <strong className="font-semibold text-gold-soft">
                  real estate law, inheritance and estate matters, and select
                  civil practice matters
                </strong>
                .
              </p>
              <p>
                Clients work directly with the attorney, receiving clear
                explanations, realistic expectations, and practical guidance
                informed by Puerto Rico law and local practice.
              </p>
              <p>
                Matters are handled with an emphasis on preparation, attention
                to detail, and communication so that clients can make informed
                decisions at each stage.
              </p>
            </div>
          </div>
          <aside className="card-surface p-6 sm:p-7">
            <h2 className="font-serif text-2xl font-semibold text-gold-soft">
              Lic. Fernando L. Meléndez López
            </h2>
            <p className="mt-3 text-sm text-white/75">
              Attorney at Law – Puerto Rico
            </p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>
                Lic. Fernando L. Meléndez López focuses his practice on real
                estate law, inheritance and estate matters, and civil practice
                in Puerto Rico.
              </p>
              <p>
                In each representation, he strives to be thorough and
                responsive, understanding that legal matters often arise during
                important personal and business decisions.
              </p>
              <p>
                Consultations are scheduled by appointment. Prospective clients
                are invited to contact the firm to briefly discuss their matter
                and whether the representation is a good fit.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}


