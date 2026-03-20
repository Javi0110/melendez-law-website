import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PracticeAreasGrid } from "@/components/PracticeAreasGrid";

export const metadata = {
  title: "Real Estate, Inheritance & Civil Practice Areas in Puerto Rico",
  description:
    "Explore the practice areas of Meléndez López & Robles LLC in Bayamón, Puerto Rico, including real estate law, inheritance and estate matters, and civil practice."
};

export default function PracticeAreasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section pb-4">
          <div className="page-container max-w-3xl">
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Practice areas in Puerto Rico
            </h1>
            <p className="mt-3 text-sm text-white/75">
              The firm focuses on a defined set of practice areas in order to
              provide attentive and informed representation for clients in
              Puerto Rico.
            </p>
          </div>
        </section>
        <PracticeAreasGrid />
      </main>
      <Footer />
    </>
  );
}


